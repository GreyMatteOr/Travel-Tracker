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
let users, trips, destinations;
window.addEventListener("load", retrieveData);

function retrieveData() {
  goFetch.getServerData()
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(([u, t, d]) => {
    console.log(u, t, d)
    users = u.travelers.map(uData => new User(uData));
    trips = t.trips.map(tData => new Trip(tData));
    destinations = d.destinations.map(dData => new Destination(dData))
    // generateUser();
    console.log(users, trips, destinations)

  })
  .catch(err => console.log(err))
}

console.log('This is the JavaScript entry file - your code begins here.');
