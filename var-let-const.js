//var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
// console.log(rich);

let count = 20;
count = count + 10;
// console.log(count);

const numbers = [23, 4, 23, 12, 56];
numbers[1] = 66;
numbers.push(8, 9, 65);
// console.log(numbers);

//objet
const student = {
  name: "oggy bob",
  class: 12,
};

// student = { name: "kokolila" }; >====> let dele problem nai

student.name = "gogolila";
// console.log(student);

//loop

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log(sum);
