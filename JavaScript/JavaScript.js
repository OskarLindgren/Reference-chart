// This javascript script will show the basics of javascript!

// importing modules
// we don't have modules in javascript, but we have something similar called 'libraries'
// we can import them by using the 'import' keyword
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// writing Hello World!
console.log("Hello World!"); // javascript automatically adds a newline at the end of a console.log statement
console.log(); // we can do this to create a blank line

// using variables

// var varaibleName = value; (this is accesible through out the whole code)
// let variableName = value; (this is only accesible in it's own block)
var age = 17; // this is a number, javascript doesn't need you to specify types. It figures it out on it's own
var firstName = "Oskar"; // this is a string
var lastName = 'Lindgren'; // we can also use single quotes!
var favoriteActivities = ["Coding", "Sleeping", "Drinking coffe"]; // we can make an array of strings like this
var favoriteNumbers = [1, 7, 8, 32, 64, 128, 256]; // or an array of numbers like this!
var favoriteThings = [favoriteActivities, favoriteNumbers]; // we can even make an array of arrays!
var myTuple = [15, 32]; // javascript doesn't have tuple, but we can use array instead
var myFloat = 1.2; // this is a float, it's a number with a decimal point!

// concatenating variables

console.log("My name is " + firstName + " " + lastName); // + means that we're adding or "concatenating" to the string
console.log(`My name is ${firstName} ${lastName}`); // we can also use template literals
console.log(`My name is ${firstName} ${lastName} I am ${age} years old!`); // we can even use multiple types of variables!

// user input

// first we need to create a reader
const rl = readline.createInterface({input, output});

var userName = await rl.question("What's your name?\n"); // unlike console.log(), question() will not add a new line, so we have to do it ourselves 
// we can also print out the question, then ask for input
console.log("How old are you? - ");
var userAge = await rl.question(""); // we need to pass something as out question though, so we just pass an empty string
userAge = parseInt(userAge); // we wanna make sure that userAge is a number, aka an integer!

console.log();

// if statments

if (userAge < 5) { // if userAge is less than 5
    console.log("You're younger than 5!");
} else if (userAge <= 10) { // if userAge is less than OR equal to 10
    console.log("You're still pretty young!");
} else if (userAge > 11 && userAge < 20) { // if userAge is between 11 and 20 (12,13,14,15,16,17,18,19 - NOT 11 or 20)
    console.log("You're between the age of 11 and 20");
} else if (userAge >= 20 && userAge <= 25) { // this will take 20, 21, 22, 23, 24 and 25
    console.log("You're an grown up!");
} else if (userAge !== 69) { // this is how we check if something ISN'T true
    // and this is how we do nothing!
} else { // if none of the above apply
    console.log("You're pretty old!");
}
console.log();

// loops!

// for loop
for (let i = 1; i < 10; i++) { // counting from 1 to 10 (stops when it reaches ten, meaning it won't do anything when it reaches 10)
    console.log("Loop iteration: " + i);
}
console.log();

// while loop
var timesRan = 0;
while (true) { // will continue forever
    console.log("I'm in a loop");
    timesRan += 1; // increase timesRan by one

    if (timesRan >= 5) {
        break; // breaks out of the loop
    }
}
console.log("Phew, I broke out of the loop!");
console.log();

// functions
function myFunc() { // we make the function like this
    console.log("This is a function!"); // then we tell it what to do
}

myFunc(); // then we can call it

// we can pass an argument like this
function saySomething(thing_to_say) { // we will use the variable "thing_to_say" inside the function, then javascript will forget it. We're also saying that the variable should only accept inputs of the type string
    console.log(thing_to_say);
}

saySomething("I like javascript!"); // then we can call it like this

// we can also define a "default state" like this

function anotherFunction(argument = "Nothing was passed") {
    console.log(argument);
}

anotherFunction();
anotherFunction("Something was passed!");

// a function can also "return" a value

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers(15, 32)); // let's print out the thing it returns!
console.log();

// try statement
// if something might not always work, we can use a try statement
try { // try to do this
    let temp = 1 + 1;
    console.log("I could add 1+1");
} catch (error) { // if it fails, do this instead
    console.log("I failed to add 1+1 :(");
} finally { // regardless of result, do this
    console.log("Well that's over!");
}
// this will never fail, because computers are excelent at math, we'll see later how useful it can be!

// let's jump back to the userAge problem!
// we can force the user to only enter a number like this:
while (true) {
    try {
        let userAge = parseInt(rl.question("How old are you?\n")); // it will first try this
        break; // then this
    } catch (error) { // if at any point it fails, it will stop trying and to this instead
        console.error("That's not a number!");
        break;
    }
}
console.log();

// Let's get back to lists!
// we can split a sentance into a lsit of words like this
var sentance = "I really like to write code!";
var words = sentance.split(" "); // split it at every space character
console.log(words);
console.log("Wow, list's look kinda weird, huh?");
// we can also grab just one part of a list
console.log(words[0]); // this will grab the thing at the 0th position
console.log(words[3]); // this will grab the thing at the 3rd position
console.log();

// when all is said and done, we should close our reader and let it rest
rl.close();
