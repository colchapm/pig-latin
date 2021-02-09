
// Describe: `pigLatin()`
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



  // Test: "It will add 'way' to the end of words that begin with a vowel"
  // Expect (pigLatin("orange)).toEqual("orangeway");

  function pigLatin(element) {
    if (element[0] === "a" || element[0] === "e" || element[0] === "i" || element[0] === "o" || element[0] === "u") {
      return element += "way";
    } else {
      return false
    }
  };