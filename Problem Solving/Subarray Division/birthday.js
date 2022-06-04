//url : https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  var segments = 0;
  for (let i = 0; i < s.length - m + 1; i++) {
    var segment = s.slice(i, i + m);
    var sum = segment.reduce((acc, current) => acc + current);
    if (sum === d) segments++;
  }
  return segments;
}
