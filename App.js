import "./App.css";
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/Moviecard';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (searchTerm) => {
    setSearchResults(searchTerm)
      .then((results) => setSearchResults(results))
      .catch((error) => {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      });
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="app">
      <SearchBar handleSearch={handleSearch} />

      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <div className="movie-list">
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
