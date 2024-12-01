import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import "../styles/GenresPage.css";
import { useNavigate } from "react-router-dom";
const GenresPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);

  const navigate = useNavigate();
  const handleWatchNow = (movieId) => {
    navigate(`/watch/${movieId}`);
  };



  // Fetch genres on initial render
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = "e9afbbf99f60f9acd36243540273d66c";
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );
        setGenres(response.data.genres);
      } catch (err) {
        console.error("Error fetching genres:", err);
        setError("Failed to fetch genres. Please try again later.");
      }
    };

    fetchGenres();
  }, []);

  // Fetch movies based on genre and pagination
  const fetchMoviesByGenre = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = "e9afbbf99f60f9acd36243540273d66c";
      const genreQuery = selectedGenre ? `&with_genres=${selectedGenre}` : "";
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}${genreQuery}`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [selectedGenre, page]);

  useEffect(() => {
    if (selectedGenre) {
      fetchMoviesByGenre();
    }
  }, [fetchMoviesByGenre, selectedGenre, page]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setPage(1); // Reset to the first page when the genre changes
  };

  const handlePagination = (newPage) => {
    setPage(newPage);
  };

  const handleRetry = () => {
    fetchMoviesByGenre();
  };

  return (
    <div className="genres-page">
      <div className="search-bar">
        <h1>Browse by Genre</h1>
        <select onChange={handleGenreChange} value={selectedGenre}>
          <option value="">Select a Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="loading">Loading movies...</div>}
      {error && (
        <div className="error">
          {error}{" "}
          <button onClick={handleRetry} className="retry-btn">
            Retry
          </button>
        </div>
      )}

      {!loading && !error && selectedGenre && (
        <>
          <div className="movies-grid">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                {/* Poster Section */}
                <div className="poster-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                  />
                  {/* Hover Overlay */}
                  <div className="hover-overlay">
                    <p className="movie-overview">
                      {movie.overview.length > 100
                        ? `${movie.overview.slice(0, 100)}...`
                        : movie.overview}
                    </p>
                  </div>
                </div>

                {/* Static Information */}
                <div className="movie-details">
                  <h3 className="movie-title">{movie.title}</h3>
                  <p className="movie-release-date">
                    <strong>Release:</strong> {movie.release_date || "Unknown"}
                  </p>
                  <div className="movie-rating">
                    ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                  </div>
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

          <div className="pagination">
            <button
              onClick={() => handlePagination(page - 1)}
              disabled={page <= 1}
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => handlePagination(page + 1)}
              disabled={page >= totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}

      {!selectedGenre && !loading && !error && (
        <div className="genre-info">
          <h1>Please select a genre to explore the movies.</h1>
        </div>
      )}
    </div>
  );
};

export default GenresPage;
