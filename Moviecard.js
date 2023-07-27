


// - src
//   - components
//     - SearchBar.js
//     - MovieCard.js
//     - MovieDetails.js
//     - Recommendation.js
//   - App.js
//   - App.css
//   - index.js








import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      {/* Add more movie details here, e.g., rating, genres */}
    </div>
  );
};

export default MovieCard;
