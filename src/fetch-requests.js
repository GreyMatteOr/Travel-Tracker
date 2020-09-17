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
    return Promise.all([
        fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'),
        fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'),
        fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
      ])
  }
}

export default goFetch;
