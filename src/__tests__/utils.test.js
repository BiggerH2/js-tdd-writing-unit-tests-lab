// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for palindrome words", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
    expect(isPalindrome("deified")).toBe(true);
  });

  it("returns false for non-palindrome words", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });
  it("returns true for words with mixed case", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("LeVel")).toBe(true);
  });
  
  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });
  
  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("12321")).toThrow();
  });
  
  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12321)).toThrow();
  });
  
});
