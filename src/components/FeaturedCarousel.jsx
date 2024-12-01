import React, { useEffect, useState } from "react";
import "../styles/FeaturedCarousel.css";

const FeaturedCarousel = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [loadingPopular, setLoadingPopular] = useState(true);

  const API_KEY = "e9afbbf99f60f9acd36243540273d66c";
  const FEATURED_API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const fetchMovies = async () => {
    try {
      // Fetch featured movies
      setLoadingFeatured(true);
      const featuredResponse = await fetch(FEATURED_API_URL);
      const featuredData = await featuredResponse.json();
      setFeaturedMovies(featuredData.results.slice(0, 4)); // Limit to 4 cards
      setLoadingFeatured(false);

      // Fetch popular movies
      setLoadingPopular(true);
      const popularResponse = await fetch(POPULAR_API_URL);
      const popularData = await popularResponse.json();
      setPopularMovies(popularData.results.slice(0, 4)); // Limit to 4 cards
      setLoadingPopular(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoadingFeatured(false); // Handle errors for featured movies
      setLoadingPopular(false);  // Handle errors for popular movies
    }
  };

  useEffect(() => {
    fetchMovies(); // Initial fetch

    // Set an interval to fetch movies every 5 minutes (300000ms)
    const intervalId = setInterval(fetchMovies, 300000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleWatchNow = (movieId) => {
    // Navigate to a movie streaming page or open an iframe with the full movie
    window.location.href = `/watch/${movieId}`; // Modify with actual streaming URL
  };

  return (
    <div className="featured-carousel">
      <h2>Featured Movies</h2>
      {loadingFeatured ? (
        <h2 className="loading-text">Loading...</h2>
      ) : (
        <div className="movie-grid">
          {featuredMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>
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
      )}

      <h2>Popular Movies</h2>
      {loadingPopular ? (
        <h2 className="loading-text">Loading...</h2>
      ) : (
        <div className="movie-grid">
          {popularMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>
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
      )}
    </div>
  );
};

export default FeaturedCarousel;
