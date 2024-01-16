// API CALLS

function getData(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Unable to retrieve data from the server');
      }
    })
    .catch(error => console.log(error))
}

function postBooking(newBooking) {
  fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBooking)
    // will need to refactor this to not have it hard-coded
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Sorry, please come back later');
      }
    })
    .then(data => console.log(data))
    .catch(error => {
      console.log(error)
    })
}

function deleteBooking(id) {
  fetch(`http://localhost:3001/api/v1/bookings/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "userID": 48, "date": "2019/09/23", "roomNumber": 4 })
  })
    .then(response => {
      if (response.ok) {
        //removeBooking() --> need to write this function to update the data model
        console.log('success!!!')
        return response.json()
      } else {
        throw new Error('Sorry, there has been a problem')
      }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

export {
  getData,
  postBooking,
  deleteBooking
}