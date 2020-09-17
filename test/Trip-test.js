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
      "duration": 8,
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
      let destination = {destination: 'Paris'};
      trip.destination = destination;

      expect(trip.getName()).to.equal('Paris');
    });

    it('should return `null` if it has no destination', function() {
      expect(trip.getName()).to.equal(null);
    });
  });
});
