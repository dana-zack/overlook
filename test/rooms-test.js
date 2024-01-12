import chai from 'chai';
const expect = chai.expect;
import { sampleRooms, sampleBookings, sampleCustomers, sampleCustomer1, sampleCustomer2, sampleCustomer3, customer1Bookings, customer2Bookings } from './sample-data'
import { gatherBookingsByCustomer } from '../src/rooms'

describe('gatherBookingsByCustomer', function() {
  it('Should return an array of all of the bookings made by a single customer', function() {
    const user1Bookings = gatherBookingsByCustomer(sampleCustomer1, sampleBookings)
    expect(user1Bookings).to.deep.equal(customer1Bookings);
  });

  it('Should return an empty array if a customer does not currently have any bookings', function() {
    const user2Bookings = gatherBookingsByCustomer(sampleCustomer2, sampleBookings)
    expect(user2Bookings).to.deep.equal(customer2Bookings);
  });
});
