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

/* var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var sum = math + biology + chemistry + physics + bangla;
var avg = sum / 5;
avg = avg.toFixed(2);
console.log ('average: ',avg); */

// ==================================================================

/* 3) John’s teacher gave him two variables. Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line. Help
John write the program. */

/* var string1 = "I am going to be";
var string2 = "an awesome web developer";
console.log (string1 + ' ' + string2); */

// ==================================================================

/* 4) Sarah’s mother is teaching her mathematics. She gave Sarah the number
119 and asked her what the remainder would be if she divided the number
by 5. Help Sarah write the program. */

/* var numberGiven = 119;
var remainder = numberGiven % 5;
 console.log (remainder); */

 // ==================================================================

/*  5) নিচের ভেরিয়েবল ডিক্লিয়ারেশনে কোনটার মধ্যে কি সমস্যা আছে?
Var price = 33; //var er v capital hoye gese
var name - Shabana // - Shabana undefined
var boxName = ‘Cocola; // ending quotation nai
var 88_price = 34; //starts with number
var enum = -1; //enum is keyword
var _$box’78 = ‘Monika’; // ’ not allowed 
var home-address = “kochu khet”; //hyphane not allowed */ 

// ==================================================================

/* 6) You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

/* var fruits = ['Apple', 'Banana', 'Orange'];

// a
findIndex = fruits.indexOf('Banana');
console.log ('The Index of Banana is: ' + findIndex);

fruits [1] = 'Mango';
console.log (fruits);

// b
var removeItem = fruits.pop();
console.log (fruits);

fruits.push ('Watermelon');
console.log (fruits); */

// ==================================================================

/* 7) You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using
if-else. */

/* 
var scoresBelong = ['I','Tom', 'Jane', 'Peter', 'John', 'Niloy'];
var scores = [85, 66, 95, 95, 56, 40];

var loopVariable = 0;

while (loopVariable < scores.length) {
    if (scores[loopVariable] > 80) {
        console.log(scoresBelong [loopVariable], 'got A Grade');
    }
    else if (scores[loopVariable] > 60) {
        console.log(scoresBelong [loopVariable], 'got B Grade');
    }
    else if (scores[loopVariable] > 50) {
        console.log(scoresBelong [loopVariable], 'got C Grade');
    }
    else if (scores[loopVariable] > 40) {
        console.log(scoresBelong [loopVariable], 'got D Grade');
    }
    else {
        console.log(scoresBelong [loopVariable], 'got F Grade');
    }
    loopVariable++;
}  */

// ==================================================================

/* 
8) You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else. */
/* 
var num1 = 13;
var num2 = 79;
var num3 = 405;

if (num1 > num2 && num1 > num3) {
    console.log ('num1 =',num1,'is the largest number');
}
else if (num2 > num1 && num2 > num3) {
    console.log ('num2 =',num2,'is the largest number');
}
else {
    console.log ('num3 =',num3,'is the largest number');
}
 */

// ==================================================================

/* 
9) You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.

        Isosceles => two sides are equal */
/* 
var sideA = 8;
var sideB = 4;
var sideC = 4;

if  (sideA == sideB || sideA == sideC || sideB == sideC) {
    console.log ('This is an isosceles Traiangle');
}

else {
    console.log ('Not Isosceles Triangle');
} */

// ==================================================================


/* ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+. */