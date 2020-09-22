import Trip from '../src/Trip.js';
import time from '../src/time.js';

class TripRepo {
  constructor(data, destinations = [], isNew = true) {
    if (isNew) {
      this.data = data.map(tripInfo => {
        let trip = new Trip(tripInfo);
        trip.destination = destinations.find(dest => dest.id === trip.destinationID);
        return trip;
      });
    } else this.data = data;
    this.countIDs();
  }

  getFolioByUser(id) {
    return new TripRepo(this.data.filter(trip => trip.userID === id), null, false);
  }

  getFolioByYear(year) {
    let beg = new Date( year, 0, 0);
    let end = new Date( year + 1, 0, 0);
    return new TripRepo(this.data.filter(trip => time.isBetween(beg, trip.date, end)), null, false);
  }

  getUpcomingFolio(date) {
    return new TripRepo(this.data.filter(trip => time.isBefore(date, trip.date)), null, false);
  }

  getPastFolio(date) {
    return new TripRepo(this.data.filter(trip => {
      let endDate = time.daysFromDate(trip.date, trip.duration);
      return time.isAfter(date, endDate);
    }), null, false);
  }

  getCurrentFolio(date) {
    return new TripRepo(this.data.filter(trip => trip.isCurrent(date)), null, false);
  }

  getNewTripID() {
    for(let i = 0; i < this.data.length; i++) {
      let newIDLow = this.data[i].id - 1;
      if (this.tripIDs[newIDLow] === undefined && newIDLow > 0) return newIDLow;
      let newIDHigh = this.data[i].id + 1;
      if (this.tripIDs[newIDHigh] === undefined) return newIDHigh;
    }
    throw 'Corrupted ID Inventory Object'
  }

  countIDs() {
    this.tripIDs = this.data.reduce((memory, trip) => {
      memory[trip.id] = trip;
      return memory;
    }, {})
  }

  addNewTrip(trip) {
    this.data.push(trip);
    this.tripIDs[trip.id] = trip;
  }
}

export default TripRepo;
