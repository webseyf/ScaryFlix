import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/MoviesPage.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("popularity.desc");

  const genres = [
    { id: "", name: "All Genres" },
    { id: "28", name: "Action" },
    { id: "35", name: "Comedy" },
    { id: "27", name: "Horror" },
    { id: "12", name: "Adventure" },
    // Add more genres as needed
  ];

  const sortOptions = [
    { value: "popularity.desc", label: "Popularity (High to Low)" },
    { value: "release_date.desc", label: "Release Date (New to Old)" },
    { value: "vote_average.desc", label: "Rating (High to Low)" },
  ];

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = "e9afbbf99f60f9acd36243540273d66c";
      const genreQuery = genre ? `&with_genres=${genre}` : "";
      const searchQuery = query ? `&query=${query}` : "";
      const sortQuery = `&sort_by=${sortBy}`;
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}${genreQuery}${searchQuery}${sortQuery}`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [query, genre, page, sortBy]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);




  const navigate = useNavigate();
  const handleWatchNow = (movieId) => {
    navigate(`/watch/${movieId}`);
  };

  return (
    <div className="movies-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select onChange={(e) => setGenre(e.target.value)} value={genre}>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="loading">Loading movies...</div>}
      {error && (
        <div className="error">
          {error}{" "}
          <button onClick={fetchMovies} className="retry-btn">
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
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
                  {/* Watch Now Button */}
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
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesPage;
