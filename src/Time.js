let time = {
  daysFromDate(date, days) {
    let millisecondsFromThen = days * 24 * 60 * 60 * 1000;
    return new Date(date.getTime() + millisecondsFromThen)
  },

  daysBetween(date1, date2) {
    let mSeconds = date2.getTime() - date1.getTime();
    return Math.ceil(mSeconds / 24 / 60 / 60 / 1000);
  },

  isBetween(beg, test, end) {
    return beg.getTime() <= test.getTime() && test.getTime() <= end.getTime();
  },

  isBefore(test, reference) {
    return test.getTime() < reference.getTime();
  },

  isAfter(test, reference) {
    return test.getTime() > reference.getTime();
  }
}

export default time
