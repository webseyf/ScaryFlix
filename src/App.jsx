import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//import Movies from "./pages/Movies";
import "./App.css";
import Footer from "./components/Footer";
import MoviesPage from "./pages/MoviesPage";
import GenresPage from "./pages/GenresPage";
import MovieDetailsPage from "./pages/MoviesDetailsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/COntactUsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/genres" element={<GenresPage />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/watch/:movieId" element={<MovieDetailsPage />} />
        

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
