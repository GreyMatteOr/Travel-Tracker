import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js';

describe('User', () => {
  let uData, user;
  beforeEach(() => {
    uData = {
      "id": 2,
      "name": "Rachael Vaughten",
      "travelerType": "thrill-seeker"
    };

    user = new User(uData);
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
});
