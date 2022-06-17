function isPalindrome(word) {
    // Write your algorithm here
    // I expect calling getNumbers with an array [5, "11", 7] will return [5, 7]
    console.log("Expecting : [5, 7]");
    console.log("=>", getNumbers([5, "11", 7]));

    // I expect calling getNumbers with an array [5, 7] will return [5, 7]
    console.log("Expecting : [5 ,7]");
    console.log("=>, getNumbers([5, 7])");
}

/* 
  Add your pseudocode here
  initiate empty array called results

  iterate over each item in the input array:
     if element is a number:
     push item onto result

  return result
*/
If the string is a Palindrome

print "true"

else

    print "false"
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