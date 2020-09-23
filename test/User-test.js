import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js';
import Trip from '../src/Trip.js';
import TripRepo from '../src/TripRepo.js';

describe('User', () => {
  let uData, user, fdata;
  beforeEach(() => {
    uData = {
      "id": 2,
      "name": "Rachael Vaughten",
      "travelerType": "thrill-seeker"
    };

    user = new User(uData);

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
    let folio = new TripRepo([fdata]);
    user.folio = folio;
    folio.data[0].destination = {
      "estimatedLodgingCostPerDay": 1,
      "estimatedFlightCostPerPerson": 1
    }
  });

  describe('Initialization', () => {

    it('should store an id', () => {
      expect(user.id).to.equal(uData.id);
    });

    it('should store an name', () => {
      expect(user.name).to.equal(uData.name);
    });

    it('should store an travelerType', () => {
      expect(user.travelerType).to.equal(uData.travelerType);
    });
  });

  describe('getBaseCostAll()', () => {

    it('should get total cost of all trips the user is going on', () => {
      expect(user.getBaseCostAll(2019)).to.equal(2);

      user.folio.data[0].destination.estimatedLodgingCostPerDay = 5;
      expect(user.getBaseCostAll(2019)).to.equal(6);

      user.folio.data[0].destination.estimatedFlightCostPerPerson = 5;
      expect(user.getBaseCostAll(2019)).to.equal(10);
    });

    it('should return 0 if there were no trips that year', () => {
      expect(user.getBaseCostAll(2020)).to.equal(0);
    });
  });

  describe('getAgentCostAll()', () => {

    it('should get total cost of all trips the user is going on, to the nearest cent', () => {
      expect(user.getAgentCostAll(2019)).to.equal(.2);

      user.folio.data[0].destination.estimatedLodgingCostPerDay = 4.5;
      expect(user.getAgentCostAll(2019)).to.equal(.55);

      user.folio.data[0].destination.estimatedFlightCostPerPerson = 5;
      expect(user.getAgentCostAll(2019)).to.equal(.95);
    });

    it('should return 0 if there were no trips that year', () => {
      expect(user.getAgentCostAll(2020)).to.equal(0);
    });
  });

  describe('getTotalCost()', () => {

    it('should return the sum of base cost and agent cost', () => {

      expect(user.getTotalCost(2019)).to.equal(user.getBaseCostAll(2019) + user.getAgentCostAll(2019));
      expect(user.getTotalCost(2019)).to.equal(2.2);
    });
  });
});
