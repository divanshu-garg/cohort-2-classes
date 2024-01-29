// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

let kilometer = 1;

function ConverttoMeter(x){
return x * 1000;
}

function ConverttoCentimeter(x){
    return x * 100000;
    }

console.log(ConverttoMeter(kilometer) + " meters");
console.log(ConverttoCentimeter(kilometer) + " centimeters");

// Question-2:    WAP to input radius of a circle and log the area of circle.

let radius = 2;

function ConverttoArea(x){
    return 3.14 * x * x;
}

console.log("Area: " + ConverttoArea(radius));

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

let numberone = 2;
let numbertwo = 4;

let addition = numberone + numbertwo;
let subtraction = numberone - numbertwo;
let divided = numberone / numbertwo;
let multiplied = numberone * numbertwo;

console.log(addition);
console.log(subtraction);
console.log(divided);
console.log(multiplied);

// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

let math = 50;
let english = 70;

let totalmarks = math + english;
let percentage = totalmarks / 200 * 100;

console.log("Total Marks: " + totalmarks);
console.log("Percentage: " + percentage);

// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

let length = 12;
let breadth = 14;

let area = length * breadth;
let perimeter = (length + breadth)*2;

console.log("Area: " + area);
console.log("Perimeter: " + perimeter);

// Question-6:    WAP to input n numbers and log the average of those number.

let n1 = 3;
let n2 = 5;
let n3 = 7;

let average = (n1 + n2 + n3)/3;

console.log("Average: " + average);

// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

let distance = 100;

let meter = distance * 1000;
let centimeter = distance * 100000;
let inches = distance *  39370.0787;
let feet = inches * 12;

console.log("Meters: " + meter);
console.log("Centimeter: " + centimeter);
console.log("Inches: " + inches);
console.log("Feet: " + feet);

document.write("Meters: " + meter);
document.write("Centimeter: " + centimeter);
document.write("Inches: " + inches);
document.write("Feet: " + feet);

// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

let Fahrenheit = 64;
let centigrade = 5/9 * (Fahrenheit -32);
console.log(centigrade); 

// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

let price = 500;
let quantity = 3;
let percent_discount = 10;

let amount = price * quantity;
let discount_amount = amount * percent_discount / 100;
let final_amount = amount - discount_amount;

console.log("Amount: " + amount);
console.log("Discount given: " + discount_amount);
console.log("Discounted Price: " + final_amount);

// Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

let principal_amount = 1000;
let interest_rate = 10;
let num_years = 7;

let total_interest = principal_amount * interest_rate /100 * num_years;

console.log(total_interest);


