// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
function sum (firstNum, secondNum){
  return (Number(firstNum) + Number(secondNum));
}
console.assert((sum(1,2)===3), 'one plus two equals three');


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg (firstNum, secondNum, thirdNum){
  return ((Number(firstNum)+Number(secondNum)+Number(thirdNum))/3);
}
avg(1,2,3);
console.assert(avg(1,2,3)===2, 'average of 1,2,3 is 2');



// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
function getLength (string){
  return (string.length);
}
getLength('totes');
console.assert(getLength('red')===3, 'red has three letters in it');



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function greaterThan (firstNum, secondNum){
  if (secondNum > firstNum){
    return ('true');
  } else {
    return ('false');
  }
}
greaterThan (1,2);
console.assert(greaterThan (1,2)==='true', 'second number is greater than first');


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet (name){
  return ("Hello, " + name + '!');
}
greet ('Louie');
console.assert(greet('Louie')==='Hello, Louie!', 'Louie is my name');


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madlib (noun, adverb, verb, adjective, noun2){
    return ("The " + noun +' ' + adverb + ' ' + verb + ' ' + 'in the ' + adjective + ' ' + noun2 +'.');
}
madlib('bear', 'quickly', 'runs', 'green', 'house');
console.assert(madlib('bear', 'quickly', 'runs', 'green', 'house')==="The bear quickly runs in the green house.", 'bears will be bears');
