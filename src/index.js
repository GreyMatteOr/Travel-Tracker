// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import goFetch from './fetch-requests.js'
import User from './User.js'
import Trip from './Trip.js'
import Destination from './Destination.js'
import TripRepo from '../src/TripRepo.js';
import flatpickr from "flatpickr";



// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
let user, users, trips, destinations;
window.addEventListener("load", retrieveData);

function retrieveData() {
  goFetch.getServerData()
  .then(([u, t, d]) => {
    destinations = d.destinations.map(dData => new Destination(dData));
    trips = new TripRepo(t.trips, destinations);
    users = u.travelers;
    generateUser();
  })
  .catch(err => console.log(err));
  let element = document.querySelector('h1');
  flatpickr(element, {});
}

function generateUser() {
  user = new User (users[getRandomIndex(users)]);
  user.folio = trips.getFolio(user.id);
  console.log(user)
}

function getRandomIndex( arr ) {
  return Math.floor(Math.random() * arr.length);
}

console.log('This is the JavaScript entry file - your code begins here.');
