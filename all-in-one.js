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


/*
10) ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+. */
/* 
const gradeDetermination = {
    alia: 95,
    dalia: 66,
    salia: 80,
    malia: 59,
    lilia: 47,
    jalaiya: 77
}

const names = Object.keys(gradeDetermination); // names are taken
const grades = Object.values(gradeDetermination); // names are taken

// console.log(names, grades);

for (let i = 0; i < names.length; i++) {
    if (grades[i] >= 90) {
        console.log(names[i], 'Got A+');
    }
    else if (grades[i] >= 80) {
        console.log(names[i], 'Got A');
    }
    else if (grades[i] >= 70) {
        console.log(names[i], 'Got B');
    }
    else if (grades[i] >= 60) {
        console.log(names[i], 'Got C');
    }
    else if (grades[i] >= 50) {
        console.log(names[i], 'Got D');
    }
    else {
        console.log (names[i], 'Failed'); 
    }
} */

// ==================================================================
/* 
11) তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।  */

/* const signal = 'red'; // signal = green/red/yellow

switch (signal){
    case 'red':
        console.log ('Danger');
        break;
    
    case 'yellow':
        console.log ('You should Stop');
        break;
    
    case 'green':
        console.log ('You Can cross the road');
        break;
    default:
        console.log('i am color blind!!!')
    
} */

// ==================================================================

/* 
12) প্রতিদিন তোমার কাজ কি? 

১) রাত ৮ টা বাজে মডিউল আনলক করো  

২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

৩) ভিডিও দেখতে দেখতে নোটস নাও 

৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। 

 */
/* 
var dailyTask = ['Module unlock at 8pm', 'Watch and Practice from video', 'Take Notes', 'Practice after watching Module', 'Not Understand', 'ami eibar bujhc vai'];

for (var i = 0; i < dailyTask.length; i++) {
    var showMyDailyTask = dailyTask [i];
    if (dailyTask[i] == 'Not Understand') {
        console.log('Task','[', i,'], If', dailyTask[i], ',', 'Lets join Support Session');
        continue;
    }
    console.log ('Task','[', i,']', showMyDailyTask);
} */


// ==================================================================

/* 13) আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো। */
/* var dailyTask = ['Module unlock at 8pm', 'Watch and Practice from video', 'Take Notes', 'Practice after watching Module', 'Not Understand', ' abar porte bomu'];

var i = 0;
while (i < dailyTask.length) {
    var showMyDailyTask = dailyTask[i];
    if (dailyTask[i] == 'Not Understand') {
        console.log('Task', '[', i, '], If', dailyTask[i], ',', 'Lets join Support Session');
        i++;
        continue;
    }
    console.log('Task', '[', i, ']', showMyDailyTask);
    i++;

} */

// ==================================================================

/* 14) উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও */

/* var dailyTask = ['Module unlock at 8pm', 'Watch and Practice from video', 'Take Notes', 'Practice after watching Module', 'Not Understand', ' abar porte bomu'];

var i = dailyTask.length-1;
while (i >= 0) {
    var showMyDailyTask = dailyTask[i];
    if (dailyTask[i] == 'Not Understand') {
        console.log('Task', '[', i, '], If', dailyTask[i], ',', 'Lets join Support Session');
        i--;
        continue;
    }
    console.log('Task', '[', i, ']', showMyDailyTask);
    i--;

} */

// ==================================================================

/* 15) উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও  */
/* 
var dailyTask = ['Module unlock at 8pm', 'Watch and Practice from video', 'Take Notes', 'Practice after watching Module', 'Not Understand', 'ami eibar bujhc vai'];

for (var i = dailyTask.length-1 ; i >= 0 ; i--) {
    var showMyDailyTask = dailyTask [i];
    if (dailyTask[i] == 'Not Understand') {
        console.log('Task','[', i,'], If', dailyTask[i], ',', 'Lets join Support Session');
        continue;
    }
    console.log ('Task','[', i,']', showMyDailyTask);
} */

// ==================================================================

