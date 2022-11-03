function isPalindrome(word) {
  // Write your algorithm here
  const l = word.length
  const n = (word.length + word.length % 2) / 2


  for (i=0;i<n;i++){

    console.log(word[i], word[l-1-i], word[i]===word[l-1-i])

    if (word[i]!=word[l-1-i])
      return false




  }

  return true;

 



}

/* 
  Add your pseudocode here

    isPalindrome(word)
      get the length of the word
      get the number of required loops ((length + remainder when dividing length by 2) / 2)

      for number of loops
        does the nth character in the word equal the last character - 1 - n
        return false if ever false
      
      return true 

*/

/*
  Add written explanation of your solution here

  Comapare the beginning half of the word with the last half of the word, marching inward, one character at a time


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("toot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("to"));



}

module.exports = isPalindrome;
