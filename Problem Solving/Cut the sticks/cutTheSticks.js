//url: https://www.hackerrank.com/challenges/cut-the-sticks/problem

function cutTheSticks(arr) {
  let numberOfCuts = [];
  const arrayLength = arr.length;

  while (arr.length > 0) {
    let smallestValue = Math.min.apply(Math, arr);
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] - smallestValue;
      counter++;
    }

    for (let j = 0; j < arrayLength; j++) {
      let zeroCheck = arr.indexOf(0);
      if (zeroCheck > -1) {
        arr.splice(zeroCheck, 1);
      }
    }

    numberOfCuts.push(counter);
  }

  return numberOfCuts;
}
