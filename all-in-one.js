/* 1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and
apples. Write a program to help Harry calculate how much money the
shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
apples is tk 700 */

/* const moneyGiven = 1000;
const costOfOrangeAndApples = 700;
const shopkeeperReturn = moneyGiven - costOfOrangeAndApples;

console.log (shopkeeperReturn); */

// ==================================================================

/* 2) Write a program to calculate the average marks of Mathematics,
Biology, Chemistry, Physics, and Bangla of a student. */

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var sum = math + biology + chemistry + physics + bangla;
var avg = sum / 5;
avg = avg.toFixed(2);
console.log ('average: ',avg);