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
module 19 porjonto okay