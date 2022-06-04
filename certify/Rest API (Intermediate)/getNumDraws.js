const axios = require("axios");
async function getNumDraws(year) {
  let counter = 0;
  var url = "https://jsonmock.hackerrank.com/api/football_matches?year=" + year;
  const response = await axios.get(url);
  const result = await response.data;
  const pages = result.total_pages;
  for (var i = 0; i < pages; i++) {
    const responses = await axios.get(
      "https://jsonmock.hackerrank.com/api/football_matches?year=" +
        year +
        "&page=" +
        i
    );
    const results = await responses.data;
    const { data } = results;
    for (const item of data) {
      if (item.team1goals === item.team2goals) {
        counter++;
      }
    }
  }

  return counter;
}
