const axios = require("axios");
async function getTotalGoals(team, year) {
  let counter = 0;
  var url =
    "https://jsonmock.hackerrank.com/api/football_matches?year=" +
    year +
    "&team1=" +
    team;
  const response = await axios.get(url);
  const result = await response.data;
  const pages = result.total_pages;
  for (const count of Array.from({ length: pages }, (_, i) => i + 1)) {
    const responses = await axios.get(
      "https://jsonmock.hackerrank.com/api/football_matches?year=" +
        year +
        "&team1=" +
        team +
        "&page=" +
        count
    );
    const results = await responses.data;
    const { data } = results;
    const test =
      "https://jsonmock.hackerrank.com/api/football_matches?year=" +
      year +
      "&team1=" +
      team +
      "&page=" +
      count;
    for (const item of data) {
      counter = counter + Number(item.team1goals);
    }
  }

  const response1 = await axios.get(
    "https://jsonmock.hackerrank.com/api/football_matches?year=" +
      year +
      "&team2=" +
      team
  );
  const result1 = await response1.data;
  const { total_pages } = result1;
  for (const count of Array.from({ length: total_pages }, (_, i) => i + 1)) {
    const response = await axios.get(
      "https://jsonmock.hackerrank.com/api/football_matches?year=" +
        year +
        "&team2=" +
        team +
        "&page=" +
        count
    );
    const result = await response.data;
    const { data } = result;
    for (const item of data) {
      counter = counter + Number(item.team2goals);
    }
  }

  return counter;
}
