import React, { useState, useEffect } from "react";
import "../styles/MovieQuiz.css";

const MovieQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Fetch movie data to use as quiz questions
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetching popular movies using your API key
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=e9afbbf99f60f9acd36243540273d66c&page=1`
        );
        const data = await response.json();

        // Extracting data for quiz questions
        const quizQuestions = data.results.slice(0, 3).map((movie) => ({
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, // Get the movie poster URL
          options: [movie.title, "Isreal Horror", "Venom 2", "Spiderman"], // Replace with real options
          answer: movie.title, // Correct answer is the movie title
        }));

        setQuestions(quizQuestions); // Update questions state with movie data
      } catch (error) {
        console.error("Error fetching movie data:", error); // Error handling
      }
    };

    fetchMovies();
  }, []); // Empty dependency array ensures it runs once when component is mounted

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1); // Increment score if the answer is correct
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1); // Move to next question
      setSelectedOption(null); // Reset selected option
    } else {
      setShowResult(true); // Show result when all questions are answered
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0); // Restart quiz to the first question
    setScore(0); // Reset score
    setSelectedOption(null); // Reset selected option
    setShowResult(false); // Hide result
  };

  if (questions.length === 0) return <div>Loading...</div>; // Loading state if questions are not available

  return (
    <div className="movie-quiz">
      {showResult ? (
        <div className="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button className="quiz-button" onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-question">
          <h2>Quiz: Let's Have a Fun!</h2>
          <h3>Guess the Movie Name</h3>
          <img
            src={questions[currentQuestion].poster}
            alt="Movie Poster"
            className="quiz-poster"
          />
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`quiz-option ${
                  selectedOption === option
                    ? option === questions[currentQuestion].answer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null} // Disable options once an answer is selected
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <button className="quiz-button" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieQuiz;
