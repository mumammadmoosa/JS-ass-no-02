for (let i = 0; i < 10; i++) {
    // Your code to be executed 10 times goes here
    document.write("This is iteration" + (i + 1));
  }
  
for (let i = 0; i < 10; i++) {
    // Your code to be executed 10 times goes here
    document.write("My name is M.Moosa" + (i + 1) + "</br>" ) 
}

for (let i = 0; i <= 11; i++) {
    // Your code to be executed 12 times goes here
    document.write("My name is M.Moosa" + (i + 1) + "</br>");
  }
  
  for (var i = 0;i <= 4;i++){

  }

  for (let count = 0; count < 100; count++) {
    // Your code to be executed 100 times goes here
    document.write("This is iteration " + (count + 1));
  }
  
  // Q6
  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var numberOfFruits = fruits.length;

console.log("Number of fruits:", numberOfFruits);

// Q7
var flag = true;

// Q8
var pets = ["dog", "cat", "rabbit", "hamster", "guinea pig"];

for (var i = 0; i < pets.length; i++) {
    // Your loop code here
    console.log("Pet:", pets[i]);
}
// Q9
for (var i = 0; i < 10; i++) {
  if (i === 1) {
      alert("Counter is " + i);
      break; // Break out of the loop after displaying the alert
  }
}

// Q9
// Create an array of user names
var userNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Prompt the user to enter a first name
var firstName = prompt("Enter first name");

// Loop through the array of user names
for (var i = 0; i < userNames.length; i++) {
    // Check if the entered first name matches a user name in the array
    if (firstName === userNames[i]) {
        alert("Welcome, " + firstName + "!");
        break; // Exit the loop if a match is found
    } else {
        alert("Please write the correct user name.");
    }
}

// Q11
var matchFound = false;
var list = ["item1", "item2", "item3"]; // Replace with your list

var userInput = prompt("Enter an item:");

for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}

if (!matchFound) {
    alert("No match found");
}

// Q12

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    // Your loop code here
}

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}

                //   ARRAYS & LOOP

// Q3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q4
// Prompt the user for the table number and length
const tableNumber = parseInt(prompt("Enter the table number:"));
const tableLength = parseInt(prompt("Enter the table length:"));

// Check if the input is valid
if (!isNaN(tableNumber) && !isNaN(tableLength)) {
  // Print the multiplication table
  console.log(`Multiplication Table for ${tableNumber} (up to ${tableLength}):`);
  for (let i = 1; i <= tableLength; i++) {
    const result = tableNumber * i;
    console.log(`${tableNumber} x ${i} = ${result}`);
  }
} else {
  console.log("Invalid input. Please enter valid numbers.");
}

// Q5
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Fruits in the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Q6
// ....................

// Q7
const Ai = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Enter an item to search:");

// Convert the user input to lowercase for case-insensitive search
const searchTerm = userInput.toLowerCase();

let isFound = false;

for (let i = 0; i < A.length; i++) {
  // Convert the current array item to lowercase for case-insensitive comparison
  const currentItem = A[i].toLowerCase();
  
  if (currentItem === searchTerm) {
    isFound = true;
    break; // No need to continue searching once found
  }
}

if (isFound) {
  alert(`Yes, '${userInput}' is found in the list.`);
} else {
  alert(`No, '${userInput}' is not found in the list.`);
}

// Q8
const A = [24, 53, 78, 91, 12];

// Initialize a variable to store the largest number
let largestNumber = A[0]; // Assume the first number is the largest

// Iterate through the array to find the largest number
for (let i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  }
}
console.log(`The largest number in the array is: ${largestNumber}`);

// Q9
const Ab = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number
let smallestNumber = A[0]; // Assume the first number is the smallest

// Iterate through the array to find the smallest number
for (let i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }
}
console.log(`The smallest number in the array is: ${smallestNumber}`);

// Q10
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
