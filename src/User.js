class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.folio = [];
  }

  getBaseCostAll(year) {
    return this.getTotalYearStat(year, 'getBaseCost')

  }

  getAgencyCostAll(year) {
    return this.getTotalYearStat(year, 'getAgentCost')
  }

  getTotalYearStat(year, funcName) {
    return this.trip.reduce((total, trip) => {
      if(trip.getYear() === year) total += trip[funcName]();
      return total;
    }, 0);
  }

  getTotalCost(year) {
    return this.getAgentCostAll(year) + this.getBaseCostAll(year)
  }
}

export default User;
