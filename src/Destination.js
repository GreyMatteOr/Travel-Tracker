class Destination {
  constructor(data) {
    this.id = data.id;
    this.name = data.destination;
    this.estimatedLodgingCostPerDay = data.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = data.estimatedFlightCostPerPerson;
    this.image = data.image;
    this.alt = data.alt;
  }
}

export default Destination;
