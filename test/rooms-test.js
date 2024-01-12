import chai from 'chai';
const expect = chai.expect;
import { sampleRooms, sampleBookings, sampleCustomers, sampleCustomer1, sampleCustomer2, sampleCustomer3, sampleCustomer1Bookings, sampleCustomer2Bookings } from './sample-data'
import { gatherBookingsByCustomer, calculateCosts } from '../src/rooms'

describe('gatherBookingsByCustomer', function() {
  it('Should return an array of all of the bookings made by a single customer', function() {
    const user1Bookings = gatherBookingsByCustomer(sampleCustomer1, sampleBookings)
    expect(user1Bookings).to.deep.equal(sampleCustomer1Bookings);
  });

  it('Should return an empty array if a customer does not currently have any bookings', function() {
    const user2Bookings = gatherBookingsByCustomer(sampleCustomer2, sampleBookings)
    expect(user2Bookings).to.deep.equal(sampleCustomer2Bookings);
  });
});

describe('calculateCosts', function() {
  it('Should return the total cost of all of the bookings made by a single customer', function() {
    const user1Cost = calculateCosts(sampleCustomer1Bookings, sampleRooms)
    expect(user1Cost).to.deep.equal('$1,126.95');
  });

  it('Should return $0 if a customer does not currently have any bookings', function() {
    const user2Cost = calculateCosts(sampleCustomer2Bookings, sampleRooms)
    expect(user2Cost).to.deep.equal('$0');
  });
});