/* 16) তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।  */
/* 
var myMoney = 50000;

if (myMoney > 80000) {
    console.log ("I will buy a Macbook");
}
else if (myMoney > 60000) {
    console.log ("I will buy a Gaming laptop");
}
else if (myMoney > 40000) {
    console.log ("I will buy a Lenova Yoga");
}
else if (myMoney > 20000) {
    console.log ("I will buy a Old laptop");
}
else {
    console.log ('Puran Mobile diyai kaj calamu')
} */

// ==================================================================


/* 17) আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।  */

/* 
var loopVariable = 1;
while (loopVariable <40) {
    console.log (loopVariable, 'Ajke amar mon valo nei');
    loopVariable++;
}

for (i = 1; i < 40; i++) {
    console.log (i, 'আজকে আমার মন ভালো নেই');
}*/

// ==================================================================

/* 18) while লুপ কিভাবে কাজ করে 
Ans: আগে লুপ ভেরিয়াবল initialize করে তারপর consition দিয়ে, এরপর ব্লক অফ কোড, দেন increment/decrement করতে হবে।
*/

// ==================================================================

/* 19) একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও  */

/* var number = 58;
while (number <=98) {
    console.log (number);
    number++;
} */

// ==================================================================

/* 20) একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  */
/* for (var i = 412; i < 456; i+=2) {
    console.log ('Even numbers are:', i);
} */

// ==================================================================

/* 21) একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও */
/* 
var number = 581;
while (number <= 623) {
    console.log (number);
    number += 2;
}  */

// ==================================================================

/* 22) তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।  */

/* var learned = ['html', 'css', 'html5', 'css3', 'Bootstrap', 'Tailwind'];

var loopVariable = 0;

while (loopVariable < learned.length) {
    console.log (learned[loopVariable]);
    loopVariable++;
}  */

// ==================================================================
/* 
23) তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও  */

/* var usedPhone = ['Alcatel', 'Nokia', 'Samsung', 'Motorolla', 'walton', 'Xaomi', 'One Plus'];

var loopVariable = 0;

while (loopVariable < usedPhone.length) {
    console.log (usedPhone[loopVariable]);
    loopVariable++;
} */

// ==================================================================

/* 24) একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও  */

/* for (var i=30; i<=86;i++) {
    console.log(i);
    if  (i >= 44) {
        break;
    }
} */

// ==================================================================

/* 
25) তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।  */

/* var bookPrice = [230, 440, 120, 300, 50, 330, 750];

for (var i = 0; i<bookPrice.length; i++) {
    if (bookPrice[i] > 200) {
        continue;
    }
    console.log('Price of my book',i,'=', bookPrice[i]);
} */

// ==================================================================

/* 
26) Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output. */

/* function bar () {
    console.log ('bar');
}

function foo () {
    console.log ('foo');
    bar ();
}

//Calling bar() in foo() doesn't make any output in console.

// if we call foo () , it will first call foo() function console the foo() content and then call bar() , and console the content inside bar()
foo(); */

// ==================================================================

/* 
27) Write a function called make_avg() which will take an three integers and return the
average of those values. */

/* function make_avg (num1, num2, num3) {
    const average = (num1+num2+num3)/3;
    return average;
}
const average = make_avg(5,10,2);
console.log (average); */

// ==================================================================

/* 28)  Write a function called make_avg() which will take an array of
integers and the size of that array and return the average of those values. */

/* function make_avg (numbers, length) {
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum +=numbers[i];
    }
    let average = sum/length;
    return average;
}

let array = [10,10,30,30];

let result = make_avg (array, array.length); 
console.log(result); */

// ==================================================================
/* 
 29) Write a function called odd_even() which takes an integer value and tells
whether this value is even or odd. You need to do it in 4 ways:
    ● Has return + Has parameter
    ● No return + Has parameter */

// Has Return + Has Parameter   
/*  
function odd_even (integer) {

    if (integer % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isPrime = odd_even (3);

if (isPrime) {
    console.log ('even');
}
else {
    console.log ('odd');
}
 */
// No return + Has parameter

/* function odd_even (integer) {

    if (integer % 2 === 0) {
        console.log ('even');
    }
    else {
        console.log ('odd');
    }
}
odd_even (3); */

// ==================================================================

/* 30) You are in a hurry to go to your school on time. But when you are crossing
the road, the traffic signal is red coloured. In this situation, if you try to cross the
road, you may be in danger.If you notice a yellow coloured traffic signal, you
should stop. If you notice a green coloured traffic signal, you should cross the
road. So write a JS code, where there is a variable called signal. Its value can
be green, yellow or red & we will get different activities as output depending on
the variable. So, hurry up. */

