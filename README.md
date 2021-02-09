# Pig Latin
#### By Collin Chapman and Benji Brucker
#### Practice project using Test Driven Development

### Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* Markdown

### Description

Practice project created for Epicodus coding bootcamp. The goal of this project is to break down our project into small behavior examples and writing one test at a time

###  Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

### Tests

**Test 1**
Describe: `pigLatin()`
Test: "It will find if a word starts with a vowel"
Expect (pigLatin("orange")).toEqual("true");

**Test 2**
Test: "It will add 'way' to the end of words that begin with a vowel"
Expect (pigLatin("orange)).toEqual("orangeway");

**Test 3**
Test: "For words beginning with one consonant, move first consonant to the end of the word and add "ay"
Expect (pigLatin("carpet")).toEqual("arpetcay");

**Test 4**
Test: "For words beginning with two consonants, move first two consecutive consonants to the end of the word and add "ay"
Expect (pigLatin("blanket")).toEqual("anketblay");

### Known Bugs

* None

### License

MIT

Copyright (c) 2021 Collin Chapman and Benji Brucker

##  Contact Information

Collin Chapman cchap14@gmail.com
Benji Brucker benjamin.brucker@gmail.com>