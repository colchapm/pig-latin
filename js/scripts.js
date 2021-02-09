
// Describe: `pigLatin()`

// #1
// Test: "It will find if a word starts with a vowel"
// Expect(pigLatin("orange")).toEqual("true");

element = "orange";

function pigLatin(element) {
    if (element[0] === "a" || element[0] === "e" || element[0] === "i" || element[0] === "o" || element[0] === "u") {
      return true 
    } else {
      return false
    }
  };


// #2
// Test: "It will add 'way' to the end of words that begin with a vowel"
// Expect (pigLatin("orange)).toEqual("orangeway");

  function pigLatin(element) {
    if (element[0] === "a" || element[0] === "e" || element[0] === "i" || element[0] === "o" || element[0] === "u") {
      return element += "way";
    } else {
      return false
    }
  };


// #3
// Test: "move first consonant to the end of word and add "ay"
// Expect (pigLatin("carpet")).toEqual("arpetcay");

function pigLatin(element) {
  if (element[0] === "a" || element[0] === "e" || element[0] === "i" || element[0] === "o" || element[0] === "u") {
    return element += "way";
  } else {
    return element.substr(1) + element[0] + "ay";
  }
};




// RULE #1 -
// For words beginning with a vowel, add "way" to the end.
// test 1 and 2

// RULE #2 -
// For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

1 - find words with consonants
2 - move first consonant to end of word
2.5 - move first and second consonant to end of word
3 - add "ay" to end of word

// RULE #3 -
// If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!


