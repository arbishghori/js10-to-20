var studentNames = [];
studentNames.push("John");
studentNames.push("Emily");
// ... add more student names as needed
////////////////////////////////////

var studentNames = {};
studentNames["john"] = "John Doe";
studentNames["emily"] = "Emily Smith";
/////////////////////////////////////////////////
var fruits = ["apple", "banana", "orange", "grape"];
///////////////////////////////////////////////////////
var numbers = [1, 2, 3, 4, 5];
////////////////////////////////////////
var booleanArray = [true, false, true, true, false];
//////////////////////////////////////////////
var mixedArray = [42, "apple", true, null, { name: "John" }];
/////////////////////////////////////////////////
var educationQualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD"
  ];
  
  // Display the qualifications in the browser
  document.write("<h2>Education Qualifications in Pakistan:</h2>");
  document.write("<ul>");
  for (var i = 0; i < educationQualifications.length; i++) {
    document.write("<li>" + educationQualifications[i] + "</li>");
  }
  document.write("</ul>");
  ////////////////////////////////////////
  // Store student names in an array
var studentNames = ["John", "Emily", "David"];

// Store scores of the three students
var studentScores = [420, 380, 450];

// Calculate total marks
var totalMarks = 500;

// Display scores and percentages
document.write("<h2>Student Scores and Percentages:</h2>");
for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  document.write("<p>" + studentNames[i] + " scored " + studentScores[i] + " out of " + totalMarks + ". Percentage: " + percentage.toFixed(2) + "%</p>");
}
/////////////////////////////////////////////////////////////////////////
// Initialize an array with color names
var colorNames = ["Red", "Green", "Blue", "Yellow", "Orange"];

// Display the original array
document.write("<h2>Original Array:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// a. Add color to the beginning
var colorToAddAtBeginning = prompt("Enter a color to add at the beginning:");
colorNames.unshift(colorToAddAtBeginning);

// Display the array after adding color at the beginning
document.write("<h2>Array After Adding Color at the Beginning:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// b. Add color to the end
var colorToAddAtEnd = prompt("Enter a color to add at the end:");
colorNames.push(colorToAddAtEnd);

// Display the array after adding color at the end
document.write("<h2>Array After Adding Color at the End:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// c. Add two more colors to the beginning
colorNames.unshift("Purple", "Pink");

// Display the array after adding colors at the beginning
document.write("<h2>Array After Adding Two Colors at the Beginning:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// d. Delete the first color
colorNames.shift();

// Display the array after deleting the first color
document.write("<h2>Array After Deleting the First Color:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// e. Delete the last color
colorNames.pop();

// Display the array after deleting the last color
document.write("<h2>Array After Deleting the Last Color:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// f. Add color at a user-defined index
var indexToAddColor = prompt("Enter the index to add a color:");
var colorToAddAtIndex = prompt("Enter the color to add at the index:");
colorNames.splice(indexToAddColor, 0, colorToAddAtIndex);

// Display the array after adding color at the user-defined index
document.write("<h2>Array After Adding Color at User-Defined Index:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");

// g. Delete colors from a user-defined index
var indexToDeleteFrom = prompt("Enter the index from which to delete colors:");
var numColorsToDelete = prompt("Enter the number of colors to delete:");
colorNames.splice(indexToDeleteFrom, numColorsToDelete);

// Display the array after deleting colors from the user-defined index
document.write("<h2>Array After Deleting Colors from User-Defined Index:</h2>");
document.write("<p>" + colorNames.join(", ") + "</p>");
/////////////////////////////////////////////////////////////////
// Store student scores in an array
var studentScores = [85, 92, 78, 95, 88, 70];

// Display the original array
document.write("<h2>Original Student Scores:</h2>");
document.write("<p>" + studentScores.join(", ") + "</p>");

// Sort the array in ascending order
studentScores.sort(function(a, b) {
  return a - b;
});

// Display the sorted array
document.write("<h2>Sorted Student Scores (Ascending Order):</h2>");
document.write("<p>" + studentScores.join(", ") + "</p>");
/////////////////////////////////////////////////////////////////
// Initialize an array with city names
var cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// Initialize an empty array for selected cities
var selectedCities = [];

// Copy 3 elements from cities array to selectedCities array
selectedCities = cities.slice(1, 4); // Copies elements at index 1, 2, and 3

// Display the original cities array
document.write("<h2>Original Cities Array:</h2>");
document.write("<p>" + cities.join(", ") + "</p>");

// Display the selected cities array
document.write("<h2>Selected Cities Array:</h2>");
document.write("<p>" + selectedCities.join(", ") + "</p>");
////////////////////////////////////////////////////////////
var arr = ["This", "is", "my", "cat"];

// Create a single string using the join method
var combinedString = arr.join(" ");

// Display the combined string
document.write("<p>" + combinedString + "</p>");
////////////////////////////////////////////////////////////////
// Create an empty array to act as a queue
var queue = [];

// Enqueue (add) values to the end of the queue
queue.push("Value 1");
queue.push("Value 2");
queue.push("Value 3");

// Dequeue (remove and access) values from the front of the queue
var dequeuedValue1 = queue.shift(); // Removes and returns "Value 1"
var dequeuedValue2 = queue.shift(); // Removes and returns "Value 2"

// Display the dequeued values
console.log("Dequeued Value 1:", dequeuedValue1);
console.log("Dequeued Value 2:", dequeuedValue2);
////////////////////////////////////////////////////////////

// Create an empty array to act as a stack
var stack = [];

// Push values onto the stack (add to the end)
stack.push("Value 1");
stack.push("Value 2");
stack.push("Value 3");

// Pop values off the stack (remove from the end)
var poppedValue1 = stack.pop(); // Removes and returns "Value 3"
var poppedValue2 = stack.pop(); // Removes and returns "Value 2"

// Display the popped values
console.log("Popped Value 1:", poppedValue1);
console.log("Popped Value 2:", poppedValue2);
///////////////////////////////////////////////////////

// Array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Display the dropdown/select menu
document.write("<label for='manufacturer'>Select a Phone Manufacturer:</label>");
document.write("<select id='manufacturer'>");

for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");