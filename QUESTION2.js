function locateTarget(array, target) {
  for (var i = 0; i < array.length; i++) {
    /* loop through the array to find the index position of the target number in the array
    The loop will stop at a number equal to the target value, or higher a target isn't located
    thus letting us know where the target's index position would be. */

    if (array[i] >= target) {
      return i;
    }
    //console.log(i);
  }
}

console.log("----------Question 2----------");

var arrayTest1 = ([1, 3, 5, 6], 5);

//returns 2
console.log("1st Test: " + locateTarget([1, 3, 5, 6], 5));

var arrayTest2 = ([1, 3, 5, 6], 2);

//returns 1
console.log("2nd Test: " + locateTarget([1, 3, 5, 6], 2));
