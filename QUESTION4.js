function findMinDuplicate(array) {
  //creates an array for the duplicate numbers to be transferred
  var duplicateArray = [];

  //used to compare and find the smallest element in an array:

  //double loop through to find each duplicate and then push them into the array.
  //Find the first index then another for loop is added to compare the index element with all other elements
  //If a duplicate is found, push into the duplicate array

  for (var i = 0; i < array.length; i++) {
    // console.log("initial array element: " + array[i]);

    for (var j = i + 1; j < array.length; j++) {
      // console.log("compare with other elements: " + array[j]);
      if (array[i] == array[j]) {
        duplicateArray.push(array[i]);
      }
      // console.log("Duplicated array elements: " + duplicateArray);
    }
  }
  //locates the smallest of the duplicate array
  return Math.min.apply(null, duplicateArray);
}

console.log("----------Question 4----------");

console.log(
  "1st Test Case: " + findMinDuplicate([4, 10, 5, 1, 11, 5, 1, 4, 1])
);

console.log("2nd Test Case: " + findMinDuplicate([1, 10, 1, -1, 10, -1]));
