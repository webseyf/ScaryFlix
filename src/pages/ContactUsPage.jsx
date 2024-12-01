import React, { useState } from 'react';
import '../styles/ContactUsPage.css';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus('Please fill in all fields before submitting.');
    }
  };

  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>

      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Enter your message"
          />

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </section>

      <section className="contact-info">
        <h2>Other Ways to Contact Us</h2>
        <p>
          If you prefer to contact us directly or have any urgent inquiries, you can reach us via:
        </p>
        <ul>
          <li>Email: <strong>seyfadincompany@example.com</strong></li>
          <li>Phone: <strong>+251 942435009</strong></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/seyfadin-abdela-68112b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li>Github: <a href="https://github.com/webseyf?tab=repositories" target="_blank" rel="noopener noreferrer">Seyfadin Github</a></li>
        </ul>
      </section>
    </div>
  );
};

export default ContactUsPage;
