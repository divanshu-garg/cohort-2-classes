// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

let x = 5;
let y = 7;

console.log("x + y: " + (x + y));
console.log("x - y: " + (x - y));
console.log("x / y: " + x / y);
console.log("x * y: " + x * y);

// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

let num1 = 3;
let num2 = 7;

// assignment operators are =, +=, -=, *=, /=, %=, **=

console.log(num1);

num1 += num2;

console.log(num1);

num1 -= num2;

console.log(num1);

num1 *= num2;

console.log(num1);

num1 /= num2;

console.log(num1);

num1 %= num2;

console.log(num1);

num1 **= num2;

console.log(num1);

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

let a = 5;
let b = 5;

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

let p = 3;
let q = 3;
let r = 5;
let s = 9;

if (p === q && r === s) {
  console.log("p is equal to q and r is equal to s");
} else {
  console.log("p is not equal to q and r is not equal to s");
}

if (p === q || r === s) {
  console.log("p is equal to q or r is equal to s");
} else {
  console.log("p is not equal to q and r is not equal to s");
}

if (!(p === q)) {
  console.log("p is not equal to q");
} else {
  console.log("p is equal to q");
}

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

let number1 = 5;
let number2 = 3;

console.log(`Number 1: ${number1.toString(2)}`);
console.log(`Number 2: ${number2.toString(2)}`);

console.log("Bitwise AND:" + (number1 & number2));

console.log("Bitwise OR:" + (number1 | number2));

console.log("Bitwise XOR:" + (number1 ^ number2));

console.log("Bitwise NOT (Number 1): " + (~number1));
console.log("Bitwise NOT (Number 2): " + (~number2));


// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

let c = 4;
let d = 5;

if (c === d) {
  console.log("c is equal to d");
} else {
  console.log(c > d ? "c is greater than d" : "d is greater than c");
}

// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

let d1 = 1;
let d2 = "b";
let d3 = true;
let d4;
let d5 = null;
let d6 = {
    day: "Sunday"
};
let d7 = [1, 2, 3];

console.log("Number: " + typeof d1);
console.log("string: " + typeof d2);
console.log("Boolean: " + typeof d3);
console.log("undefined: " + typeof d4);
console.log("null: " + typeof d5);
console.log("object: " + typeof d6);
console.log("array: " + typeof d7);

// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

let s1 = "He";
let s2 = "llo";

console.log("Concatenated string: " + (s1 + s2));

// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

// same as problem 7

// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

let myObject = { key1: 'value1', key2: 'value2' };

console.log('key1' in myObject);
console.log('key3' in myObject);
