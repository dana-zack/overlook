function gatherBookingsByCustomer(customer, bookings) {
  return bookings.filter(booking => booking.userID === customer.id)
}



export {
  gatherBookingsByCustomer
}