// Ans: Same As Problem 11

// ==================================================================

/* 31) একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */

/* function multiplicationTable (number) {
    console.log ('Below is a code for the multiplication table = 13')
    for (var i = 1; i <= 10; i++) {
        result = number*i;
        console.log(number, 'x', i, '=', result);
    }
}

multiplicationTable (13); */

// ==================================================================
/* 
32) একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে। */

/* function anyCase (name) {
    const lowerCase = name.toLowerCase();
    return lowerCase;
}

myString = 'ZAKIR sHimA KhatuN kE valoBashE, OneK bEsHi valoBASHE';

const lowerCaseValue = anyCase (myString);
console.log (lowerCaseValue); */

// ==================================================================

/* 33) fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।  */

/* function fullName (firstName, lastName) {
    const FullName = firstName + ' ' + lastName;
    return FullName;
}

const myFullName = fullName ('zakir', 'hossain');
console.log(myFullName); */

// ==================================================================

/* 34) একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। */

/* function square (number) {
    console.log (number*number);
}
square (9); */

// ==================================================================

/* 35)  pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা, এবং pepperoni প্রিন্ট করবা। */

/* const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}

console.log (pizza.toppings[2]); */

// ==================================================================

/* 
36) Write a function that will take hour as the input parameter and will convert it
into minutes and will return the result in minutes.
 */
/* 
function hourToMinute (hour) {
    let minutes = hour*60;
    return minutes;
}

let minute = hourToMinute (2);
console.log(minute); */

// ==================================================================

/*37) Write a function findLeapYear() that will take the array [2023, 2024, 2025,
2028, 2030] as the input parameter and will check if each year is a leap year. If
a year is a leap year insert that year in a new array, return the new array and
print the result. */

/* function findLeapYear (years) {
    let leapYear = [];
    for (let i = 0; i < years.length; i++) {
        if ((years[i] % 4 === 0) && ((years[i] % 100 !== 0) || (years[i] % 400 === 0))) {
            leapYear.push(years[i]);
        }
    }
    return leapYear;
    
}

let year = [2020, 2023,2024,2025,2028,2030];
let leapYear = findLeapYear(year);
console.log(leapYear);  */

// ==================================================================
/* 
38) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
as the input parameter and will return the sum of the odd numbers. */
/* 
function findOddSum(randomNumbres) {
    console.log ('My given Array:', randomNumbres)
    let sumOfOddNumber = 0;
    let oddNumberfromArray = [];
    for (let i = 0; i < randomNumbres.length; i++) {
        let remainder = randomNumbres[i] % 2;
        if (remainder === 1) {
            oddNumberfromArray.push(randomNumbres[i]); //odd numbre empty array te push kora hocche
            sumOfOddNumber += randomNumbres[i]; // sum hocche
        }
    }
    console.log ('Array of Odd Numbers: ', oddNumberfromArray);
    return sumOfOddNumber;
}

var numbers = [2, 3, 5, 9, 8, 3, 1];
var oddNumbers = findOddSum(numbers);
console.log('Sum of odd Numbers:', oddNumbers); */

// ==================================================================

/* 39)  leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে। */

/* function checkLeapYear (year) {
    if ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) {
        return true;
    }
    else {
        return false;
    }

}

let decision = checkLeapYear(2028);
console.log(decision); */

// ==================================================================
/* 
40) তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে। */

/* function checkAge (age) {
    if (age % 2 === 0) {
        console.log('My age is Even');
        return true;
    }
    else {
        console.log ('My age is Odd');
        return false;
    }
}

let isEven = checkAge (28);
console.log (isEven); */

// ==================================================================
/* 
41)  এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 
 */

/* Solution: See solution of 36 No. Problem */

// ==================================================================

/* 42) মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে। */
/* 
function hourToSecond (hour) {
    let second = hour*60*60;
    return second;
}

let second = hourToSecond (4);
console.log(second); */

// ==================================================================

/* 43) তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে  */

