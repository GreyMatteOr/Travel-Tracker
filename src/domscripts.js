import time from './time.js';

let domscripts = {
  createTripCard(trip) {
    let start = trip.date.toString().slice(0, 15);
    let end = time.daysFromDate(trip.date, trip.duration).toString().slice(0, 15);
    return `
      <div class='trip-card'>
        <img src='${trip.destination.image}' alt='${trip.destination.alt}/>
        <div class='card-text'>
          <h2 class='main-font'>${trip.getName()}<h2>
          <h3 class='main-font'>Departure Date: ${start}<h3>
          <h3 class='main-font'>Return Date: ${end}<h3>
        </div>
      </div>
    `
  },

  createDestinationsSelection(destinations) {
    let select = document.querySelector('#destinations');
    destinations.forEach(destination  => {
      select.innerHTML += `<option value='${destination.name}'>${destination.name}</option>`
    });
  },

  createNumberSelector() {
    let select = document.querySelector('#number-of-people');
    for(let i = 1; i <= 20; i++) select.innerHTML += `<option value='${i}'>${i}</option>`;
  }
}

export default domscripts;
