// comment out solution of que 6 before running on node because prompt method is not valid for node command. use it on a live server in vs code or some other methods. my given solution is correct from a beginner point of view, but we use other methods to take an input for large projects
 
// Question-1: WAP that logs numbers from 1 to 10 to the console.

for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Question-2: WAP that log all even numbers from 2 to 20.

for (let i = 2; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Question-3: WAP that counts backward from 10 to 1 and logs the values.

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Question-4: WAP to calculate the sum of numbers from 1 to 5.

let a = 0;

for (let i = 1; i < 6; i++) {
  a = a + i;
}

console.log(a);

// Question-5: WAP that prints powers of 2 (2^n) up to 64.

let p;

for (let i = 1; i < 65; i++) {
  p = 2 ** i;
  console.log(p);
  if (p >= 64) {
    break;
  }
}

// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.

console.log("Question 6");

let number = 3;

let guessedNumber;

while (guessedNumber != number) {
  guessedNumber = parseInt(prompt("Guess a number: "));

  if (guessedNumber === number) {
    console.log("You got it right");
    break;
  }
}

// prompt method does not work in node js. use live server in vs code

// confirm that my solution is correct

// Question-7: WAP to display the multiplication table (1 to 10) in the console.

console.log("que 7");

let x = 1;

for (let i = 1; i < 11; i++) {
  console.log(`${x} * ${i} = ${x * i}`);
}

// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).

let i = 0;

while (true) {
  i = i + 1;
  if (i === 3) {
    continue;
  }
  console.log(i);
  if (i === 5) {
    break;
  }
}

// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."

console.log("Question 9: ");

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Question-10: WAP to identify and log prime numbers within a given range.

// let's take given range 1-100. so we don't have to check if the number is positive in this case

let positiveNumber = 1;

while (positiveNumber < 101) {
  positiveNumber = positiveNumber + 1;
  let isPrime;

  for (let i = 2; i < positiveNumber; i++) {
    if (positiveNumber % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime === undefined) {
    console.log(positiveNumber);
  }
}
