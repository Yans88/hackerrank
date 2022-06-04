//url: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(scores, alice) {
  const results = [];
  const scoresSortedDedupped = Array.from(new Set(scores));
  let j = scoresSortedDedupped.length;

  for (let i = 0; i < alice.length; i++) {
    let found = false;
    while (!found && j >= 0) {
      if (scoresSortedDedupped[j] > alice[i]) {
        found = true;
      } else {
        j--;
      }
    }
    results.push(j + 2);
  }
  return results;
}
