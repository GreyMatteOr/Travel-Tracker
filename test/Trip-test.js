import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip.js';

describe('Trip', () => {
  let fdata, trip;
  beforeEach(() => {
    fdata = {
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date":"2019/09/16",
      "duration": 1,
      "status": "approved",
      "suggestedActivities":[]
    };

    trip = new Trip(fdata);
  });

  describe('Initialization', () => {

    it('should store an id', () => {
      expect(trip.id).to.equal(fdata.id);
    });

    it('should store a userID', () => {
      expect(trip.userID).to.equal(fdata.userID);
    });

    it('should store a destinationID', () => {
      expect(trip.destinationID).to.equal(fdata.destinationID);
    });

    it('should store a travelers', () => {
      expect(trip.travelers).to.equal(fdata.travelers);
    });

    it('should store a date', () => {
      expect(trip.date).to.deep.equal(new Date(2019, 8, 16));
    });

    it('should store a duration', () => {
      expect(trip.duration).to.equal(fdata.duration);
    });

    it('should store a suggestedActivities', () => {
      expect(trip.suggestedActivities).to.deep.equal(fdata.suggestedActivities);
    });

    it('should store a status', () => {
      expect(trip.status).to.equal(fdata.status);
    });
  });

  describe('getName()', () => {

    it('should return the name of the destination', () => {
      trip.destination = {name: 'Paris'};

      expect(trip.getName()).to.equal('Paris');
    });

    it('should return `null` if it has no destination', () => {
      expect(trip.getName()).to.equal(null);
    });
  });

  describe('getAgentCost', () => {

    it('should return the cost of flights + lodging', () => {
      trip.destination = {estimatedLodgingCostPerDay: 10, estimatedFlightCostPerPerson: 20}
      expect(trip.getBaseCost()).to.equal(30);

      trip.travelers = 5;
      expect(trip.getBaseCost()).to.equal(110);

      trip.duration = 5
      expect(trip.getBaseCost()).to.equal(150);
    });

    it('should round the cost to the nearest cent', function () {
      trip.destination = {estimatedLodgingCostPerDay: .994, estimatedFlightCostPerPerson: 0};
      expect(trip.getBaseCost()).to.equal(.99);

      trip.destination = {estimatedLodgingCostPerDay: .995, estimatedFlightCostPerPerson: 0};
      expect(trip.getBaseCost()).to.equal(1);
    });

    it('should return `null` if it has no destination', () => {
      expect(trip.getBaseCost()).to.equal(null);
    });
  });

  describe('getAgentCost', () => {

    it('should return the cost of flights + lodging', () => {
      trip.destination = {estimatedLodgingCostPerDay: 10, estimatedFlightCostPerPerson: 20}
      expect(trip.getAgentCost()).to.equal(3);

      trip.travelers = 5;
      expect(trip.getAgentCost()).to.equal(11);

      trip.duration = 5
      expect(trip.getAgentCost()).to.equal(15);
    });

    it('should round the cost to the nearest cent', function () {
      trip.destination = {estimatedLodgingCostPerDay: 9.94, estimatedFlightCostPerPerson: 0};
      expect(trip.getAgentCost()).to.equal(.99);

      trip.destination = {estimatedLodgingCostPerDay: 9.95, estimatedFlightCostPerPerson: 0};
      expect(trip.getAgentCost()).to.equal(1);
    });

    it('should return `null` if it has no destination', () => {
      expect(trip.getAgentCost()).to.equal(null);
    });
  });

  describe('getYear()', () => {

    it('should return the year of Trip\'s date', () => {
      expect(trip.getYear()).to.equal(2019);
    });
  });

  describe('isCurrent()', () => {

    it('should return `true` if the given date is inside the trip range', () => {
      let now = new Date(2019, 8, 16);
      let tomorrow = new Date(2019, 8, 17);

      expect(trip.isCurrent(now)).to.equal(true);
      expect(trip.isCurrent(tomorrow)).to.equal(true);
    });

    it('should return `false` if the given date is outside the trip range', () => {
      let before = new Date(2019, 8, 15, 23, 59, 59);
      let after = new Date(2019, 8, 17, 0, 0, 1)

      expect(trip.isCurrent(before)).to.equal(false);
      expect(trip.isCurrent(after)).to.equal(false);
    });
  });
});
