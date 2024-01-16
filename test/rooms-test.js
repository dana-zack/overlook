import chai from 'chai';
const expect = chai.expect;
import { sampleRooms, sampleBookings, sampleCustomer1, sampleCustomer2, sampleCustomer1Bookings, sampleCustomer2Bookings, roomsByDate1, sampleBookings2, sampleSuiteRooms, sampleRoom1, sampleBooking, modifiedBookings } from './sample-data'
import { gatherBookingsByCustomer, calculateCosts, findRoomsByDate, filterRoomsByType, formatBooking, addBooking } from '../src/rooms'

// ===================================================================
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

// ===================================================================
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

// ===================================================================
describe('findRoomsByDate', function() {
  it('Should return an array containing all rooms available for a specific date', function() {
    const date1 = `2024/01/25`;
    const roomsByDate = findRoomsByDate(date1, sampleRooms, sampleBookings)
    expect(roomsByDate).to.deep.equal(roomsByDate1);
  });

  it('Should return an empty array if all rooms are booked for a specific date', function() {
    const date2 = `2024/01/10`;
    const roomsByDate = findRoomsByDate(date2, sampleRooms, sampleBookings2)
    expect(roomsByDate).to.deep.equal([]);
  });

  it('Should return all rooms if there are no bookings for a specific date', function() {
    const date2 = `2024/01/10`;
    const roomsByDate = findRoomsByDate(date2, sampleRooms, sampleBookings)
    expect(roomsByDate).to.deep.equal(sampleRooms);
  });
});

// ===================================================================
describe('filterRoomsByType', function() {
  it('Should return an array of all rooms of a specified room type', function() {
    const suiteRooms = filterRoomsByType('suite', sampleRooms)
    expect(suiteRooms).to.deep.equal(sampleSuiteRooms)
  });

  it('Should return an empty array if no rooms match the specified room type', function() {
    const juniorRooms = filterRoomsByType('junior suite', roomsByDate1);
    expect(juniorRooms).to.deep.equal([]);
  });
});

// ===================================================================
describe('formatBooking', function() {
  it('Should format a new booking object', function() {
    const updatedBooking = formatBooking(sampleCustomer1, sampleRoom1, '2024/05/10');
    expect(updatedBooking).to.deep.equal(sampleBooking)
  });
});

// ===================================================================
describe('addBooking', function() {
  it('Should add a new booking to the bookings array', function() {
    const updatedBooking = formatBooking(sampleCustomer1, sampleRoom1, '2024/05/10');
    const updatedBookings = addBooking(updatedBooking, sampleBookings)
    expect(updatedBookings).to.deep.equal(modifiedBookings)
  });
});