/* function celciusToFahrenheit (celcius) {
    const fahrenheit = (celcius * 1.8) + 32;
    return fahrenheit;
}

const fahrenheit = celciusToFahrenheit (30);
console.log (fahrenheit);
*/

// ==================================================================

/* 43) একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।  */
/* 
function fahrenheitToCelcius (fahrenheit) {
    const celcius = (fahrenheit - 32) * (5/9);
    return celcius;
}

const celcius = fahrenheitToCelcius (0);
console.log (celcius);
 */

// ==================================================================

/* 44) একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। */

/* let numbers = [2,5,6,7,3,7,8,0,4,457,1,-2,45,6,4,6,47,7,85,4,658757,8,6,5,58-23423,4234,-42];
console.log (numbers.length);
let smallest = numbers[0];
// console.log (smallest);
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log(smallest);
 */

// ==================================================================

/* 45) একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।  */


/* function arrayAvg (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum +=numbers[i];
    }
    let average = sum/numbers.length;
    return average;
}

let array = [10,10,30,10];

let result = arrayAvg (array); 
console.log(result);
 */

// ==================================================================

/* 46) একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। */
/* 
function areaOfRectangular (width , height) {
    const area = width * height;
    return area;
}
const area = areaOfRectangular (2,4);
console.log (area);
 */

// ==================================================================

/* 47) (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */

/* array er 1st elemet er sathe next protita element check korte hobe, 1st element j elemet theke boro hobe sei element er sathe first element k swap korte hobe. ei jonno nested loop lagbe, prothom loop a ekta element nibo, then porer loop a next element theke check kora suru korbo. jokhn next kono element 1st element theke choto hobe tokhn swap kore dite hobe. */

/* const numbers = [1, 4, 5, 1, 5, 8, 86, 4, -5, 7, 345, 235, 2, 46, 7,223,300];
let temp = 0;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            //swaping
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
// console.log(numbers.reverse());
console.log('Reverse Sorted Array: ', numbers);
console.log('Largest number: ', numbers[0]);
console.log('Second Largest number: ', numbers[1]); */

// ==================================================================

/*
48) একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  */

/* const sideA = 3;
const sideB = 4;
const sideC = 6;

// console.log(Math.sqrt(4));

function areaOfTriangle (sideA, sideB, sideC) {
    const s = (sideA+sideB+sideC)/2;
    const area = Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC));
    const decimal2point = parseInt (area.toFixed(3)) ;
    console.log (decimal2point);
    console.log (typeof decimal2point);
}

areaOfTriangle (sideA, sideB, sideC);

// ==================================================================


/* 49) কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। */
/* 
function isPrime (number) {
    console.log ('You entered: ', number);
    if (number === 1) {
        return false;
    }
    else if (number > 1) {
        const factors = [];
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                factors.push(i);
            }
        }
        console.log('Factors of this number are: ', factors);
        const length = factors.length;
        // console.log(length);
        if (length === 2) {
            return true;
        }
        else {
    
            return false;
        }
    }
    // check for 0 and negative number
    else {
        return false;
    }
}

const number = -1;
const result = isPrime(number);

if (result) {
 console.log ('This Number is Prime Number');
}

else {
 console.log ('This is NOT Prime Number');
}
 */

// ==================================================================

/* 50) সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */

/* function feetToInch (feet) {
    const inch = feet*12;
    return inch;
}
const inch = feetToInch (2);
console.log(inch); */

// ==================================================================

/* 51) একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।  */

/* function centimeterToMeter (centimeter) {
    const meter = centimeter * (1/100);
    return meter;
}
const meter = centimeterToMeter (1000);
console.log (meter); */

// ==================================================================

/* 52) আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
এইবার ভালো করে খেয়াল করো। 

-> প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
-> সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
-> তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে।  */

/* function paperRequirements (copyOf1stBook, copyOf2ndBook, copyOf3rdBook) {
    const pageRequiredFor1stBook = 100;
    const pageRequiredFor2ndBook = 200;
    const pageRequiredFor3rdBook = 300;

    const totalPageFor1stBook = copyOf1stBook * pageRequiredFor1stBook;
    const totalPageFor2ndBook = copyOf2ndBook * pageRequiredFor2ndBook;
    const totalPageFor3rdBook = copyOf3rdBook * pageRequiredFor3rdBook;

    const totalPageRequired = totalPageFor1stBook + totalPageFor2ndBook + totalPageFor3rdBook;

    return totalPageRequired;

}

const totalCopies = paperRequirements (1,1,1);
console.log (totalCopies); */

