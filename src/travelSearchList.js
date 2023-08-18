const today = new Date();
const formattedDate = today.toDateString("en-Us", {
    day:'long', month: 'long', weekday: 'long'

}
);
const formattedTime = today.toLocaleTimeString("en-US", {
  hour: "numeric", minute: "numeric", hour12: true, meridiem: "short",
});

const date = (`${formattedDate} ${formattedTime}`);

const travelSearchList = [
    {
        "id": "P0001",
        "origin": "Yaounde",
        "destination": "Douala",
        "type": 'First class',
        "departure_time": date,
        "travel_duration": 3,
        "price": "5000FCFA"
    },
    {
        "id": "P0002",
        "origin": "Douala",
        "destination": "Yaounde",
        "type": 'business class',
        "departure_time": "10:00 AM",
        "travel_duration": 4,
        "price": "5000FCFA"
    },
    {
        "id": "P0003",
        "origin": "Douala",
        "destination": "Yaounde",
        "type": 'economic class',
        "departure_time": "10:00 AM",
        "arrival_time": "6:00 PM",
        "VIP": true
    },
]

export default travelSearchList;