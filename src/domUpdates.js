import { getData, postBooking, deleteBooking } from './apiCalls'
import {
  gatherBookingsByCustomer,
  calculateCosts,
  findRoomsByDate,
  filterRoomsByType,
  addBooking
} from './rooms'

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
let input = document.querySelector('#date')

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
let rooms;
let bookings;
let selectedDate = '2024/01/01'
let selectedRoom;
let availableRooms;

// Event Listeners

window.addEventListener('load', () => {
  getUser(50);
  getRooms();
  getBookings();
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

searchBtn.addEventListener('click', (event) => {
  event.preventDefault()
  if (!input.value) {
    return
  }
  if (checkDateValidity(input.value)) {
    console.log('check')
    return
  }
  selectedDate = input.value.replaceAll("-", "/")
  console.log(selectedDate)
  switchToView(roomsView)
  availableRoomsTitle.innerText = `Rooms available on ${selectedDate}`
  availableRooms = findRoomsByDate(selectedDate, rooms, bookings)
  displayRooms(availableRooms)
})

availableRoomsSection.addEventListener('click', (event) => {
  selectedRoom = event.target.closest('article')
  //run function to 'post' selected room as a booking
  // console.log(selectedRoom)
});

myBookingsSection.addEventListener('click', (event) => {
  selectedRoom = event.target.closest('article');
  //run function to 'delete' selected room as a booking
  // console.log(selectedRoom)
});

filterMenu.addEventListener('change', () => {
  console.log(filterMenu.value)
  let filteredRooms = filterRoomsByType(filterMenu.value, availableRooms)
  displayRooms(filteredRooms)
})

// Functions

function displayRooms(availableRooms) {
  availableRoomsSection.innerHTML = '';
  if (availableRooms.length === 0) {
    noRoomsMessage.style.color = 'black'
  } else {
    availableRooms.forEach(room => {
      availableRoomsSection.innerHTML += `
      <article class="available-card">
        <h3>Room #${room.number}</h3>
        <div class= "details-container">
          <p class="detail">Cost per night: $${room.costPerNight}</p>
          <p class="detail">Room type: ${room.roomType}</p>
          <p class="detail">Number of beds: ${room.numBeds}</p>
          <p class="detail"> Bed size: ${room.bedSize}</p>
          <p class="detail">Bidet: ${room.bidet}</p>
        </div>
        <button class="book-btn">Book this room</button>
      </article>`
    });
  }
}

function checkDateValidity(date) {
  const userInput = new Date(date)
  const currentDate = new Date()
  console.log(userInput)
  console.log(currentDate)
  currentDate.setHours(0, 0, 0, 0)
  return userInput < currentDate
}

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

function getUser(id) {
  getData(`http://localhost:3001/api/v1/customers/${id}`)
    .then(data => {
      customer = data
      console.log(customer)
    })
}

function getRooms() {
  getData('http://localhost:3001/api/v1/rooms')
    .then(data => {
      rooms = data.rooms
      console.log(rooms)
    })
}

function getBookings() {
  getData('http://localhost:3001/api/v1/bookings')
    .then(data => {
      bookings = data.bookings
      console.log(bookings)
    })
}

// function getAllUsers() {
//   getData('http://localhost:3001/api/v1/customers')
//     .then(data => console.log(data))
// }

// ============================================================

export {
  // getAllUsers,
  getUser,
  getRooms,
  getBookings
}