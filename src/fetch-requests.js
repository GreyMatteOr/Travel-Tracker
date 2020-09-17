let goFetch = {
  // post(item, user) {
  //   let data = {
  //     "userID": user.id,
  //     "ingredientID": item.id,
  //     "ingredientModification": item.needs
  //   }
  //   let update = JSON.stringify(data);
  //   return fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', {
  //       method: 'POST',
  //       body: update,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   )
  // },

  getServerData() {
    let uData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers');
    let tData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips');
    let dData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations');
    let promises = [uData, tData, dData];
    return Promise.all(promises)
    .then(responses => Promise.all(responses.map(response => response.json())))
  }
}

export default goFetch;
