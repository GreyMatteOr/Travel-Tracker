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
    destinations.sort((a, b) => a.name.localeCompare(b.name));
    let select = document.querySelector('#destinations');
    destinations.forEach(destination  => {
      select.innerHTML += `<option value='${destination.id}'>${destination.name}</option>`
    });
  },

  createNumberSelector() {
    let select = document.querySelector('#number-of-people');
    for(let i = 1; i <= 20; i++) select.innerHTML += `<option value='${i}'>${i}</option>`;
  },

  setCostDisplay(trip) {
    document.querySelector('#base-cost').innerText = `Est. base cost: $${trip.getBaseCost()}`;
    document.querySelector('#agent-cost').innerText = `+assorted fees: $${trip.getAgentCost()}`;
    document.querySelector('#total').innerText = `   total: $${trip.getBaseCost() + trip.getAgentCost()}`;
  }
}

export default domscripts;
