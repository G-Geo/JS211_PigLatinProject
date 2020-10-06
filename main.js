'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// This is the statement
var currentWord = "this sentence sounds decent in pig latin"

// Function Start
const pigLatin = (word) =>{

const vowel = ["a","e","i","o","u"]
word = word.toLowerCase();
word = word.trim()
let theSplit = word.split("")
//next two var are for placeholders to swap word positions later on
let firstHalf = "";
let secondHalf = "";
// bT puts them together
let backTogether = "";
var placeHolderArray;

//This section is used to split apart and put the string back together into an array
//This might have been unnecessary
for(let i = 0; i < theSplit.length;i++){
   
        placeHolderArray = word.split(" ")
     
    
}
//this looks for a vowel at the beginning of a word
for (let i = 0; i < placeHolderArray.length; i++){

    if (vowel.includes(placeHolderArray[i][0])){
       placeHolderArray[i] = placeHolderArray[i] + "yay";
       
    }
//if no vowel is at beginning of word, this splits the current word off
    else {
        let separateWord = placeHolderArray[i].split('');
//This is the magic
        for (let q = 0; q < separateWord.length; q++){
           if (vowel.includes(separateWord[q])){
               firstHalf = placeHolderArray[i].substring(0,q)
                secondHalf = placeHolderArray[i].substring(q, separateWord.length)
               backTogether = secondHalf + firstHalf + "ay"
           placeHolderArray[i] = backTogether
           break
           }  
        }
    }
}

//This section is used to turn the placeHolder into out current word
//Turn the array into a string
//Then get rid of commas to clean up the final word

   var iterationCount = placeHolderArray.length
    var placeHolderString = placeHolderArray.toString()
    currentWord = placeHolderString
    for (let i = 0; i < iterationCount;i++){
    currentWord = currentWord.replace(","," ")
}
return currentWord
}
pigLatin(currentWord)
console.log(currentWord)



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.