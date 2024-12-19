// problem 1

// 1. white an arrow function that take 3 parameters,
// will multiply the parameters and will return the result.

const multiply = (a, b, c) => a * b * c;
// const max = multiply(2, 3, 4);
// console.log(multiply(2, 3, 4));

// 2. write the following sentence in the three lines and print the result;
// I am a web developer. I love to code . i vove to eat biryani.

const message = `
I am a web devoloper.
I love to code.
I love to eat biryani`;

console.log(message.replace(/\n/g, "")); //one line
// console.log(message);

// 3. Write the following that will take 2 parameters: One parameter
// will come from you and other parameter will be a default parameter
// add these two parameters and the result

function addNumbers(num1, num2 = 10) {
  return num1 + num2;
}

// console.log(addNumbers(5)); // Output will be 15, as num2 defaults to 10
// console.log(addNumbers(5, 20)); // Output will be 25, as num2 is provided as 20

//4. Write an arrow function where it will do the following:

//a) it will take an array where the array elements will be the
// name of your friends

//b) check it the length of each element is even, push elements
//with even length to a new array and retun the result

// const filterEvenLengthNames = (friends) => {
//     const evenLengthNames = friends.filter(name => name.length % 2 === 0);
//     return evenLengthNames;
// };

// // Example usage:
// const friends = ["Alice", "Bob", "Charlie", "David"];
// const result = filterEvenLengthNames(friends);
// console.log(result); // Output: ["Alice", "David"]

//////////
const filterEvenLengthNames = (friends) => {
  let result = [];
  for (let name of friends) {
    if (name.length % 2 === 0) {
      result.push(name);
    }
  }
  return result;
};

// Example usage:
const friends = ["Alice", "Bob", "Charlie", "David"];
// console.log(filterEvenLengthNames(friends)); // Output: ["Alice", "David"]

///////////////////////////////

//5. write an arrow function where it will do the following: x2

// a) Square each array element
//b) Calculate the sum of the squared elements
//c) Return the average of the sum of the squared elements

const averageOfSquares = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    sum += num ** 2; // Square each element and add to sum
  }
  return sum / numbers.length; // Return the average
};

// Example usage:
const numbers = [2, 4, 6];
// console.log(averageOfSquares(numbers)); // Output: 24

////////////////////////

//6. Write an arrow function where it will do the following:

//a) it will take two array inputs
//b) combine the two arrays and assign them in a new array
//c) Find the maximum number from the new array and return the result.
// print the result.

const findMaxFromCombinedArrays = (array1, array2) => {
  const combinedArray = [...array1, ...array2]; // Combine the arrays
  const maxNumber = Math.max(...combinedArray); // Find the maximum number
  return maxNumber; // Return the maximum number
};

// Example usage:
const array1 = [3, 5, 7];
const array2 = [2, 8, 6];
// console.log(findMaxFromCombinedArrays(array1, array2)); // Output: 8
