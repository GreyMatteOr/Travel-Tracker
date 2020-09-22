import chai from 'chai';
const expect = chai.expect;
import time from '../src/time.js';

describe('time', () => {
    let date = new Date(2020, 0, 1);
    let dayAfter = new Date(2020, 0, 2);
    let dayBefore = new Date(2019, 11, 31);

  describe('daysFromDate()', () => {

    it('should return a Date object corresponding to the Date a given number of days away from a reference Date', () => {

      expect(time.daysFromDate(date, 1).getTime()).to.equal(dayAfter.getTime());
      expect(time.daysFromDate(date, -1).getTime()).to.equal(dayBefore.getTime());
    });
  });

  describe('daysBetween()', () => {

    it('should return the number of days between 2 given Dates', () => {

      expect(time.daysBetween(dayBefore, date)).to.equal(1);
      expect(time.daysBetween(dayBefore, dayAfter)).to.equal(2);
      expect(time.daysBetween(date, date)).to.equal(0);
    });

    it('should return be negative if the a Date of days between 2 given Dates', () => {

      expect(time.daysBetween(date, dayBefore)).to.equal(-1);
      expect(time.daysBetween(dayAfter, dayBefore)).to.equal(-2);
    });
  });

  describe('isBetween()', () => {

    it('should return `true` if a date falls between 2 dates (inclusive)', () => {

      expect(time.isBetween(dayBefore, date, dayAfter)).to.equal(true);
      expect(time.isBetween(dayBefore, dayBefore, dayAfter)).to.equal(true);
      expect(time.isBetween(dayBefore, dayAfter, dayAfter)).to.equal(true);
    });

    it('should return `false` if a date falls between 2 dates (inclusive)', () => {
      let oneMSBeforeYesterday = new Date( dayBefore.getTime() - 1);
      let oneMSAfterTomorrow = new Date ( dayAfter.getTime() + 1);

      expect(time.isBetween(dayBefore, oneMSBeforeYesterday, dayAfter)).to.equal(false);
      expect(time.isBetween(dayBefore, oneMSAfterTomorrow, dayAfter)).to.equal(false);
    });
  });

  describe('isBefore()', () => {

    it('should return `true` if a Date falls before a reference date', () => {

      expect(time.isBefore(dayBefore, date)).to.equal(true);
      expect(time.isBefore(date, dayAfter)).to.equal(true);
    });

    it('should return `false` if a Date doesn\'t come before it', () => {

      expect(time.isBefore(dayAfter, date)).to.equal(false);
      expect(time.isBefore(date, dayBefore)).to.equal(false);
      expect(time.isBefore(date, date)).to.equal(false);
    });
  });

  describe('isAfter()', () => {

    it('should return `true` if a Date falls after a reference date', () => {

      expect(time.isAfter(date, dayBefore)).to.equal(true);
      expect(time.isAfter(dayAfter, date)).to.equal(true);
    });

    it('should return `false` if a Date doesn\'t come after it', () => {

      expect(time.isAfter(date, dayAfter)).to.equal(false);
      expect(time.isAfter(dayBefore, date)).to.equal(false);
      expect(time.isAfter(date, date)).to.equal(false);
    });
  });

  describe('createYYYYMMDD', () => {

    it('should return a string of the date in `YYYY/MM/DD format`', () => {

      expect(time.createYYYYMMDD(date)).to.equal('2020/01/01')
      expect(time.createYYYYMMDD(dayBefore)).to.equal('2019/12/31');
    });
  });
});
