/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let deskItem = "coffee";

// 2.) Change the value of this variable
deskItem = "water";

// 3.) Change the data type of this variable
deskItem = 13;

// 4.) Create another variable and the one from above to concatenate
let workSpace = "desk";
let max = 14;

console.log("There may be " + deskItem + " things on your desk, but " + ma/x + " would be too many.");

// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log(`You have ${deskItem} things taking up all the space on your ${workSpace}.`);

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let myName = 'sabrina';
console.log(myName.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
/* "Unicode is a standard character set that numbers and defines different characters from the world's different languages, writing systems, and symbols. By assigning each character a number, programmers can create character encodings to let computers store, process, and transmit any number of languages in the same file or program." - From MDN Web Docs*/
// console.log('Teddy'.charCodeAt(2));

// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(100));

// Take your first and last name and concat()
const firstName = 'Gustavo';
const lastName = 'Buenrostro';

console.log(firstName.concat(' ' + lastName));

// Create a string and make it return true using startsWith()
const queen = 'Don\'t stop me now, I\'m having such a good time, I\'m having a ball';
console.log(queen.startsWith('Don'));

// Now use any variable with endsWith() and return false
console.log(queen.endsWith('0'));

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, and was disappointed to learn that it was not made out of cheese.'
console.log(ozgur.includes('cheese'));


// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log('The index of cow is ' + joshHadALittleLambOopsCow.indexOf('cow'));

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
console.log('We use our laser beams to shoot down index number ' + vanessa.lastIndexOf('Vanessa'));

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
console.log('Yes we can, Teo. The string length is ' + noWeCantTeo.length);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta')); //Is he though??

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
console.log('Silly Josh\'s wifey is located at ' + joshIsLookingForWifey.search('wifey') + '. Which makes her wifey 2.');

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
console.log('I wanted this pizza all for myself, but I guess I can share the ' + pizzaSentence.slice(7) + '.');

// Now using the pizza sentence, return only pizza (before the comma)
console.log('But I can still keep half of the ' + pizzaSentence.slice(0,5) + '.');

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
const newBill = splitTheBill.split(" ");

console.log(newBill);

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
const zap = splitTheBill.split("");

console.log(zap);

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."

console.log(angry.toLowerCase());

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
const angry2 = "I DON\'T KNOW WHAT WE\'RE YELLING ABOUT!"

console.log(angry2.toLowerCase());

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"

console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
console.log(basicGreeting.substring(1 , 4));

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
console.log(ohReally.substring(0 , 10));

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(15 , 22));
console.log(aslDays.substring(aslDays.indexOf("aol.com")));

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const noGym = "     Who needs the gym when we have the trim method?     "
console.log(noGym.trim());

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b);
console.log(c > b);
console.log(d === d);
console.log(d !== a);
console.log(a < 15);
console.log(a + b == c);
console.log(c > b && a !== d);

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

