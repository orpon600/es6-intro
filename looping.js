//for of use on array or string not in objet
//for in use on objet

const numbers = [1, 6, 8, 4];
// for (let i = 0; i < numbers.length; i++){}
//while

for (const num of numbers) {
  //   console.log(num);
}

const nobab = "Siraj Ud Doula";
for (const char of nobab) {
  // console.log(char);
}

const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isClened: true,
};

// objet a for of hoy na
// for (const key of glass) {
//     console.log(key);

// }

for (const key in glass) {
  const value = glass[key];
  console.log(key, value);
}

// Optional
const keys = Object.keys(glass);
// console.log(keys);

for (const key of keys) {
  const values = glass[key];
  // console.log(key, values);
}
