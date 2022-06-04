//url: https://www.hackerrank.com/challenges/bigger-is-greater/problem

function biggerIsGreater(w) {
  let arr = w.split("");
  for (let i = arr.length - 2; i >= 0; i--) {
    let biggerChars = arr.slice(i + 1).filter((v) => arr[i] < v);
    if (biggerChars.length > 0) {
      let index;
      index = i + 1 + arr.slice(i + 1).indexOf(biggerChars.sort()[0]);
      [arr[i], arr[index]] = [arr[index], arr[i]];
      return arr
        .slice(0, i + 1)
        .concat(arr.slice(i + 1).sort())
        .join("");
    }
  }
  return "no answer";
}

function biggerIsGreater(w) {
  let arr = w.split("");
  let downhillIndex = -1;
  for (let index = arr.length - 1; index > 0; index--) {
    if (arr[index] > arr[index - 1]) {
      downhillIndex = index - 1;
      break;
    }
  }

  if (downhillIndex == -1) {
    return "no answer";
  } else {
    let minGreater = null;
    let minGreaterIndex = null;
    for (let index = arr.length - 1; index > downhillIndex; index--) {
      if (arr[index] > arr[downhillIndex]) {
        if (minGreater == null || minGreater > arr[index]) {
          minGreater = arr[index];
          minGreaterIndex = index;
        }
      }
    }

    arr[minGreaterIndex] = arr[downhillIndex];
    arr[downhillIndex] = minGreater;
    return arr
      .slice(0, downhillIndex + 1)
      .concat(arr.slice(downhillIndex + 1).reverse())
      .join("");
  }
}
