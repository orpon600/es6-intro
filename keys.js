const glass = { name: "glass", color: "golden", price: 12, isClened: true };
// console.log(glass);

//all property name
const keys = Object.keys(glass);
// console.log(keys);
// ["name", "color", "price", "isClened"];

//all property values
const values = Object.values(glass);
// console.log(values);
// ["glass", "golden", 12, true];

const pair = Object.entries(glass);
// console.log(pair);
//array of array, two dimensional arry
// [
//   ["name", "glass"],
//   ["color", "golden"],
//   ["price", 12],
//   ["isClened", true],
// ];

// delete glass.isClened;

const { isClened, ...shortGlass } = glass;
// console.log(shortGlass);

//freeze
// Object.freeze(glass);
Object.seal(glass);
glass.source = "Bangladesh";
glass.price = 5000;
delete glass.name;
console.log(glass);
