// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/normalize.scss';
import './css/base.scss';
import goFetch from './fetch-requests.js'
import User from './User.js'
import Trip from './Trip.js'
import Destination from './Destination.js'
import TripRepo from '../src/TripRepo.js';
import flatpickr from "flatpickr";



// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/GV-logo.png';
let calendar = document.querySelector('#date time');
let currentTripsBtn = document.querySelector('#current-btn');
let newTripsBtn = document.querySelector('#book-trip-btn');
let pastTripsBtn = document.querySelector('#past-btn');
let titleH1 = document.querySelector('#main-title');
let upcomingTripsBtn = document.querySelector('#upcoming-btn');
let user, users, trips, destinations, date, currentYear;
window.addEventListener("load", () => {
  retrieveData();
  createCalendar();
});
currentTripsBtn.addEventListener('click', () => toggleMain('Current Trips'));
newTripsBtn.addEventListener('click', () => toggleMain('Looking for adventure?'));
pastTripsBtn.addEventListener('click', () => toggleMain('Past Trips'));
upcomingTripsBtn.addEventListener('click', () => toggleMain('Upcoming Trips'));

function retrieveData() {
  goFetch.getServerData()
  .then(([u, t, d]) => {
    destinations = d.destinations.map(dData => new Destination(dData));
    trips = new TripRepo(t.trips, destinations);
    users = u.travelers;
    generateUser();

  })
  .catch(err => console.log(err));
}

function generateUser() {
  user = new User (users[getRandomIndex(users)]);
  user.folio = trips.getFolioByUser(user.id);
  console.log(user)
}

function createCalendar() {
  date = Date();
  flatpickr(calendar, {
    defaultDate: 'today',
    onChange: displayCurrentDate
  });
  displayCurrentDate([Date()]);
}

function displayCurrentDate([newDate]) {
  date = new Date(newDate);
  calendar.innerText = date.toString().slice(0, 15);
  if(currentYear !== date.getFullYear()) getStatsForYear();
}

function getStatsForYear() {
  console.log('It\s now', date.getFullYear());
  currentYear = date.getFullYear()
}

function toggleMain(titleText) {
  let pageDisplays = {
    'Current Trips': () => displayTrips('getCurrentFolio'),
    'Looking for adventure?': () => displayBookingForm(),
    'Past Trips': () => displayTrips('getPastFolio'),
    'Upcoming Trips': () => displayTrips('getUpcomingFolio')
  };
  titleH1.innerText = titleText;
  pageDisplays[titleText]();
}

function displayTrips(folioFunction) {
  let trips = user.folio[folioFunction](new Date()).data;
  let lists = document.querySelectorAll('.trips');
  lists.forEach(list => list.innerHTML = '');
  trips.forEach(trip => {
    let tripHTML = `
      <li>${trip.getName()}</li>
    `;
    lists[0].innerHTML += tripHTML;
    lists[1].innerHTML += tripHTML;
  });
}

function displayBookingForm() {
  console.log('BOOK ADVENTURE!');
}

function getRandomIndex( arr ) {
  return Math.floor(Math.random() * arr.length);
}
