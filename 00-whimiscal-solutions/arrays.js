// Question-1: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

const { forIn } = require("lodash");

// console.log("working fine");

let myArr = [1, 3, 5, 7, 9, 11];
let target = 8;
let secondElement;

for (const i of myArr) {
  for (const j of myArr) {
    if (i + j === target) {
      secondElement = j;
      break;
    }
  }
  if (i + secondElement === target) {
    console.log([myArr.indexOf(i), myArr.indexOf(secondElement)]);
    break;
  }
}

/* Question-2 Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k. */

console.log("Question 2");

var nums = [1, 1, 2, 2, 3, 3, 4];

function uniqueValues(array) {
  let numsSet = new Set([]);

  for (const i of array) {
    numsSet.add(i);
  }

  array = [];

  for (const i of numsSet) {
    array.push(i);
  }

  return array.length;
}

console.log(uniqueValues(nums));


/* Question 3- You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits. */

console.log("Question 3");

let digits = [1, 2, 3, 4, 5, 6, 9]
lastIndex = digits.length - 1

if (digits[lastIndex] < 9){
  digits[lastIndex] = digits[lastIndex] + 1
  console.log(digits);
}
else{
  digits[lastIndex] = digits[lastIndex] +1
  let newArr = [];
  for (const i of `${digits[lastIndex]}`) {
    let j = parseInt(i)
    newArr.push(j)
  }
  digits.splice(lastIndex, 1)
  console.log(digits)
  for (const i of newArr) {
    digits.push(i)
  }
  console.log(digits)
}

/* Question 4: You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n. */

console.log("Question 4");

let num1 = [1,2,3]
let num2 = [2,5,6]

let sortedArray = [];

sortedArray = [...num1, ...num2]
sortedArray.sort(function(a, b){return b - a});
sortedArray.reverse();
console.log(sortedArray);

/* Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it */

console.log("Question 5");

// let numRows = 5
// let arrRows = [];
// for (let i = 1; i <= numRows; i++) {
//   let lastIndex = arrRows[i-1]
//   let lastElement = []
//   while (i > 1) {
//     lastElement.push(i)
    
//     i--
//   }
// }

// watch some videos on pascal's triangle

/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

console.log("Assignment")

function findLargestElement(numbers) {
  let isLargest;
  for (const i of numbers) {
    isLargest = true;
      for (const j of numbers) {
        if (i - j < 0) {

          isLargest = false
        }
      }
    if (isLargest) {
      return i;   
    }
    }
}
let newArr = []
console.log(findLargestElement(newArr));