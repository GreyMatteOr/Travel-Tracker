// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import goFetch from './fetch-requests.js'
import User from './User.js'
import Trip from './Trip.js'
import Destination from './Destination.js'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
let user, users, trips, destinations;
window.addEventListener("load", retrieveData);

function retrieveData() {
  goFetch.getServerData()
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(([u, t, d]) => {
    destinations = d.destinations.map(dData => new Destination(dData))
    trips = t.trips.map(tData => {
      let trip = new Trip(tData);
      trip.destination = destinations.find(dest => dest.id === trip.destinationID);
      return trip;
    });
    users = u.travelers.map(uData => new User(uData));
    generateUser();
  })
  .catch(err => console.log(err))
}

function generateUser() {
  user = users[getRandomIndex(users)]
  console.log(trips)
  user.trips = trips.filter(trip => trip.userID === user.id)
  console.log(user)
}

function getRandomIndex( arr ) {
  return Math.floor(Math.random() * arr.length);
}

console.log('This is the JavaScript entry file - your code begins here.');
