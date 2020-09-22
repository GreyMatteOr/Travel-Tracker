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
let bookTripBtn = document.querySelector('#submit-booking');
let bookingForm = document.querySelector('.book-trip-form');
let calculate = document.querySelector('#calculate');
let currentTripsBtn = document.querySelector('#current-btn');
let newTripsBtn = document.querySelector('#book-trip-btn');
let pastTripsBtn = document.querySelector('#past-btn');
let mainTitle = document.querySelector('#main-title');
let sidebarTitle = document.querySelector('#side-bar h3');
let submitCredentials = document.querySelector('#submit-credentials');
let tripsList = document.querySelector('.trips');
let upcomingTripsBtn = document.querySelector('#upcoming-btn');
let beginDate, beginCalendar, endDate, endCalendar, destinations, user, userID, users, userTrip = {}, trips;

bookTripBtn.addEventListener('click', bookNewTrip);
calculate.addEventListener('click', calculateCosts);
currentTripsBtn.addEventListener('click', () => toggleMain('Current Trips'));
newTripsBtn.addEventListener('click', () => toggleMain('Looking for adventure?'));
pastTripsBtn.addEventListener('click', () => toggleMain('Past Trips'));
submitCredentials.addEventListener('click', testLogin);
upcomingTripsBtn.addEventListener('click', () => toggleMain('Upcoming Trips'));

function testLogin() {
  if (document.querySelector('#pw').value === 'travel2020') {
    userID = parseInt(document.querySelector('#userID').value.slice(-2));
    goFetch.getUser(userID)
    .then(response => {
      if (+response.status < 400) {
        loadPage();
        document.querySelector('.login').remove();
      } else {
        document.querySelector('#warning').innerText = 'Username and/or password were incorrect.'
      }
    })
    .catch(err => document.querySelector('#warning').innerText = 'Something misbehaved. Refresh the page and try again later.');
  } else {
    document.querySelector('#warning').innerText = 'Username and/or password were incorrect.';
  }
}

function loadPage() {
  retrieveData();
  loadCalendars();
  domscripts.createNumberSelector();
}

function loadCalendars() {
  let [year, month, day] = time.createYYYYMMDD(new Date()).split('/');
  let startDate = new Date(+year, +month - 1, +day);
  startDate = time.daysFromDate(startDate, 1);
  beginCalendar = createCalendar('begin-date-calendar', startDate);
  endCalendar = createCalendar('end-date-calendar', time.daysFromDate(startDate, 7));
  changeDate(startDate, 'begin-date-calendar');
  changeDate(time.daysFromDate(startDate, 7), 'end-date-calendar');
}

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
  let uData = users.find(user => user.id === userID)
  user = new User(uData);
  console.log(user)
  user.folio = trips.getFolioByUser(user.id);
  let welcomeMsgNode = document.querySelector('#welcome-msg')
  welcomeMsgNode.innerText = `Welcome, ${user.name}!`;
}

function createCalendar(nodeID, date) {
  let node = document.querySelector(`#${nodeID}`);
  return flatpickr(node, {
    defaultDate: date,
    minDate: date,
    onChange: ([date]) => changeDate(date, nodeID)
  });
}

function changeDate(newDate, nodeID) {
  if (nodeID[0] === 'b') {
    beginDate = newDate;
  } else {
    endDate = newDate;
  }
  document.querySelector(`#${nodeID} time`).innerText = newDate.toString().slice(0, 15);
  userTrip = {};
  setBookTripBtnStatus(userTrip);
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
  let isUpcoming = folioFunction[3] === 'U';
  tripsList.innerHTML = '';
  document.querySelector('#cost').innerHTML = domscripts.createCostSummary(tripsToShow, user);
  tripsToShow.forEach(trip => tripsList.innerHTML += domscripts.createTripCard(trip, isUpcoming));
  bookingForm.classList.add('hidden');
  tripsList.classList.remove('hidden');
  addEventListenersToButtons();
}

function addEventListenersToButtons() {
  let buttons = document.querySelectorAll('.destroy-card');
  for (let button of buttons) {
    button.addEventListener('click', destroyCard);
  }
}

function destroyCard(event) {
  let targetOfDestruction = event.target.closest('.trip-card');
  let tripID = targetOfDestruction.dataset.value;
  goFetch.deleteTripRequest(+tripID)
  .then(() => {
    targetOfDestruction.remove();
    trips.deleteTripByID(+tripID);
    user.folio.deleteTripByID(+tripID);
    displayTrips('getUpcomingFolio');
  })
  .catch(err => console.log(err));
}

function displayBookingForm() {
  bookingForm.classList.remove('hidden');
  tripsList.innerHTML = '';
  setBookTripBtnStatus(userTrip);
}

function calculateCosts() {
  let destID = document.querySelector('#destinations').value;
  let dest = destinations.find(destination => destination.id === +destID);
  userTrip = new Trip({
    id: trips.getNewTripID(),
    userID: user.id,
    destinationID: +destID,
    travelers: +(document.querySelector('#number-of-people').value),
    status: 'pending',
    suggestedActivities: [],
    date: beginDate,
    duration: time.daysBetween(beginDate, endDate)
  });
  userTrip.destination = dest;
  if (!setBookTripBtnStatus(userTrip)) domscripts.setCostDisplay(userTrip);
  else domscripts.clearCostDisplay();
}

function bookNewTrip() {
  goFetch.postNewTripRequest(userTrip)
  .then(response => {
    if(response.status < 400){
      trips.addNewTrip(userTrip);
      user.folio.addNewTrip(userTrip);
      alert(`Booked!\n\nYou're going to ${userTrip.getName()} on ${time.createYYYYMMDD(userTrip.date)}!\n\nIf you'd like to cancel at any point, just head over to the upcoming trips tab and hit 'cancel' at any point until the day of your trip.`)
      userTrip = {};
    } else {
      console.log(response)
      alert('Looks like something when wrong! Please refresh the page and try again later.')
    }
  })
  .catch(response => console.log(response));
}

function setBookTripBtnStatus(trip) {
  bookTripBtn.innerText = (trip.duration < 1 ? 'Trip must be at least 1 day long' : 'Book me!');
  return bookTripBtn.disabled = (
    trip.id === undefined ||
    trip.userID === undefined ||
    trip.destinationID === undefined ||
    trip.travelers === undefined ||
    trip.status === undefined ||
    trip.suggestedActivities === undefined ||
    trip.date === undefined ||
    trip.duration === undefined ||
    trip.duration < 1
  );
}

function getRandomIndex( arr ) {
  return Math.floor(Math.random() * arr.length);
}
