import { getData, postBooking, deleteBooking } from './apiCalls'
import { gatherBookingsByCustomer, calculateCosts, findRoomsByDate, filterRoomsByType, formatBooking, addBooking } from './rooms'

// Selectors: views
const loginView = document.querySelector('.login-view');
const welcomeView = document.querySelector('.welcome-view');
const myBookingsView = document.querySelector('.my-bookings-view');
const searchView = document.querySelector('.search-view');
const roomsView = document.querySelector('.rooms-view');
const confirmationView = document.querySelector('.confirmation-view');

// Selectors: buttons
const loginBtn = document.querySelector('#login-btn');
const myBookingsBtn = document.querySelector('#nav-bookings-btn');
const homeBtn = document.querySelector('#nav-home-btn');
const bookStayBtn = document.querySelector('#nav-rooms-btn');
const searchBtn = document.querySelector('#search-btn');

// Selectors: other
const navBar = document.querySelector('nav');
const availableRoomsSection = document.querySelector('.available-cards-container');
const myBookingsSection = document.querySelector('.my-bookings-container');
const welcomeMessage = document.querySelector('.welcome-message');
const noRoomsMessage = document.querySelector('.no-rooms-message');
const noBookingsMessage = document.querySelector('.no-bookings-message');
const confirmationMessage = document.querySelector('.confirmation-message');
const invalidDateMessage = document.querySelector('.invalid-date-message')
const availableRoomsTitle = document.querySelector('.available-rooms-title');
const filterMenu = document.querySelector('#filter-drop-down');
const dateInput = document.querySelector('#date');

// Variables
let customer;
let rooms;
let bookings;
let selectedDate;
let selectedRoom; 
let currentRoom;
let availableRooms;

// Event Listeners
window.addEventListener('load', () => {
  getUser(50);
  getRooms();
  getBookings();
})

loginBtn.addEventListener('click', () => {
  switchToView(welcomeView);
  welcomeMessage.innerText = `Welcome, ${customer.name}`;
  // console.log(bookings)
})

myBookingsBtn.addEventListener('click', () => {
  switchToView(myBookingsView);
  viewBookings()
})

homeBtn.addEventListener('click', () => {
  switchToView(welcomeView);
})

bookStayBtn.addEventListener('click', () => {
  switchToView(searchView);
  dateInput.value = '';
})

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (!dateInput.value) {
    invalidDateMessage.classList.remove('hidden')
    return;
  }
  if (checkDateValidity(dateInput.value)) {
    invalidDateMessage.classList.remove('hidden')
    return;
  } else {
    invalidDateMessage.classList.add('hidden')
  }
  invalidDateMessage.classList.add('hidden')
  selectedDate = dateInput.value.replaceAll("-", "/");
  switchToView(roomsView);
  availableRoomsTitle.innerText = `Rooms available on ${selectedDate}`;
  availableRooms = findRoomsByDate(selectedDate, rooms, bookings);
  displayRooms(availableRooms);
})

availableRoomsSection.addEventListener('click', (event) => {
  if (event.target.closest('button')) {
    selectedRoom = event.target.closest('article');
    switchToView(confirmationView);
    completeBooking();
  }
});

filterMenu.addEventListener('change', () => {
  console.log(filterMenu.value);
  let filteredRooms = filterRoomsByType(filterMenu.value, availableRooms);
  displayRooms(filteredRooms);
})

// Functions
function displayBookings(customerBookings) {
  myBookingsSection.innerHTML = '';
  if (customerBookings.length === 0) {
    noBookingsMessage.classList.remove('hidden');
  } else {
    noBookingsMessage.classList.add('hidden');
    customerBookings.forEach(booking => {
      myBookingsSection.innerHTML += `
      <article class="booked-card">
        <h3>${booking.date}</h3>
        <p class="booking-num">Room #${booking.roomNumber}</p>
      </article>`;
    });
  }
}

function viewBookings() {
  const customerBookings = gatherBookingsByCustomer(customer, bookings)
  displayBookings(customerBookings)
}

function completeBooking() {
  updateCurrentRoom(selectedRoom);
  const newBooking = formatBooking(customer, currentRoom, selectedDate);
  postBooking(newBooking);
  addBooking(newBooking, bookings)
  displayBookingConfirmation();
}

function updateCurrentRoom(selectedRoom) {
  const selectedRoomNumber = Number(selectedRoom.querySelector('.roomNumber').innerText);
  currentRoom = rooms.filter(room => {
    return room.number === selectedRoomNumber;
  })[0];
}

function displayRooms(availableRooms) {
  availableRoomsSection.innerHTML = '';
  if (availableRooms.length === 0) {
    noRoomsMessage.classList.remove('hidden');
  } else {
    noRoomsMessage.classList.add('hidden');
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
          <p class="roomNumber hidden">${room.number}</p>
        </div>
        <button class="book-btn">Book this room</button>
      </article>`;
    });
  }
}

function displayBookingConfirmation() {
  confirmationMessage.innerText = `You have successfully booked room #${currentRoom.number} for the evening of ${selectedDate}. We can't wait to see you then!`;
}

function checkDateValidity(date) {
  const userInput = new Date(date);
  const currentDate = new Date();
  return userInput < currentDate;
}

function switchToView(view) {
  hideAllViews();
  show(view);
  show(navBar);
}

function hideAllViews() {
  hide(loginView);
  hide(welcomeView);
  hide(myBookingsView);
  hide(searchView);
  hide(roomsView);
  hide(confirmationView);
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
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

// ============================================================
export {
  getUser,
  getRooms,
  getBookings
}