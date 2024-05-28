// Step 1: Normalize the string by converting it to lowercase and filtering out non-alphanumeric characters
function isPalindrome(str) {
  const normalizedStr = str
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z0-9]/.test(char));

  // Step 2: Reverse the normalized string using reduce
  const reversedStr = normalizedStr.reduce(
    (reversed, char) => char + reversed,
    "",
  );

  // Step 3: Compare the normalized string and the reversed string
  return normalizedStr.join("") === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
