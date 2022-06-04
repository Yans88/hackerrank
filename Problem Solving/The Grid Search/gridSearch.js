//url: https://www.hackerrank.com/challenges/the-grid-search/problem

const findFunc = (G, P, i, col) => {
  for (let j = 0; j < P.length; j++) {
    const row = G[i + j].slice(col, P[0].length + col);
    if (row !== P[j]) return false;
  }

  return true;
};

function gridSearch(G, P) {
  // Write your code here
  for (let i = 0; i <= G.length - P.length; i++) {
    if (G[i].includes(P[0])) {
      for (let j = 0; j <= G[i].length - P[0].length; j++) {
        if (G[i].slice(j, j + P[0].length) === P[0]) {
          const result = findFunc(G, P, i, j);
          if (result) return "YES";
        }
      }
    }
  }
  return "NO";
}
