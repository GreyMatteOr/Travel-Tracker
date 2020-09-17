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

    it('should store an userID', () => {
      expect(trip.userID).to.equal(fdata.userID);
    });

    it('should store an destinationID', () => {
      expect(trip.destinationID).to.equal(fdata.destinationID);
    });

    it('should store an travelers', () => {
      expect(trip.travelers).to.equal(fdata.travelers);
    });

    it('should store an date', () => {
      expect(trip.date).to.equal(fdata.date);
    });

    it('should store an duration', () => {
      expect(trip.duration).to.equal(fdata.duration);
    });

    it('should store an suggestedActivities', () => {
      expect(trip.suggestedActivities).to.deep.equal(fdata.suggestedActivities);
    });

    it('should store an status', () => {
      expect(trip.status).to.equal(fdata.status);
    });
  });

  describe('getName()', function() {

    it('should return the name of the destination', function() {
      trip.destination = {destination: 'Paris'};

      expect(trip.getName()).to.equal('Paris');
    });

    it('should return `null` if it has no destination', function() {
      expect(trip.getName()).to.equal(null);
    });
  });

  describe('getBaseCost', function() {
    it('should return the cost of flights + lodging', function() {
      trip.destination = {estimatedLodgingCostPerDay: 10, estimatedFlightCostPerPerson: 20}
      expect(trip.getBaseCost()).to.equal(30);

      trip.travelers = 5;
      expect(trip.getBaseCost()).to.equal(110);

      trip.duration = 5
      expect(trip.getBaseCost()).to.equal(150);
    });

    it('should round the cost to the nearest cent', function () {
      trip.destination = {estimatedLodgingCostPerDay: .9999, estimatedFlightCostPerPerson: 0};

      expect(trip.getBaseCost()).to.equal(1);
    });

    it('should return `null` if it has no destination', function() {
      expect(trip.getName()).to.equal(null);
    });
  });
});
