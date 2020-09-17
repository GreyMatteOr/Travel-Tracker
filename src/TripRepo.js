import Trip from '../src/Trip.js';

class TripRepo {
  constructor(data, destinations) {
    this.data = data.map(tripInfo => {
      let trip = new Trip(tripInfo);
      trip.destination = destinations.find(dest => dest.id === trip.destinationID);
      return trip;
    });
  }

  getFolio(id) {
    return this.data.filter(trip => trip.userID === id);
  }
}

export default TripRepo;
