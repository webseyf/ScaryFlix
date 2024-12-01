import Hero from "../components/Hero"
//import PopularCarousal from "../components/PopularCarousal"
import FeaturedCarousel from "../components/FeaturedCarousel"
import FAQSection from "../components/FAQSection";

import React from "react";
import GenreSection from "../components/GenreSection";
import NewsletterSubscription from "../components/NewsletterSubscription";
import MovieQuiz from "../components/MovieQuiz";

const apiKey = "e9afbbf99f60f9acd36243540273d66c";

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedCarousel />
      <GenreSection genreId={27} genreName="Horror" apiKey={apiKey} />
      <GenreSection genreId={28} genreName="Action" apiKey={apiKey} />
      <GenreSection genreId={878} genreName="Sci-Fi" apiKey={apiKey} />
      <FAQSection/>
      <MovieQuiz/>
      <NewsletterSubscription/>
    </div>
  );
};

export default Home;

