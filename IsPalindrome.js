/*
Palindrome is a string that’s spelled the same when read forward and backward. Some palindrome strings are as follows:

    “nope” spelled backwards is “epon”, so it’s not a palindrome
    “civic” spelled backwards is also “civic”, so it’s a palindrome
    “kayak” spelled backwards is also “kayak”, so it’s a palindrome
    “even” spelled backwards is “neve”, so it’s not a palindrome
*/

let word = "civic"
let str = word.toLowerCase();
//split permet de convertir un string en array
//reverse permet d'inverser un tableau
//join permet de convertir un tableau n string
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}

/*Autre methode*/
/*
let word = "CivIc";
let str = word.toLowerCase();

function checkPalindrome(str) {
  // find the length of the string
  const len = str.length;
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check each position
    // between the first and the last character
    if (str[i] !== str[len - 1 - i]) {
      console.log("NOT a palindrome");
    }
  }
  console.log("The string is a palindrome");
}
*/