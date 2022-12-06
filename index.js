function isPalindrome(word) {
  // Write your algorithm here
  /* 
    Step 1: Start
    Step 2: Declare variable re
    Step 3: specify string to lowercase
    Step 4: Declare variable len to represent string length
    Step 5; Iterate over each item
    Step 6: if word iterated !== word length
          return false;
          else
          return true; 
    Step 7: Stop
  */
  var re = /[^A-Za-z0-9]/g;
 word = word.toLowerCase().replace(re, '');
 var len = word.length;
 for (var i = 0; i < len/2; i++) {
   if (word[i] !== word[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
isPalindrome("")

/* 
  Add your pseudocode here
 
  initialize a variable called re
      specify our string toLowercase
      iniialize another variable len to check the lenght of the string
      iterate over each item in the variable
      if string is not equal to string length expected
          return result
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
