// Sample Data

const sampleRooms = [
  {
    bedSize: "king",
    bidet: true,
    costPerNight: 358.4,
    numBeds: 1,
    number: 1,
    roomType: "residential suite"
  },
  {
    bedSize: "full",
    bidet: false,
    costPerNight: 469.9,
    numBeds: 1,
    number: 2,
    roomType: "single room"
  },
  {
    bedSize: "queen",
    bidet: true,
    costPerNight: 312.05,
    numBeds: 2,
    number: 3,
    roomType: "suite"
  },
  {
    bedSize: "twin",
    bidet: false,
    costPerNight: 550.4,
    numBeds: 3,
    number: 4,
    roomType: "junior suite"
  },
  {
    bedSize: "queen",
    bidet: true,
    costPerNight: 225.3,
    numBeds: 1,
    number: 5,
    roomType: "residential suite"
  },
  {
    bedSize: "king",
    bidet: true,
    costPerNight: 730.33,
    numBeds: 2,
    number: 6,
    roomType: "residential suite"
  },
  {
    bedSize: "queen",
    bidet: false,
    costPerNight: 218.15,
    numBeds: 1,
    number: 7,
    roomType: "suite"
  }
];

const sampleBookings = [
  { id: '123abc', userID: 1, date: '2024/01/25', roomNumber: 1 },
  { id: '456def', userID: 1, date: '2024/02/14', roomNumber: 7 },
  { id: '789ghi', userID: 1, date: '2024/02/17', roomNumber: 4 },
  { id: '1011jkl', userID: 3, date: '2024/03/08', roomNumber: 3 },
  { id: '1213mno', userID: 3, date: '2024/04/22', roomNumber: 5 },
  { id: '1415pqr', userID: 3, date: '2024/04/18', roomNumber: 6 },
  { id: '1617stu', userID: 4, date: '2024/03/09', roomNumber: 2 },
  { id: '1819vwx', userID: 5, date: '2024/01/25', roomNumber: 5 },
  { id: '2021yza', userID: 5, date: '2024/01/25', roomNumber: 4 }
];

const sampleCustomers = [
  { id: 1, name: 'Dana' },
  { id: 2, name: 'Nora' },
  { id: 3, name: 'Megan' },
  { id: 4, name: 'Michael' },
  { id: 5, name: 'Xavier' }
];

const sampleCustomer1 = { id: 1, name: 'Dana' };
const sampleCustomer2 = { id: 2, name: 'Nora' };
const sampleCustomer3 = { id: 3, name: 'Megan' };

// =================================================
const sampleCustomer1Bookings = [
  { id: '123abc', userID: 1, date: '2024/01/25', roomNumber: 1 },
  { id: '456def', userID: 1, date: '2024/02/14', roomNumber: 7 },
  { id: '789ghi', userID: 1, date: '2024/02/17', roomNumber: 4 }
];

const sampleCustomer2Bookings = [];

const roomsByDate1 = [
  {
    bedSize: "full",
    bidet: false,
    costPerNight: 469.9,
    numBeds: 1,
    number: 2,
    roomType: "single room"
  },
  {
    bedSize: "queen",
    bidet: true,
    costPerNight: 312.05,
    numBeds: 2,
    number: 3,
    roomType: "suite"
  },
  {
    bedSize: "king",
    bidet: true,
    costPerNight: 730.33,
    numBeds: 2,
    number: 6,
    roomType: "residential suite"
  },
  {
    bedSize: "queen",
    bidet: false,
    costPerNight: 218.15,
    numBeds: 1,
    number: 7,
    roomType: "suite"
  }
];

const sampleBookings2 = [
  { id: '123abc', userID: 1, date: '2024/01/10', roomNumber: 1 },
  { id: '456def', userID: 1, date: '2024/01/10', roomNumber: 2 },
  { id: '789ghi', userID: 1, date: '2024/01/10', roomNumber: 3 },
  { id: '1011jkl', userID: 3, date: '2024/01/10', roomNumber: 4 },
  { id: '1213mno', userID: 3, date: '2024/01/10', roomNumber: 5 },
  { id: '1415pqr', userID: 3, date: '2024/01/10', roomNumber: 6 },
  { id: '1617stu', userID: 4, date: '2024/01/10', roomNumber: 7 }
];

const sampleSuiteRooms = [
  {
    bedSize: "queen",
    bidet: true,
    costPerNight: 312.05,
    numBeds: 2,
    number: 3,
    roomType: "suite"
  },
  {
    bedSize: "queen",
    bidet: false,
    costPerNight: 218.15,
    numBeds: 1,
    number: 7,
    roomType: "suite"
  }
];


// =================================================
export {
  sampleRooms,
  sampleBookings,
  sampleCustomers,
  sampleCustomer1,
  sampleCustomer2,
  sampleCustomer3,
  sampleCustomer1Bookings,
  sampleCustomer2Bookings,
  roomsByDate1,
  sampleBookings2,
  sampleSuiteRooms
}