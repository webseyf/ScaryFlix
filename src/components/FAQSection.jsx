import React, { useState } from "react";
import "../styles/FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I save my favorite movies?",
      answer:
        "You can save your favorite movies by clicking the 'Add to Favorites' button on a movie's detail page. Access them anytime from your profile.",
    },
    {
      question: "What’s the source of movie data?",
      answer:
        "All movie data is fetched from The Movie Database (TMDb) API, a trusted source for movie information.",
    },
    {
      question: "Is this app free to use?",
      answer:
        "Yes, this app is completely free to use. There are no subscription fees.",
    },
    {
      question: "Can I search movies by genre?",
      answer:
        "Yes, you can use the search feature or browse the genre sections to find movies by specific genres.",
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
