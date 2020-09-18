class Trip {
  constructor(data) {
    this.id = data.id;
    this.userID = data.userID;
    this.destinationID = data.destinationID;
    this.travelers = data.travelers;
    this.duration = data.duration;
    this.status = data.status;
    this.suggestedActivities = data.suggestedActivities;
    let [year, month, day] = data.date.split('/');
    this.date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
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
    return this.roundToCent(this.agentCost * this.getBaseCost);
  }

  roundToCent(number) {
    return Math.round(number * 100) / 100;
  }

  getYear() {
    return this.date.getFullYear();
  }
}

export default Trip;
