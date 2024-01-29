// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

let x = 15;

x > 10
  ? console.log("x is greater than 10")
  : console.log("x is not greater than 10");

// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

let age = 9;

age >= 18
  ? console.log("you are eligible to drive a car")
  : console.log("You are not eligible to drive a car");

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

let score = 91;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 75 && score < 90:
    console.log("Grade: B");
    break;
  case score >= 60 && score < 75:
    console.log("Grade: C");
    break;
  case score >= 40 && score < 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
    break;
}

// though I have used switch case to solve this problem. switch case is preffered to be used for comparing exact values and if else statements are preffered to compare ranges. the best practice for this question will be to solve with an if-else statement

// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

let time = {
  hours: 9,
  minutes: 11,
};

if (time.hours >= 4 && time.hours < 12) {
  console.log("Good Morning");
} else if (time.hours >= 12 && time.hours < 17) {
  console.log("Good Afternoon");
} else if (time.hours >= 17 && time.hours < 22) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  default:
    console.log("Saturday");
    break;
}

// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

let month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  default:
    console.log("December");
    break;
}

// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

let fruit = "D";

switch (fruit) {
  case "A":
    console.log("Apple");
    break;
  case "B":
    console.log("Banana");
    break;
  case "C":
    console.log("Cherry");
    break;
  default:
    console.log("Can not recall the name of this fruit");
    break;
}

// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

let temprature = 43; // taking temprature in farhenheit. categoried according to commercial refrigeration temp range

if (temprature < 32) {
  console.log("Temprature is low");
} else if (temprature >= 32 && temprature <= 40) {
  console.log("Temprature is Medium");
} else {
  console.log("Temprature is High");
}

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.

let number = -4;

let even = (number % 2 === 0)? true : false;
let positive = (number >= 0)? true : false;

if ((even === true) && (positive === true)){
    console.log("Number is Positive and Even")
}
else if ((even === true) && (positive === false)){
    console.log("Number is Negative and Even")
}
else if ((even === false) && (positive === true)){
    console.log("Number is Positive and Odd")
}
else{
    console.log("Number is Negative and Odd")
}

// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

let username = "Divanshu";
let lengthOfUsername = username.length;

if (lengthOfUsername < 6){
    console.log("Username too short");
}
else if (lengthOfUsername >= 6 && lengthOfUsername <=15){
    console.log("Username accepted");
}
else{
    console.log("Username too long");
}