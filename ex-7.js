function isPalindrome(string) {
  // Start coding here
  let cutIndex = parseInt(string.length / 2);
  let arrayString = string.split("");
  let firstHalf = arrayString.slice(0, cutIndex);

  firstHalf = firstHalf.join("");

  let secondHalf = arrayString.slice(cutIndex + 1, string.length);
  secondHalf = secondHalf.reverse();
  secondHalf = secondHalf.join("");

  return firstHalf === secondHalf;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
