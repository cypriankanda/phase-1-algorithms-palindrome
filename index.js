function isPalindrome(word) {
  // Set up two pointers: one at the start, one at the end of the string
  let left = 0;
  let right = word.length - 1;

  // Compare characters from both ends of the string
  while (left < right) {
    // If the characters don't match, it's not a palindrome
    if (word[left] !== word[right]) {
      return false;
    }
    left++;  // Move the left pointer to the right
    right--; // Move the right pointer to the left
  }

  // If all characters matched, it's a palindrome
  return true;
}

/* 
  Pseudocode:
  1. Initialize two pointers, left at the beginning of the string and right at the end.
  2. While left is less than right, compare the characters at the left and right pointers.
  3. If characters at left and right do not match, return false (it's not a palindrome).
  4. If characters match, move the left pointer to the right and the right pointer to the left.
  5. Repeat the process until left pointer is no longer less than the right pointer.
  6. If no mismatches were found, return true (it is a palindrome).
*/

/*
  Explanation of the solution:
  We use two pointers to compare characters from the two ends of the string. The `left` pointer starts from the first character, and the `right` pointer starts from the last character. The algorithm proceeds by checking if the characters at these two positions are equal. If they are, we move inward by incrementing the `left` pointer and decrementing the `right` pointer. This continues until the pointers meet or cross each other. If at any point the characters are not equal, we return `false`. If the pointers meet without finding any mismatches, we return `true`, indicating that the string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // Additional test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
