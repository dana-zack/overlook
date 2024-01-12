function gatherBookingsByCustomer(customer, allBookings) {
  return allBookings.filter(booking => booking.userID === customer.id);
};

function calculateCosts(customerBookings, sampleRooms) {
  const totalCost = customerBookings.reduce((acc, booking) => {
    const eachRoomCost = sampleRooms.find(room => {
      return booking.roomNumber === room.number
    }).costPerNight;
    acc += eachRoomCost;
    return acc;
  }, 0);
  return `$${totalCost.toLocaleString('en-US')}`;
};

function findRoomsByDate(date, sampleRooms, sampleBookings) {
  const bookedRoomsByDate = sampleBookings.filter(booking => {
    return booking.date === date;
  });
  const bookedRoomNumbers = bookedRoomsByDate.map(booking => {
    return booking.roomNumber;
  });
  let availableRooms = [];
  sampleRooms.forEach(sampleRoom => {
    if (!(bookedRoomNumbers.includes(sampleRoom.number))) {
      availableRooms.push(sampleRoom);
    }
  });
  return availableRooms;
}

function filterRoomsByType(type, rooms) {
  return rooms.filter(room => room.roomType === type);
}

function addBooking(customer, room, date) {
  const newBooking = {
    userID: customer.id,
    date: date,
    roomNumber: room.number
  };
  return newBooking;
}

export {
  gatherBookingsByCustomer,
  calculateCosts,
  findRoomsByDate,
  filterRoomsByType,
  addBooking
}