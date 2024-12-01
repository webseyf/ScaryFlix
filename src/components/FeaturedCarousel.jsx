import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/FeaturedCarousel.css";

import { Autoplay, Navigation } from "swiper/modules"; // Correct Swiper modules import

const FeaturedCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "e9afbbf99f60f9acd36243540273d66c";
  const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching featured movies:", error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="featured-carousel">
      <h2>Featured Movies</h2>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation
          breakpoints={{
            1200: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>Release Date: {movie.release_date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}





<h2>Popular Movies</h2>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation
          breakpoints={{
            1200: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>Release Date: {movie.release_date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FeaturedCarousel;
