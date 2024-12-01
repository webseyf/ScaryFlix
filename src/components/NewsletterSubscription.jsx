import React, { useState } from "react";
import "../styles/NewsletterSubscription.css";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail(""); // Reset email input
  };

  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h2>Stay in the Loop!</h2>
        <p>Get the latest updates on trending movies, new releases, and exclusive content.</p>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
        {message && <p className="newsletter-message">{message}</p>}
      </div>
    </div>
  );
};

export default NewsletterSubscription;
