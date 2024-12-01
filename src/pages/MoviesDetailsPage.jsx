import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/MoviesDetailsPage.css";

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="loading-spinner" aria-label="Loading...">
    Loading...
  </div>
);

// Error Message Component
const ErrorMessage = ({ message }) => (
  <div className="error-message" role="alert">
    {message}
  </div>
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "e9afbbf99f60f9acd36243540273d66c";

    const fetchMovieData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [movieResponse, videoResponse] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`),
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`),
        ]);

        setMovie(movieResponse.data);
        setVideos(videoResponse.data.results);
      } catch (err) {
        console.error("Error fetching movie details or videos:", err);
        setError("Failed to fetch movie details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return <ErrorMessage message="Movie not found." />;

  // Find the first YouTube video in the videos array, if available
  const youtubeVideo = videos.find((video) => video.site === "YouTube");
  const fullMovieUrl = youtubeVideo
    ? `https://www.youtube.com/embed/${youtubeVideo.key}`
    : null;

  return (
    <div className="movie-details">
      {/* Full Movie Section with embedded YouTube trailer */}
      <section className="movie-details__full-movie">
        <h2>Watch Movie Trailer</h2>
        {fullMovieUrl ? (
          <iframe
            width="100%"
            height="500"
            src={fullMovieUrl}
            title={`Movie Trailer: ${movie.title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Sorry, no trailer is available for this movie.</p>
        )}
      </section>

      <header className="movie-details__header">
        <div className="movie-details__info">
          <h1 className="movie-details__title">{movie.title}</h1>
          <div className="movie-details__meta">
            <p><strong>Release Date:</strong> {movie.release_date || "Unknown"}</p>
            <p><strong>Rating:</strong> ⭐ {movie.vote_average?.toFixed(1) || "N/A"}</p>
          </div>
        </div>
      </header>

      <main className="movie-details__body">
        <section className="movie-details__overview">
          <h2>Overview</h2>
          <p>{movie.overview || "No overview available."}</p>
        </section>
        <section className="movie-details__genres">
          <h2>Genres</h2>
          <p>{movie.genres?.map((genre) => genre.name).join(", ") || "N/A"}</p>
        </section>
      </main>
      <button
          className="movie-details__back-button full"
        > 
        <a href="http://www.netflix.com" target="_blank" rel="noopener noreferrer">🎬Full Movie💥Netflix</a>
        </button>
      <footer className="movie-details__footer">
     

        <button
          className="movie-details__back-button"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
     
      </footer>
    </div>
  );
};

export default MovieDetailsPage;
