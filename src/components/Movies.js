import React from "react";
import { movies } from "../data";

function Movies() {

    const movieArr = movies.map((movie) => (
      <div key={movie.title}>
        <h2>Movie title: {movie.title}</h2>
        <p>Duration: {movie.time} minutes</p>
        <ul>
            {movie.genres.map((genre) =>(
              <li key={genre}>{genre}</li>
            ))}
        </ul>
      </div> 
      ));
    
return (
  <div>
    <h1>Movies Page</h1>
    {movieArr}
  </div>
  );
}

export default Movies;
