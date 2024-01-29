// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

function greeting(name = "") {
  console.log(`Hello ${name}`);
}

greeting("Divanshu Garg");

// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.

function addition(a = 0, b = 0) {
  return a + b;
}

console.log(addition(2, 5));

// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

function TimeOfDay(hour = 0) {
  if (hour >= 4 && hour < 12) {
    console.log("Good Morning");
  } else if (hour >= 12 && hour < 17) {
    console.log("Good Afternoon");
  } else if (hour >= 17 && hour < 22) {
    console.log("Good Evening");
  } else {
    console.log("Good Night");
  }
}

// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

function area(length = 0, width = 0) {
  return length * width;
}

console.log(area(5, 9));

// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

function raiseToPower(base = 0, exponent = 0) {
  return base ** exponent;
}

console.log(`5 raised to power of 7: ${raiseToPower(5, 7)}`);

// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(`Problem 6: ${isPrime(6)}`);

// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

let a = 5;

function global() {
  console.log(`Here a is a global variable: global a = ${a}`);
}

function local(a = 0) {
  console.log(`Here a is a local variable: local a = ${a}`);
}

global();
local();

// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

function mainFunction(c) {
  c = 5;

  function nestedFunction() {
    result = (c * 5) / 12 + 15 - 27;
    console.log(
      `This is an example of function which has another function nested in it and the inner function uses a variable from the outer function. the outer function variable is: ${c} and the result is: ${result}`
    );
  }
  return nestedFunction();
}

mainFunction(5);

// Question-9:  Write a recursive function to calculate the factorial of a given number.

console.log("Question-9");

function Factorial(n) {
  let multiplied = 1;
  multiplied = multiplied * n;

  if (n - 1 > 0) {
    multiplied = multiplied * Factorial(n - 1);
  }

  return multiplied;
}

console.log(Factorial(11));

// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).

console.log("Question 10");

function f(x) {
  return x + 2;
}

function g(x) {
  return 2 * x;
}

function h(x) {
  console.log(f(g(x)));
}

h(9);
