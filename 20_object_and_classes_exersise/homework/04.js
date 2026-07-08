function movieInformation(arr) {
  let movies = [];

  for (let commands of arr) {
    if (commands.includes("addMovie")) {
      let tokens = commands.split("addMovie ");
      let movieName = tokens[1];

      movies.push({ name: movieName });
    } else if (commands.includes("directedBy")) {
      let tokens = commands.split("directedBy ");
      let [movieName, movieDirector] = [tokens[0].trim(), tokens[1]];
      let foundMovieObj = movies.find((movie) => movie.name === movieName);

      if (foundMovieObj) {
        foundMovieObj.director = movieDirector;
      }
    } else if (commands.includes("onDate")) {
      let tokens = commands.split("onDate ");
      let [movieName, movieDate] = [tokens[0].trim(), tokens[1]];
      let foundMovieObj = movies.find((movie) => movie.name === movieName);

      if (foundMovieObj) {
        foundMovieObj.date = movieDate;
      }
    }
  }

  for (let movieObj of movies) {
    if (movieObj.name && movieObj.director && movieObj.date) {
      console.log(JSON.stringify(movieObj));
    }
  }
}

movieInformation([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
