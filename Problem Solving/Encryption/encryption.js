//url : https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
  // Write your code here
  s = s.replace(/\s/g, "");
  var l = s.length;
  var res = "";
  var maxRow = Math.floor(Math.sqrt(l));
  var maxColumn = Math.ceil(Math.sqrt(l));
  for (let i = 0; i < maxColumn; i++) {
    for (let j = i; j < s.length; j += maxColumn) res += s[j];
    res += " ";
  }
  return res;
}
