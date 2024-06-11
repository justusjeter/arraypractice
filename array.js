// Array of group members
const groupMembers = ["Justus", "Lexie", "Rodale", "Sabah"];
console.log("Group Members:", groupMembers);

// Array of different types of foods
const foods = ["Pizza", "Sushi", "Burger", "Salad", "Pasta", "Tacos", "Curry", "Steak", "Ice Cream", "Fruit"];
console.log("Foods:", foods);

// Multidimensional array with state information
const statesInfo = [
    ["Virginia", "Richmond", "Cardinal"],
    ["Maryland", "Annapolis", "Baltimore Oriole"],
    ["Delaware", "Dover", "Delaware Blue Hen"],
    ["North Carolina", "Raleigh", "Northern cardinal"],
    ["South Carolina", "Columbia", "Carolina wren"],
    ["Georgia", "Atlanta", "Brown thrasher"],
    ["Florida", "Tallahassee", "Northern mockingbird"]
];

console.log("States Information:");
statesInfo.forEach(state => console.log("State:", state[0], "| Capital:", state[1], "| State Bird:", state[2]));;