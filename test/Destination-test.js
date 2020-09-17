import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination.js';

describe('Destination', () => {
  let dData, destination;
  beforeEach(() => {
    dData = {
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
    };

    destination = new Destination(dData);
  });

  describe('Initialization', () => {

    it('should store an id', () => {
      expect(destination.id).to.equal(dData.id);
    });

    it('should store an destination', () => {
      expect(destination.destination).to.equal(dData.destination);
    });

    it('should store an estimatedLodgingCostPerDay', () => {
      expect(destination.estimatedLodgingCostPerDay).to.equal(dData.estimatedLodgingCostPerDay);
    });

    it('should store an estimatedFlightCostPerPerson', () => {
      expect(destination.estimatedFlightCostPerPerson).to.equal(dData.estimatedFlightCostPerPerson);
    });

    it('should store an image', () => {
      expect(destination.image).to.equal(dData.image);
    });

    it('should store an alt', () => {
      expect(destination.alt).to.equal(dData.alt);
    });
  });
});
