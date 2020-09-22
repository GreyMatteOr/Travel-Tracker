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
  },

  createYYYYMMDD(date) {
    let year = String(date.getFullYear());
    let month = String(date.getMonth());
    let day = String(date.getDate());
    while(year.length < 4) year = `0${year}`;
    while(month.length < 2) month = `0${month}`;
    while(day.length < 2) day = `0${day}`;
    return [year, month, day].join('/');
  }
}

export default time
