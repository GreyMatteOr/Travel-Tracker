import Trip from '../src/Trip.js';
import time from '../src/time.js';

class TripRepo {
  constructor(data, destinations, isNew = true) {
    if (isNew) {
      this.data = data.map(tripInfo => {
        let trip = new Trip(tripInfo);
        trip.destination = destinations.find(dest => dest.id === trip.destinationID);
        return trip;
      });
    } else this.data = data;
  }

  getFolioByUser(id) {
    return new TripRepo(this.data.filter(trip => trip.userID === id), null, false);
  }

  getFolioByYear(year) {
    let beg = new Date( year, 0, 0);
    let end = new Date( year + 1, 0, 0);
    return new TripRepo(this.data.filter(trip => time.isBetween(beg, trip.date, end)), null, false);
  }
}

export default TripRepo;
