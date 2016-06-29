// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(firstNum, secondNum) {
    if (firstNum > secondNum) {
        return firstNum;
    } else if (secondNum > firstNum) {
        return secondNum;
    }
}
console.assert(max(1,3)===3, 'returns three bc it is bigger than one');
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(firstNum, secondNum, thirdNum) {
    if ((firstNum > secondNum) && (firstNum > thirdNum)) {
        return firstNum;
    } else if ((secondNum > firstNum) && (secondNum > thirdNum)) {
        return secondNum;
    } else if ((thirdNum > firstNum) && (thirdNum > secondNum)) {
        return thirdNum;
    }
}
console.assert(maxOfThree(1,2,3)===3, 'returns three bc it is the biggest number');


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
        return true;
    } else {
        return false;
    }
}
console.log(isVowel('e'));
console.assert(isVowel(a)===true, 'returns true bc a is a vowel');

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase) {
    var result = phrase.split(''); //makes array of individual letters
    var newPhrase='';
    for (i = 0; i < result.length; i++) {
        if ((result[i] !== 'a') && (result[i] !== 'e') && (result[i] !== 'i') && (result[i] !== 'o') && (result[i] !== 'u') && (result[i] !== ' ')) {
            newPhrase += (result[i] + 'o' + result[i]); //<-----this works!
        } else {
            newPhrase += result[i];
        }
    }
    console.log(newPhrase);
}
translate ('crazy like a fox');
console.assert(translate('life is good')==='lolifofe isos gogoodod', 'returns lolifofe isos gogoodod');

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
  string = string.split('').reverse().join('');
  console.log(string);
}
reverse('your mom goes to college');
console.assert(reverse('life is good')==='doog si efil', 'returns doog si efil');
