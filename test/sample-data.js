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
  { id: '456def', userID: 2, date: '2024/02/14', roomNumber: 7 },
  { id: '789ghi', userID: 3, date: '2024/02/17', roomNumber: 4 },
  { id: '1011jkl', userID: 4, date: '2024/03/08', roomNumber: 3 },
  { id: '1213mno', userID: 5, date: '2024/04/22', roomNumber: 5 }
];

const sampleUsers = [
  { id: 1, name: 'Dana' },
  { id: 2, name: 'Nora' },
  { id: 3, name: 'Megan' },
  { id: 5, name: 'Michael' },
  { id: 6, name: 'Xavier' }
];

const sampleUser1 = { id: 1, name: 'Dana' };
const sampleUser2 = { id: 2, name: 'Nora' };
const sampleUser3 = { id: 3, name: 'Megan' };

export {
  sampleRooms,
  sampleBookings,
  sampleUsers,
  sampleUser1,
  sampleUser2,
  sampleUser3
}