for (let k = 0; k < 10 ; k++){
  console.log(`Ken: \"I can\'t take it anymore! My room has spun ${k + 1} time(s)!\"`);
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
for (let t = 0; t < 20 ; t++){
  console.log(`Take that, Teo. Your vision has now spun ${t + 1} time(s)!`);
}

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let t = 0;
while (t < 20){
  console.log("I\'m sorry!");
  t++;
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clotes',
  thing3: 'gaming console'
}

for (property in whateverQueenBeySaid){
  console.log(`${property}`);
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']

for (const index in lana){
  console.log(`${index}`);
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

for (const element of tia){
  console.log(element);
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
const string1 = 'PS';

perscholas.forEach(student => console.log(string1 + ' ' + student));

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
  //Adds one or more elements to the end of an array and returns the new length of the array.

// pop()
  //Removes the last element from an array and returns that element.

// unshift()
  //Adds one or more elements to the beginning of an array and returns the new length of the array.

// shift()
  //Removes the first element from an array and returns that removed element.This changes the length of the array.

// concat()
  //Used to merge two or more arrays. Does not change the existing arrays, but returns a new array.

// splice()
  //Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// slice()
  // Returns a shallow copy of a portion of an array into a new array object selected from start to end, where start and end represent the index of the items in that array

// sort()
  //Sorts the elements of an array in place and returns the sorted array. 

// includes()
  //Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// indexOf()
  //Returns the first index at which a given element can be found in the array, or -1 if not present.

// length
  //Sets or returns the number of elements in an array.

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use. 
// Join all the elements of the array into a string separated by a space.
console.log(fruits.join(' '));

// Remove orange
fruits.pop();
console.log(fruits);

// Add strawberry, kiwi, and grapes at the end
fruits.push('strawberry' , 'kiwi' , 'grapes');
console.log(fruits);

// Remove apple
fruits.shift();
console.log(fruits);

// Add mango at the beginning of the array
fruits.unshift('mango');
console.log(fruits);

// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, 'lemon' , 'grapefruit');
console.log(fruits);

// Remove banana and strawberry
fruits.splice(3, 2);
console.log(fruits);

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ['passionfruit' , 'guava' , 'papaya'];
const fruits2 = fruits.concat(exoticFruits);

console.log(fruits2);

// Print the last two exotic fruits without altering the newly concatenated array.
console.log(fruits2.slice(-2));

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]

monalissaIsMessy.sort();
console.log(monalissaIsMessy);

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
const nivek = mirrorMirrorOnTheWall.reverse();

console.log(nivek);

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
const arrayRafael = RafaelNoBadWords.split(' ');
const noBad = arrayRafael.filter(word => word !== 'badword');

console.log(noBad.join(' '));

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const init = 0;

const sum = numbersToAddUp.reduce((acc , current) => acc + current, init)

console.log(sum);

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const newNumbers = [...numbersToAddUp];

console.log(newNumbers);

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const fragment1 = ['I think' , 'that I']
const fragment2 = ['understand' , 'spread syntax']

const fullSentence = [...fragment1 ,  ...fragment2];
console.log(fullSentence);

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
const fullSentence2 = [...fullSentence, 100];
console.log(fullSentence2);

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
const fullSentence3 = ['I came from the future to say that I do' , ...fullSentence2];
console.log(fullSentence3);

// ===== ACCESS =====

// Donut Shopping
const donutShop =
[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
console.log('Here\'s your ' + donutShop[1][0][1] + ' donut, Anthony. That\'ll be $12.99.');

// Tosi wants ihatethis. :) Print!
console.log(donutShop[2][0][0][1][0] + ' is actually our most popular flavor, surprisingly.');

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'

// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.

// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

const teo = 'person';
const gender = 'male';
const isHungry = 'idk';

if(teo === 'person') {
  console.log('Teo is a person!');
  
  if (gender === 'male') {
    console.log('You got it right!');

    if (isHungry === 'hungry') {
      console.log('Let\'s buy some tacos!');

    } else if (isHungry === 'not hungry') {
      console.log('He doesn\'t need to eat.');

    } else {
      console.log('If Teo is not hungry, am I hungry?');
    }

  } else {
    console.log('Wrong. Teo is going to remove you from the class.');
  }

} else {
  console.log("Teo is not a person!");
}
// Create a if/else ternary to check if Gustavo is the coolest (he is). If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
let isCoolest = Boolean(Math.round(Math.random()));
let result = isCoolest ? 'You got that right!' : 'James wants to argue. He says he\'s the best!';

console.log(result);



// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting () {
  console.log('Hello, ma\'amsir!');
}
sayGreeting();

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
function customString (x) {
  console.log('This is my ' + x);
}
customString('nightmare');

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add (a, b, c) {
  console.log(a + ' + ' + b + ' + ' + c + ' = ', a + b + c);
}

let x = Math.round(Math.random() * 1000);
let y = Math.round(Math.random() * 1000);
let z = Math.round(Math.random() * 1000);

add(x, y, z);

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts

function fightClub (name) {
  if (name === 'Teo') {
    console.log('1st rule: You do not talk about fight club.');

  } else if (name === 'Manara') {
    console.log('2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.');

  } else if (name === 'Liv') {
    console.log ('3rd rule: If someone yells \"Stop!\", goes limp, taps out, the fight is over.');

  } else if (name === 'Devin') {
    console.log('4th rule: Only two guys to a fight.');

  } else {
    console.log('No shirts.');

  }
}

const namesArr = ['Teo', 'Manara' , 'Liv' , 'Devin' , 'some other guy'];
let randomName = namesArr[Math.round(Math.random() * namesArr.length)];

fightClub(randomName);

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello() {
  const hi = 'Hello.';
  console.log(hi);

  return () => `Goodbye`;
}

const iSaidHello = hello();
console.log(iSaidHello());

// Create a function expression with your first name as the variable and then print your first and last name
function gustavo () {
  console.log('Gustavo Buenrostro');
}

gustavo();

// Create an arrow function that accepts a number and have it return that number doubled
const double = (x) => x * 2;
const random = Math.round(Math.random() * 100);

console.log(`Your number ${random}, doubled, is equal to `, double(random));

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
const human = {
  name: 'Gustavo', 
  age: 29, 
  location: 'Boston'
}
// Access the name using dot notation
console.log(human.name);

// Access the age using square brackets
console.log(human['age']);

// Use object destructuring to access location
const {name, age, location} = human;
console.log(location);

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0].ability);

// Print cut
console.log(bulbasaur.moves[2]);

// Print Bulbahhhh!!!!!
bulbasaur.sound();

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur.order = [1];

// Print an array that contains every single properties in bulbasaur
const propertyArr = [];

for (property in bulbasaur) {
  propertyArr.push(property);
}

console.log(propertyArr);

// Print every single properties one by one in the console
for (property in bulbasaur) {
  console.log(property);
}

// Print an array that contains every single values in bulbasaur
const valuesArr = [];

for (values in bulbasaur){
  valuesArr.push(bulbasaur[values]);
}

console.log(valuesArr);