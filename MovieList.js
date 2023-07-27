import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          <button onClick={() => onMovieClick(movie)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;