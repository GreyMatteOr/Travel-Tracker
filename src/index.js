// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/normalize.scss';
import './css/base.scss';
import domscripts from "./domscripts.js";
import flatpickr from "flatpickr";
import goFetch from './fetch-requests.js'
import User from './User.js'
import Trip from './Trip.js'
import Destination from './Destination.js'
import TripRepo from '../src/TripRepo.js';




// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/GV-logo.png';
let bookingForm = document.querySelector('.book-trip-form');
let currentTripsBtn = document.querySelector('#current-btn');
let newTripsBtn = document.querySelector('#book-trip-btn');
let pastTripsBtn = document.querySelector('#past-btn');
let mainTitle = document.querySelector('#main-title');
let sidebarTitle = document.querySelector('#side-bar h3')
let tripsList = document.querySelector('.trips');
let upcomingTripsBtn = document.querySelector('#upcoming-btn');
let beginDate, endDate, destinations, user, users, trips;

window.addEventListener("load", () => {
  retrieveData();
  createCalendar('begin-date-calendar');
  createCalendar('end-date-calendar');
  domscripts.createNumberSelector();
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
    domscripts.createDestinationsSelection(destinations);
  })
  .catch(err => console.log(err));
}

function generateUser() {
  user = new User (users[getRandomIndex(users)]);
  user.folio = trips.getFolioByUser(user.id);
  console.log(user)
}

function createCalendar(nodeID) {
  let node = document.querySelector(`#${nodeID}`);
  console.log(node)
  flatpickr(node, {
    defaultDate: 'today',
    onChange: ([date]) => changeDate(date, nodeID)
  });
  changeDate(new Date(), nodeID);
}

function changeDate(newDate, nodeID) {
  console.log(typeof(newDate));
  nodeID[0] === 'b' ? beginDate = newDate : endDate = newDate;
  console.log(nodeID)
  console.log(beginDate, endDate)
  document.querySelector(`#${nodeID} time`).innerText = newDate.toString().slice(0, 15);
}

function toggleMain(titleText) {
  let pageDisplays = {
    'Current Trips': () => displayTrips('getCurrentFolio'),
    'Looking for adventure?': () => displayBookingForm(),
    'Past Trips': () => displayTrips('getPastFolio'),
    'Upcoming Trips': () => displayTrips('getUpcomingFolio')
  };
  mainTitle.innerText = titleText;
  pageDisplays[titleText]();
}

function displayTrips(folioFunction) {
  let trips = user.folio[folioFunction](new Date()).data;
  tripsList.innerHTML = '';
  trips.forEach(trip => tripsList.innerHTML += domscripts.createTripCard(trip));
  bookingForm.classList.add('hidden');
  tripsList.classList.remove('hidden');
}

function displayBookingForm() {
  bookingForm.classList.remove('hidden');
  tripsList.classList.add('hidden');
}

function getRandomIndex( arr ) {
  return Math.floor(Math.random() * arr.length);
}
