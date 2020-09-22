import time from './time.js';

let goFetch = {
  getUser(id) {
    console.log(id)
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${+id}`);
  },

  postNewTripRequest(trip) {
    let data = {
      id: trip.id,
      userID: trip.userID,
      destinationID: trip.destinationID,
      travelers: trip.travelers,
      date: time.createYYYYMMDD(trip.date),
      duration: trip.duration,
      status: trip.status,
      suggestedActivities: trip.suggestedActivities
    };
    let update = JSON.stringify(data);
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
        method: 'POST',
        body: update,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  },

  deleteTripRequest(tripID) {
    let data = {
      id: tripID,
    };
    let update = JSON.stringify(data);
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
        method: 'DELETE',
        body: update,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  },

  getServerData() {
    let uData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers');
    let tData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips');
    let dData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations');
    let promises = [uData, tData, dData];

    return Promise.all(promises)
    .then(responses => Promise.all(responses.map(response => response.json())))
  }
}

export default goFetch;
