import { getData, postBooking, deleteBooking } from './apiCalls'

// Selectors: views
let loginView = document.querySelector('.login-view')
let welcomeView = document.querySelector('.welcome-view')
let myBookingsView = document.querySelector('.my-bookings-view')
let searchView = document.querySelector('.search-view')
let roomsView = document.querySelector('.rooms-view')

// Selectors: buttons
let loginBtn = document.querySelector('#login-btn')
let myBookingsBtn = document.querySelector('#my-bookings-btn')
let homeBtn1 = document.querySelector('#home-btn-1')
let homeBtn2 = document.querySelector('#home-btn-2')
let homeBtn3 = document.querySelector('#home-btn-3')
let bookStayBtn1 = document.querySelector('#book-stay-btn-1')
let bookStayBtn2 = document.querySelector('#book-stay-btn-2')
let bookStayBtn3 = document.querySelector('#book-stay-btn-3')
let searchBtn = document.querySelector('#search-btn')
let date = document.querySelector('#date')

// Selectors: additional
let availableRoomsSection = document.querySelector('.available-cards-container')
let myBookingsSection = document.querySelector('.my-bookings-container')
let availableRoomsTitle = document.querySelector('.available-rooms-title')
let welcomeMessage = document.querySelector('.welcome-message')
let noRoomsMessage = document.querySelector('.no-rooms-message')
let noBookingsMessage = document.querySelector('.no-bookings-message')
let filterMenu = document.querySelector('#filter-drop-down')

// Variables
let customer;
let selectedRoom;
let selectedDate = '2024/01/01'

// Event Listeners

window.addEventListener('load', () => {
  getAllUsers();
  getUser(50);
  getRooms();
  getBookings();
  availableRoomsTitle.innerText = `Rooms available on ${selectedDate}`
  // noRoomsMessage.style.color = 'white'
  // noBookingsMessage.style.color = 'white'
})

loginBtn.addEventListener('click', () => {
   switchToView(welcomeView)
   welcomeMessage.innerText = `Welcome, ${customer.name}`;
})

myBookingsBtn.addEventListener('click', () => {
  switchToView(myBookingsView)
})

homeBtn1.addEventListener('click', () => {
  switchToView(welcomeView)
})

homeBtn2.addEventListener('click', () => {
  switchToView(welcomeView)
})

homeBtn3.addEventListener('click', () => {
  switchToView(welcomeView)
})

bookStayBtn1.addEventListener('click', () => {
  switchToView(searchView)
})

bookStayBtn2.addEventListener('click', () => {
  switchToView(searchView)
})

bookStayBtn3.addEventListener('click', () => {
  switchToView(searchView)
})

searchBtn.addEventListener('click', () => {
  if (date.input) {
    switchToView(roomsView)
  }
})

availableRoomsSection.addEventListener('click', (event) => {
  selectedRoom = event.target.closest('article')
  //run function to 'post' selected room as a booking
  console.log(selectedRoom)
});

myBookingsSection.addEventListener('click', (event) => {
  selectedRoom = event.target.closest('article');
  //run function to 'delete' selected room as a booking
  console.log(selectedRoom)
});

filterMenu.addEventListener('change', () => {
  console.log(filterMenu.value)
})

// Functions

function switchToView(view) {
  hideAllViews();
  show(view)
}

function hideAllViews() {
  hide(loginView);
  hide(welcomeView);
  hide(myBookingsView);
  hide(searchView);
  hide(roomsView);
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}

// Data Retrieval & Assignment

function getAllUsers() {
  getData('http://localhost:3001/api/v1/customers')
    .then(data => console.log(data))
}

function getUser(id) {
  getData(`http://localhost:3001/api/v1/customers/${id}`)
    .then(data => {
      customer = data
      console.log(data)
    })
}

function getRooms() {
  getData('http://localhost:3001/api/v1/rooms')
    .then(data => console.log(data))
}

function getBookings() {
  getData('http://localhost:3001/api/v1/bookings')
    .then(data => console.log(data))
}

// ============================================================
export {
  getAllUsers,
  getUser,
  getRooms,
  getBookings
}