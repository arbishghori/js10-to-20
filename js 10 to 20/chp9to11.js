// Ask the user for input
var cityName = prompt("Enter a city name:");

// Check if the input is "Karachi"
if (cityName === "Karachi") {
    console.log("Welcome to the city of lights");
}

//////////////////////
// Ask the user for input
var gender = prompt("Enter your gender (male or female):");

// Convert the input to lowercase for case-insensitive comparison
gender = gender.toLowerCase();

// Check the gender and display the appropriate greeting
if (gender === "male") {
    console.log("Good Morning Sir.");
} else if (gender === "female") {
    console.log("Good Morning Ma’am.");
} else {
    console.log("Sorry, I don't recognize that gender.");
}

//////////////////////////

// Ask the user for input
var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// Check if the remaining fuel is less than 0.25 litres
if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car.");
} else {
    console.log("You have enough fuel in your car.");
}

///////////////////

//////a////////
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
///////b//////////
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
////c/////////
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
/////d/////////
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
/////e/////
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
///////f///////
if ("car" < "cat") {
    alert("car is smaller than cat");
}
////////////////////////////////////////////////////
// Ask the user for input
var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks for each subject:"));

// Calculate total marks obtained
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

// Calculate percentage
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Compute grade based on percentage
var grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

// Display results
document.write("Total Marks Obtained: " + totalObtainedMarks);
document.write("Percentage: " + percentage.toFixed(2) + "%");
document.write("Grade: " + grade);
///////////////////////////////////////

// Store the secret number (random number between 1 and 10)
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Sorry, try again!");
}
///////////////////////////////////////////////////
// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
} else {
    console.log(number + " is not divisible by 3.");
}
////////////////////////////////////////////////////
// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}
/////////////////////////////////////////
// Prompt the user to enter the temperature
var temperature = parseFloat(prompt("Enter the temperature:"));

// Check the temperature and display a message
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("The temperature is very cold.");
}

////////////////////////////////////////
// Prompt the user to enter the temperature
var temperature = parseFloat(prompt("Enter the temperature:"));

// Check the temperature and display a message
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("The temperature is very cold.");
}


