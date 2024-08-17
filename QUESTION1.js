function IntReversal(num) {
  //is the number negative?
  var checkNegativeNum = num < 0;

  // Converted absolute num form to string, will remove the negative sign (for now)
  var numString = Math.abs(num).toString();

  //String reversal grab combo! Split each character and then reverse the order, joining each character one after the other
  var reversedNumString = numString.split("").reverse().join("");

  // Convert string back to integer
  var reversedNumInt = parseInt(reversedNumString);

  if (checkNegativeNum) {
    //Reapply the negative sign if the num is negative,
    //this way even negative nums can be reversed

    reversedNumInt = -reversedNumInt;
  }

  return reversedNumInt;
}

console.log("----------Question 1----------");

var test1X = 123;

//reverse to 321
console.log("Test 1: " + IntReversal(test1X));

var test2X = -456;

//reverse to -654
console.log("Test 2: " + IntReversal(test2X));
