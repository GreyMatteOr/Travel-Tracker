import time from './time.js';

class Trip {
  constructor(data) {
    this.id = data.id;
    this.userID = data.userID;
    this.destinationID = data.destinationID;
    this.travelers = data.travelers;
    this.duration = data.duration;
    this.status = data.status;
    this.suggestedActivities = data.suggestedActivities;
    if(typeof(data.date) === 'object') this.date = data.date;
    else {
      let [year, month, day] = data.date.split('/');
      this.date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }
  }

  getName() {
    return (this.destination ? this.destination.destination : null);
  }

  getBaseCost() {
    if (this.destination === undefined) return null;
    let flightsCost = this.destination.estimatedFlightCostPerPerson * this.travelers;
    let lodgingCost = this.destination.estimatedLodgingCostPerDay * this.duration;
    return this.roundToCent(flightsCost + lodgingCost);
  }

  getAgentCost() {
    if (this.destination === undefined) return null;
    return this.roundToCent(.1 * this.getBaseCost());
  }

  roundToCent(number) {
    return Math.round(number * 100) / 100;
  }

  getYear() {
    return this.date.getFullYear();
  }

  isCurrent(today) {
    return time.isBetween(this.date, today, time.daysFromDate(this.date, this.duration));
  }
}

export default Trip;
