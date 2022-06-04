//url: https://www.hackerrank.com/challenges/sherlock-and-squares/problem

function squares(a, b) {
  let start = Math.ceil(Math.sqrt(a));
  let end = Math.floor(Math.sqrt(b));
  return end - start + 1;
}
