const root = "https://api.themoviedb.org/3/";
const apiKey = "210d6a5dd3f16419ce349c9f1b200d6d";
const criteria = document.getElementById("movie");
const best = document.getElementById("best");

const bringMovie = async (criteria) => {
  try {
    const rawData = await fetch(
      `${root}search/movie?api_key=${apiKey}&language=en-US&query=${criteria}&page=1&include_adult=false`
    );
    const movies = await rawData.json();

    if (movies.results.length > 0) {
        best.innerHTML = `${movies.results[movies.results.length - 1].overview}`
    }
  } catch (e) {
    console.log(e);
  }
};

criteria.addEventListener("input", (e) => {
  bringMovie(e.target.value);
});
