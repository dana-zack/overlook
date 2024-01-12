import { getData, postBooking, deleteBooking } from './apiCalls'

// Selectors


// Variables


// Data Retrieval & Assignment

function getAllUsers() {
  getData('http://localhost:3001/api/v1/customers')
    .then(data => console.log(data))
}

function getUser(id) {
  getData(`http://localhost:3001/api/v1/customers/${id}`)
    .then(data => console.log(data))
}

function getRooms() {
  getData('http://localhost:3001/api/v1/rooms')
    .then(data => console.log(data))
}

function getBookings() {
  getData('http://localhost:3001/api/v1/bookings')
    .then(data => console.log(data))
}

// Event Listeners

window.addEventListener('load', () => {
  getAllUsers();
  getUser(50);
  getRooms();
  getBookings();
})

// Functions



export {
  getAllUsers,
  getUser,
  getRooms,
  getBookings
}