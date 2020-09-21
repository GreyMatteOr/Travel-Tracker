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
import time from './time.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/GV-logo.png';
let bookingForm = document.querySelector('.book-trip-form');
let calculate = document.querySelector('#calculate');
let currentTripsBtn = document.querySelector('#current-btn');
let newTripsBtn = document.querySelector('#book-trip-btn');
let pastTripsBtn = document.querySelector('#past-btn');
let mainTitle = document.querySelector('#main-title');
let sidebarTitle = document.querySelector('#side-bar h3')
let tripsList = document.querySelector('.trips');
let upcomingTripsBtn = document.querySelector('#upcoming-btn');
let beginDate, beginCalendar, endDate, endCalendar, destinations, user, users, trips;


calculate.addEventListener('click', bookNewTrip);
currentTripsBtn.addEventListener('click', () => toggleMain('Current Trips'));
newTripsBtn.addEventListener('click', () => toggleMain('Looking for adventure?'));
pastTripsBtn.addEventListener('click', () => toggleMain('Past Trips'));
upcomingTripsBtn.addEventListener('click', () => toggleMain('Upcoming Trips'));
window.addEventListener("load", () => {
  retrieveData();
  let startDate = new Date();
  startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  beginCalendar = createCalendar('begin-date-calendar', startDate);
  endCalendar = createCalendar('end-date-calendar', time.daysFromDate(startDate, 7));
  changeDate(startDate, 'begin-date-calendar');
  changeDate(time.daysFromDate(startDate, 7), 'end-date-calendar');
  domscripts.createNumberSelector();
});

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


function createCalendar(nodeID, date) {
  let node = document.querySelector(`#${nodeID}`);
  console.log(node)
  return flatpickr(node, {
    defaultDate: date,
    minDate: new Date(),
    onChange: ([date]) => changeDate(date, nodeID)
  });
}

function changeDate(newDate, nodeID) {
  if (nodeID[0] === 'b') {
    beginDate = newDate;
  } else {
    endDate = newDate;
    endCalendar.minDate = newDate;
  }
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
  let tripsToShow = user.folio[folioFunction](new Date()).data;
  tripsList.innerHTML = '';
  tripsToShow.forEach(trip => tripsList.innerHTML += domscripts.createTripCard(trip));
  bookingForm.classList.add('hidden');
  tripsList.classList.remove('hidden');
}

function displayBookingForm() {
  bookingForm.classList.remove('hidden');
  tripsList.classList.add('hidden');
}

function bookNewTrip() {
  let destID = document.querySelector('#destinations').value;
  let countPeople = document.querySelector('#number-of-people').value;
  let duration = time.daysBetween(beginDate, endDate);
  if (duration < 1)  alert('Trip must be at least 1 day long!');
  else {
  console.log(trips.getNewTripID(), user.id, destID, countPeople, beginDate, duration)
  // domscripts.postNewTripRequest(trips.getNewID(), user.id, destID, countPeople, beginDate, duration);
  }

}

function getRandomIndex( arr ) {
  return Math.floor(Math.random() * arr.length);
}
