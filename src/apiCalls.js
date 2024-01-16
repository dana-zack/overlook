// API CALLS

function getData(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Sorry, please come back later');
      }
    })
    .catch(error => console.log(error))
}

function postBooking(newBooking) {
  fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBooking)
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

export {
  getData,
  postBooking
};