// ==================================================================

/* 
53) একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

/* function bestFriends (arrayOfNames) {
        let largestName = arrayOfNames[0];
        let largestNameLength = largestName.length;

    for (let i = 0; i < arrayOfNames.length; i++) {
        const name = arrayOfNames[i];
        const nameLength = name.length;

        if (largestNameLength < nameLength) {
            largestNameLength = nameLength;
            largestName = name;
        }
    }
    return largestName;
    
}

const frindsName = ['Monoara Begum', 'Zafran Jahangir Niloy','ami sobar theke boro hote cai, tai amar nam ta show koro', 'Sima Khatun','nay', 'A k Zahangir Alam Ripon, sima khatun, zafran jahangir, monoara begum', 'Zakir HossainZakir HossainZakir HossainZakir HossainZakir HossainZakir HossainZakir HossainZakir HossainZakir HossainZakir HossainZakir HossainZakir HossainZakir HossainZakir Hossain'];

const bestFriend = bestFriends (frindsName);
console.log (bestFriend); */

// ==================================================================

/* 54 ) String comparison using toLowerCase toUpperCase */
/* 
const userName = 'ZakiR Hossain';
const userInput = 'zakir HOSSAIN';

function stringComparison ( userName, userInput) {
    if (userName.toLowerCase() === userInput.toLowerCase()) {
        console.log ('Valid User');
    }
    else {
        console.log ('Invalid User');
    }
}

stringComparison (userName, userInput); */

// ==================================================================

/* 55) Apply Search includes, indexOf, startswith(see documentation), endswith(see documentation) */
/* 
const jikr = 'SubhanAllah Alhamdulillah La Ilaha Illallahu Allahu Akbar';
const jikrLowerCase = jikr.toLocaleLowerCase ();
// console.log (jikrLowerCase);

// Searching way-1: using includes() method
if (jikrLowerCase.includes('alhamdulillahi')) {
    console.log ('Found Alhamdulillah');
}
else {
    console.log ('Not Found')
}

//Searching way-2: using indexOf() method
if (jikrLowerCase.indexOf('alhamdulillahi') !== -1) {
    console.log ('Found Alhamdulillah');
}
else {
    console.log ('Not Found')
}

 */
// ==================================================================

/* 56) How to split, slice, substr, substring, concat, join */
/* 
const jikr = 'SubhanAllah, Alhamdulillah, La Ilaha Illallahu, Allahu Akbar';
const bestJikr = ' -Best jikr'
const characterSplit = jikr.split('');
const wordSplit = jikr.split(',');
const slice = jikr.slice (0, 20);
const substring = jikr.substring (0, 20);
const concatanation = jikr.concat(bestJikr);
const text = ['zakir hossain', 'zafran jahangir alam', 'monoara begum'];
const joint = text.join (', ');
// console.log (slice);
// console.log (substring);
// console.log (concatanation);
// console.log (joint);
 */

// ==================================================================

/* 57) Reverse a string and Reverse words in a sentence */

/* const text = 'Complete Web Development Course With Jhankar Mahbub';
const words = text.split(' ');
// console.log(text.length);

//Reverse a string
let reverse = '';
for (let i = text.length - 1; i >= 0 ; i--) {
    console.log (text[i]);
    reverse += text[i];
}
console.log (reverse);

//Reverse a words
const newSentece = [];
for (let i = words.length - 1; i >= 0 ; i--) {
    console.log (words[i]);
    newSentece.push(words[i]);
}
console.log (newSentece);
console.log (newSentece.join (' ')); */

// ==================================================================

/* 58) Create a Fibonacci Series using a for loop */
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

/* const fiboSeries = [0, 1];

for (let i = 2; i <= 12; i++) {

    fiboSeries[i] = fiboSeries[i-1] + fiboSeries [i-2];
}
console.log (fiboSeries); */

/* 
num0 = 0
num1 = 1

num2 = num0 + num1
num3 = num1 + num2
num4 = num2 + num3
num5 = num3 + num4

num[i] = num[i-1] + num [i-2]

*/

