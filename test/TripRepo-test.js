import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip.js';
import TripRepo from '../src/TripRepo.js';


describe('TripRepo', () => {
  let data, repo, trip;
  beforeEach(() => {
    let tData = {
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date":"2019/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities":[]
    };
    trip = new Trip(tData);
    trip.destination = undefined;
    data = [trip]

    repo = new TripRepo([tData], []);
  });

  describe('Initialization', () => {

    it('should store an data', () => {
      expect(repo.data).to.deep.equal(data);
    });
  });

  describe('getFolio', () => {
    it('should return an array of all the trips that match a given userID', function() {
      expect(repo.getFolio(44)).to.deep.equal(data);
      expect(repo.getFolio(0)).to.deep.equal([]);
    });
  });
});
