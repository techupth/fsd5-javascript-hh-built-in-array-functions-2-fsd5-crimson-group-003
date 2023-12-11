function isPalindrome(string) {
  let arrangeStr = [];
  let newStr = [];

  for (let i = 0; i < string.length; i++) {
    arrangeStr = string[i];
    console.log(arrangeStr);
    if (/[a-zA-Zก-ฮ]/.test(arrangeStr)) {
      console.log(arrangeStr);
      newStr += arrangeStr.toLowerCase();
      console.log(newStr);
    }
  }

  for (let i = 0; i < newStr.length / 2; i++) {
    console.log(newStr.length / 2);
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false