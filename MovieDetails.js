
import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      {/* Display more movie details, e.g., cast */}
    </div>
  );
};

export default MovieDetails;
