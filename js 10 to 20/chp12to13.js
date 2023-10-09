function checkCharacterType(input) {
    if (typeof input !== 'string' || input.length !== 1) {
      console.log("Invalid input. Please provide a single character.");
      return;
    }
  
    const charCode = input.charCodeAt(0);
  
    if (charCode >= 48 && charCode <= 57) {
      console.log("Input is a number.");
    } else if (charCode >= 65 && charCode <= 90) {
      console.log("Input is an uppercase letter.");
    } else if (charCode >= 97 && charCode <= 122) {
      console.log("Input is a lowercase letter.");
    } else {
      console.log("Input is neither a number nor a letter.");
    }
  }
  
  const userInput = prompt("Enter a character:"); // Assuming this is running in a browser environment
  checkCharacterType(userInput);
///////////////////////////////////////////////////////

function compareIntegers(a, b) {
    if (isNaN(a) || isNaN(b)) {
      console.log("Please enter valid numbers.");
      return;
    }
  
    if (a > b) {
      console.log(a + " is larger.");
    } else if (b > a) {
      console.log(b + " is larger.");
    } else {
      console.log("Both numbers are equal.");
    }
  }
  
  const userInput1 = parseInt(prompt("Enter the first integer:")); // Assuming this is running in a browser environment
  const userInput2 = parseInt(prompt("Enter the second integer:"));
  
  compareIntegers(userInput1, userInput2);
////////////////////////////////////////////////////////
function checkNumberType(number) {
    if (isNaN(number)) {
      console.log("Please enter a valid number.");
      return;
    }
  
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  
  const usersInput = parseFloat(prompt("Enter a number:")); // Assuming this is running in a browser environment
  checkNumberType(usersInput);
  //////////////////////////////////////////////////////////
  function isVowel(character) {
    if (typeof character !== 'string' || character.length !== 1) {
      console.log("Please enter a single character.");
      return;
    }
  
    const lowercaseCharacter = character.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    if (vowels.includes(lowercaseCharacter)) {
      return true;
    } else {
      return false;
    }
  }
  
  const userInput3 = prompt("Enter a character:"); // Assuming this is running in a browser environment
  const result = isVowel(userInput3);
  
  if (result === true) {
    console.log("The character is a vowel.");
  } else if (result === false) {
    console.log("The character is not a vowel.");
  }
  ///////////////////////////////////////
// Step a: Store correct password in a variable
const correctPassword = "SecretPassword123";

// Step b: Ask user to enter their password
const user = prompt("Enter your password:");

// Step c: Validate the passwords
if (user === "") {
  console.log("Please enter your password.");
} else if (userInput === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}
///////////////////////////////////////////////////
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting); // Outputs either "Good day" or "Good evening" based on the condition
//////////////////////////////////////////////
const userInpuT = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));

if (isNaN(userInpuT)) {
  console.log("Please enter a valid number.");
} else {
  if (userInpuT >= 0 && userInput < 1200) {
    console.log("Good morning!");
  } else if (userInput >= 1200 && userInput < 1700) {
    console.log("Good afternoon!");
  } else if (userInput >= 1700 && userInput < 2100) {
    console.log("Good evening!");
  } else if (userInput >= 2100 && userInput <= 2359) {
    console.log("Good night!");
  } else {
    console.log("Invalid time entered.");
  }
}