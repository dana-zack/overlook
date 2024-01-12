function gatherBookingsByCustomer(customer, allBookings) {
  return allBookings.filter(booking => booking.userID === customer.id);
};

function calculateCosts(customerBookings, sampleRooms) {
  const totalCost = customerBookings.reduce((acc, booking) => {
    const eachRoomCost = sampleRooms.find(room => booking.roomNumber === room.number).costPerNight;
    acc += eachRoomCost;
    return acc;
  }, 0);
  return `$${totalCost.toLocaleString('en-US')}`;
};

export {
  gatherBookingsByCustomer,
  calculateCosts
}