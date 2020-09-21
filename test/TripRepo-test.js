import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip.js';
import TripRepo from '../src/TripRepo.js';


describe.only('TripRepo', () => {
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

    repo = new TripRepo([tData]);
  });

  describe('Initialization', () => {

    it('should store an array of trips', () => {
      expect(repo.data).to.deep.equal(data);
    });

    it('should store an Object that stores all TripIDs', () => {
      expect(repo.tripIDs).to.deep.equal({1: trip})
    })
  });

  describe('getFolioByUser', () => {

    it('should return a new TripRepo of all the trips that match a given userID', () => {

      expect(repo.getFolioByUser(44)).to.deep.equal(new TripRepo(data, []));
      expect(repo.getFolioByUser(0)).to.deep.equal(new TripRepo([], []));
    });
  });

  describe('getFolioByYear', () => {

    it('should return a new TripRepo of all the trips that match a given userID', () => {

      expect(repo.getFolioByYear(2019)).to.deep.equal(new TripRepo(data, []));
      expect(repo.getFolioByYear(0)).to.deep.equal(new TripRepo([], []));
    });
  });

  describe('getPastFolio', () => {

    it('should return a new TripRepo of all the trips that have ended already', () => {

      let date = new Date(2019, 8, 25);
      expect(repo.getPastFolio(date)).to.deep.equal(repo);

      let beforeEnd = new Date(2019, 8, 24);
      expect(repo.getPastFolio(beforeEnd)).to.deep.equal(new TripRepo([], []));
    });
  });

  describe('getCurrentFolio', () => {

    it('should return a new TripRepo of all the trips that have begun but not ended yet', () => {

      let beg = new Date(2019, 8, 16);
      let middle = new Date(2019, 8, 20);
      let end = new Date(2019, 8, 24);
      expect(repo.getCurrentFolio(beg)).to.deep.equal(repo);
      expect(repo.getCurrentFolio(middle)).to.deep.equal(repo);
      expect(repo.getCurrentFolio(end)).to.deep.equal(repo);

      let before = new Date(2019, 8, 15);
      let after = new Date(2019, 8, 25);
      expect(repo.getCurrentFolio(before)).to.deep.equal(new TripRepo([], []));
      expect(repo.getCurrentFolio(after)).to.deep.equal(new TripRepo([], []));
    });
  });

  describe('getUpcomingFolio', () => {

    it('should return a new TripRepo of all the trips that haven\'t started yet', () => {

      let date = new Date(2019, 8, 15);
      expect(repo.getUpcomingFolio(date)).to.deep.equal(repo);

      let alreadyStarted = new Date(2019, 8, 16);
      expect(repo.getUpcomingFolio(alreadyStarted)).to.deep.equal(new TripRepo([], []));
    });
  });

  describe('getNewTripID', () => {

    it('should return a new, unused ID', () => {

      expect(repo.getNewTripID()).to.equal(2);
    });
  });
});
