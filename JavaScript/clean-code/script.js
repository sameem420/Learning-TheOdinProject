// Bad Code Example
const x = function (z) {
  const w = "Hello ";
  return w + z;
};

x("John");

// Clean Code Example
const generateUserGreeting = function (name) {
  const greeting = "Hello ";
  return greeting + name;
};

generateUserGreeting("John");


 // Good
 function getPlayerScore();
 function getPlayerName();
 function getPlayerTag();
 
 // Bad
 function getUserScore();
 function fetchPlayerName();
 function retrievePlayer1Tag();

// Good
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// Bad (these start with verbs, could be confused for functions)
const getCount = 10;
const isSelected = true;

// Good
function getCount() {
  return numberOfThings;
}

// Bad (it's a noun)
function myName() {
  return "Thor";
}

const MILLISECONDS_PER_HOUR = 60 * 60 * 1000; // 3,600,000;

setTimeout(stopTimer, MILLISECONDS_PER_HOUR);

// Bad Example - comment doesn't tell why, only what and how

// This function increments the value of i by 1
function incrementI(i) {
    i = i + 1; // Add one to i
    return i;
  }
  
  // Better Example - comment tells a why
  
  // This function increments the value of index to move to the next element
  function incrementI(i) {
    i = i + 1;
    return i;
  }
  
  // Good Example - the code tells all that is needed
  
  function moveToNextElement(index) {
    index = index + 1;
    return index;
  }
  

// Good example of Comments usage in Code
function calculateBMI(height, weight) {
    // The formula for BMI is weight in kilograms divided by height in meters squared
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}
