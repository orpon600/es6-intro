const actor = {
  name: "Ananat",
  age: 30,
  phone: "01746219900",
  money: 234512345,
};

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

//if right side is an objet left side of destructuring will be
// objet as well
//use property name as a variable that contains the property value

const { phone, age, money } = actor;

console.log(phone);
console.log(phone);
console.log(money);
console.log(money);
console.log(age);
console.log(age);
console.log(age);

// array destructuring.
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

//advanced
function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);
