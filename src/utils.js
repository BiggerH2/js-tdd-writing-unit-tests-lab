export function isPalindrome(word) {
    if (typeof word !== "string") {
      throw new Error("Input must be a string");
    }
  
    if (word === "") {
      return false; // Empty string is not considered a palindrome
    }
  
    if (!/^[a-zA-Z]+$/.test(word)) {
      throw new Error("Input must contain only alphabetic characters");
    }
  
    const alphanumericWord = word.toLowerCase();
    const reversedWord = alphanumericWord.split("").reverse().join("");
    
    return alphanumericWord === reversedWord;
  }
  