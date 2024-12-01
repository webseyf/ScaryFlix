import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GenreSection.css";

const GenreSection = ({ genreId, genreName, apiKey }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const handleWatchNow = (movieId) => {
    navigate(`/watch/${movieId}`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
        );
        const data = await response.json();
        setMovies(data.results.slice(0, 4)); // Limit to 5 movies per genre
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [genreId, apiKey]);

  return (
    <div className="genre-section">
      <div className="genre-header">
        <h2>{genreName}</h2>
        <a href={`/movies?genre=${genreId}`} className="explore-link">
          Explore More →
        </a>
      </div>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>{new Date(movie.release_date).getFullYear()}</p>
              <button
                    className="watch-now"
                    onClick={() => handleWatchNow(movie.id)}
                  >
                    Watch Now
                  </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSection;
