// Declare an empty multidimensional array
let emptyMultiArray = [];

// Add arrays to the main array to create the structure
emptyMultiArray[0] = [];
emptyMultiArray[1] = [];
emptyMultiArray[2] = [];

console.log(emptyMultiArray); // Output: [ [], [], [] ]
////////////////////////////////
// Declare and initialize a multidimensional array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix);
  /* Output:
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  */
///////////////////////////////////////
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
///////////////////////////////////////////
// Get the table number and length from the user
const tableNumber = parseInt(prompt("Enter the table number:"));
const tableLength = parseInt(prompt("Enter the length of the table:"));

// Print the multiplication table using a for loop
console.log(`Multiplication Table of ${tableNumber} (up to ${tableLength}):`);
for (let i = 1; i <= tableLength; i++) {
  const result = tableNumber * i;
  document.write(`${tableNumber} x ${i} = ${result}`);
}
////////////////////////////////////////////////
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// console.log("Items in the array:");
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i]);
// }
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Items in the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


///////////////////////////////////////////
// a. Counting: 1, 2, 3, ..., 15
console.log("Counting:");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// b. Reverse counting: 10, 9, 8, ..., 1
console.log("Reverse counting:");
for (let i = 10; i >= 1; i--) {
  document.write(i);
}

// c. Even: 0, 2, 4, ..., 20
console.log("Even:");
for (let i = 0; i <= 20; i += 2) {
  document.write(i);
}

// d. Odd: 1, 3, 5, ..., 19
console.log("Odd:");
for (let i = 1; i <= 19; i += 2) {
  document.write(i);
}

// e. Series: 2k, 4k, 6k, ..., 20k
console.log("Series:");
for (let i = 1; i <= 10; i++) {
  document.write(2 * i + "k");
}
//////////////////////////////////////////

const a= ["cake", "apple pie", "cookie", "chips", "patties"];

// Ask the user to enter an item for search
const userInput = prompt("Enter an item to search:");

// Convert user input to lowercase for case-insensitive search
const userInputLower = userInput.toLowerCase();

// Check if the user input exists in the array
let found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInputLower) {
    found = true;
    break;
  }
}

// Display the result based on whether the item was found
if (found) {
  console.log(`Yes, ${userInput} is found in the list.`);
} else {
  console.log(`No, ${userInput} is not found in the list.`);
}
/////////////////////////////////////////////////

const B = [24, 53, 78, 91, 12];

// Initialize a variable to store the largest number
let largest = B[0]; // Assume the first number is the largest

// Iterate through the array to find the largest number
for (let i = 1; i < B.length; i++) {
  if (B[i] > largest) {
    largest = B[i];
  }
}

console.log(`The largest number in the array is: ${largest}`);
///////////////////////////////////////////////////////////////

const A = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number
let smallest = A[0]; // Assume the first number is the smallest

// Iterate through the array to find the smallest number
for (let i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

console.log(`The smallest number in the array is: ${smallest}`);
///////////////////////////////////////////////////////////

console.log("Multiples of 5 from 1 to 100:");
for (let i = 1; i <= 20; i++) { // 20 multiples of 5 in the range
  const multiple = 5 * i;
  console.log(multiple);
}