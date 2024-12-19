const max = Math.max(6, 23, 45, 1, 89, 23);
// console.log(max);

const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 1, 5];
const arrayMax = Math.max(...numbers);
// console.log(arrayMax);

//use spread opread operator to cpy=============================
const friends = [4, 5, 87, 9];
const bondu = friends;
const dosto = [...friends]; //copy
friends.push(200);
console.log(dosto);
console.log(bondu);

//advanced
const sonkha = [...friends, 999]; //add extra elements while copy
console.log(sonkha);
