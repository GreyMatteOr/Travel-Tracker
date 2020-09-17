class Trip {
  constructor(data) {
    this.id = data.id;
    this.userID = data.userID;
    this.destinationID = data.destinationID;
    this.travelers = data.travelers;
    this.date = data.date;
    this.duration = data.duration;
    this.status = data.status;
    this.suggestedActivities = data.suggestedActivities;
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
}

export default Trip;
