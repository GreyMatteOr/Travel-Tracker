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

  describe('getFolioByUser', () => {

    it('should return a new TripRepo of all the trips that match a given userID', function() {

      expect(repo.getFolioByUser(44)).to.deep.equal(new TripRepo(data, []));
      expect(repo.getFolioByUser(0)).to.deep.equal(new TripRepo([], []));
    });
  });

  describe('getFolioByYear', () => {

    it('should return a new TripRepo of all the trips that match a given userID', function() {

      expect(repo.getFolioByYear(2019)).to.deep.equal(new TripRepo(data, []));
      expect(repo.getFolioByYear(0)).to.deep.equal(new TripRepo([], []));
    });
  });
});
