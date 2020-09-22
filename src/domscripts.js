import time from './time.js';

let domscripts = {
  createTripCard(trip, isUpcoming) {
    let start = trip.date.toString().slice(0, 15);
    let end = time.daysFromDate(trip.date, trip.duration).toString().slice(0, 15);
    return `
      <div class='trip-card' data-value="${trip.id}">
        <img src='${trip.destination.image}' alt='${trip.destination.alt}'/>
        <div class='card-text'>
          <h1 class='main-font'>${trip.getName()}</h1>
          <h3 class='main-font'>Flights and lodging for: ${trip.travelers} ($${trip.getBaseCost() + trip.getAgentCost()})</h3>
          <h3 class='main-font'>Departure Date: ${start}</h3>
          <h3 class='main-font'>Return Date: ${end}</h3>
          ${isUpcoming
            ? `
            <h3 class='main-font'>Status: ${trip.status}</h3>
            <button class=\'main-font destroy-card\'>Cancel</button>
            `
            : ''}
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
  },

  clearCostDisplay() {
    document.querySelector('#base-cost').innerText = ``;
    document.querySelector('#agent-cost').innerText = ``;
    document.querySelector('#total').innerText = ``;
  },

  createCostSummary(shownTrips, user) {
    let shownTripsCost = shownTrips.reduce((sum, trip) => sum + trip.getBaseCost() + trip.getAgentCost(), 0);
    return `
      <h3>Cost of shown Trips: $${shownTripsCost}</h3>
      <h3>Total spent on trips this year: $${user.getTotalCost(new Date().getFullYear())}</h3>
    `;
  }
}

export default domscripts;