/* let givenNum1 = 0;
let givenNum2 = 1;

for (let i = 0; i <= 10; i++) {
    console.log(givenNum1);
    let thirdNumber = givenNum1 + givenNum2;
    givenNum1 = givenNum2;
    givenNum2 = thirdNumber;
} */

// ==================================================================


/* 59) Remove duplicate items from an array */
/* 
const names = ['abul', 'kabul', 'dabul', 'abul', 'tania', 'fatema', 'sima', 'lima', 'ar nam nai', 'abdullah', 'sima', 'zakir', 'abul', 'kabul', 'karim', 'lima', 'dabul'];

const uniqueName = [];
for (let i = 0; i < names.length; i++) {
    console.log (names);
    if (uniqueName.includes(names[i]) === false) { 
        uniqueName.push(names[i]);
    }
}
console.log(uniqueName);

 */

// ==================================================================

/* 60) Write foo, bar, foobar if divisible by 3 or 5 or both */
/* 
for (let i = 0; i <= 50; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log ('foo-bar');
    }
    else if (i % 3 === 0) {
        console.log ('foo');
    }
    
    else if (i % 5 === 0){
        console.log ('bar');
    }
    
    else {
        console.log(i);
    }
}
 */

// ==================================================================

/* 61) Find the cheapest phone from an array of phone objects */
/* 
 const phones = [
    {name: 'motorolla', price: 12000},
    {name: 'Nokia', price: 10000},
    {name: 'OnePLus', price: 52000},
    {name: 'HTC', price: 100000},
    {name: 'iPhone', price: 92000},
    {name: 'walton', price: 2000},
    {name: 'vivo', price: 1000},
 ]
//  let cheapestDetails = phones[0];
 let cheapest = phones[0];
 for (let i = 0; i < phones.length; i++) {
    if (phones[i].price < cheapest.price){
        cheapest = phones[i];
        // let cheapestDetails = phones[i];
    }
 }
console.log (cheapest);

 */

/* 62) Calculate the total cost of the products in a shopping cart */
/* 
const carts = [
    {name: 'chair', price: 6300, quantity: 5},
    {name: 'table', price: 9999, quantity: 6},
    {name: 'Bed', price: 29029, quantity: 12},
    {name: 'Net', price: 249, quantity: 17},
    {name: 'Pellow', price: 777, quantity: 37},
    {name: 'Nokshi Katha', price: 4444, quantity: 14},
    {name: 'Kushon', price: 660, quantity: 18},
    {name: 'porda', price: 330, quantity: 18},
    {name: 'ghori', price: 555, quantity: 6},
    {name: 'bag', price: 4446, quantity: 4}
 ]
let totalPrice = 0;
for (let i = 0; i < carts.length; i++) {
    totalPrice += carts[i].price * carts[i].quantity ;
}
console.log (totalPrice);
 */


/* 63) Multi-layer discount price calculation 
1. if ticket price less than 100, price--->100

2. if ticket price more than 100 but less 200 ,
1st 100 price--->100tk
rest price --->90tk

3. if ticket price more than 200,
1st 100 price--->100tk
101-200 ---> 90tk
200+ ---> 70tk
*/
/* function totalTicketPrice(amountOfTickets) {
    if (amountOfTickets < 100) {
        const ticketPrice = amountOfTickets * 100;
        return ticketPrice;
    }
    else if (amountOfTickets > 100 && amountOfTickets < 200) {

        const restTicketPrice = (amountOfTickets - 100) * 90;
        const first100price = (amountOfTickets - (amountOfTickets - 100)) * 100;
        const totalPrice = first100price + restTicketPrice;
        return totalPrice;
    }

    else {
        const remainig3rd = amountOfTickets-200;
        const remainig3rdPrice = remainig3rd * 70;
        const remainig2nd = (amountOfTickets - remainig3rd) - 100;
        const remainig2ndPrice = remainig2nd * 90;
        const remainig1st = remainig2nd;
        const remainig1stPrice = remainig1st*100;

        const total = remainig3rdPrice + remainig2ndPrice + remainig1stPrice;
        return total;
    }
}

const totalPriceAfterDiscount = totalTicketPrice(350);
console.log(totalPriceAfterDiscount);

 */