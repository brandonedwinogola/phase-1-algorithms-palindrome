function reverse(word) {
    // 'abc' => 'cba'
    // const WordArray = word.split("")
    // const reversedWordArray = wordArray.reverse();
    // const reversedWord = reversedWordArray.join("");
    // return reversedWord;
    return word.split("").reverse().join("");
}

function isPalindrome(word)

const reversedWord = reverse(word)

if (word === reversedWord) {
    return true
} else {
    return false
}


/* 
  Add your pseudocode here

  that means that if the word is simmilar to the reversed word, i should return true

  reverse the input string

  if input is the same as reversed input
    return true
  else
    return false
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

    console.log("Expecting: true");
    console.log("=>", isPalindrome("b"));

    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;