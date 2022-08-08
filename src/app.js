/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (number) {
  //Your code here
  if (number === 1) {
    return 1;
  } else {
    return number * findFactorial(number - 1);
  }
};

//Exercise 2
const reverseString = function () {
  //Your code here
  if (str.length !== 1) {
    return reverseString(str.slice(1)) + str.charAt(0);
  } else {
    return str;
  }
};

//Exercise 3
const arr1 = [1, 2, 3];
const arr2 = [];

const swap = function (arr1, arr2) {
  //Your code here

  if (arr1.length === 0) {
    return arr2;
  } else {
    arr2.push(arr1[0]);
    return swap(arr1.slice(1), arr2);
  }
};

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };
