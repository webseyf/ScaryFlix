import React from 'react';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>

      <Section title="Who Made This?" content={<WhoMadeIt />} />
      <Section title="Technologies Used" content={<TechnologiesUsed />} />
      <Section title="How to Use the Website" content={<HowToUse />} />
      <Section title="Need a Developer?" content={<HireMe />} />
      <Section title="Want to Explore My Portfolios?" content={<Portfolios />} />
    </div>
  );
};

const Section = ({ title, content }) => (
  <section className={`about-us-section ${title.toLowerCase().replace(/\s+/g, '-')}`}>
    <h2>{title}</h2>
    {content}
  </section>
);

const WhoMadeIt = () => (
  <p>
    This website was developed by <strong>Seyfadin</strong>, a passionate software developer with expertise in front-end and back-end technologies. With a focus on creating intuitive and user-friendly applications, Seyfadin aimed to build this movie browsing app to provide users with an enjoyable movie search experience.
  </p>
);

const TechnologiesUsed = () => (
  <div>
    <p>
      The website was built using modern web development tools and frameworks. Here's a list of the main technologies used:
    </p>
    <ul>
      <li><strong>React.js</strong> - A powerful JavaScript library for building user interfaces, enabling efficient rendering and a seamless user experience.</li>
      <li><strong>Axios</strong> - Used for making API requests to fetch movie data from The Movie Database (TMDb) API.</li>
      <li><strong>CSS</strong> - Styled components and pages to create a clean and responsive design that adapts to different screen sizes.</li>
      <li><strong>React Router</strong> - Used to enable smooth page navigation between the homepage and detailed movie pages.</li>
    </ul>
  </div>
);

const HowToUse = () => (
  <div>
    <p>
      The website is designed to let you explore movies by genre. To use it:
    </p>
    <ol>
      <li>Choose a genre from the dropdown list on the home page.</li>
      <li>The website will fetch and display a list of movies in that genre.</li>
      <li>Click on a movie title or its image to view more details, including ratings, release date, and a short description.</li>
      <li>Use the pagination controls to navigate between pages of movies.</li>
    </ol>
  </div>
);

const HireMe = () => (
  <div>
    <p>
      If you're looking for a passionate developer to build your next project, feel free to get in touch with me. I specialize in full-stack development and can bring your ideas to life.
    </p>
    <p>Contact me at: <strong>seyfadincompany@example.com</strong></p>
  </div>
);

const Portfolios = () => (
  <div>
    <p>
      Explore my portfolios:
    </p>
    <ul>
      <li><a href="https://z-crypto.vercel.app/" target="_blank" rel="noopener noreferrer">Z-Crypto</a></li>
      <li><a href="https://webseyf.github.io/portfolio1/" target="_blank" rel="noopener noreferrer">Portfolio 1</a></li>
      <li><a href="https://tafach-seyfadin-abdelas-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Tafach Projects</a></li>
      <li><a href="https://webseyf.github.io/TechNova/" target="_blank" rel="noopener noreferrer">TechNova</a></li>
      <li><a href="https://seyfportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Seyf Portfolio</a></li>
      <li><a href="https://seyf-weather.vercel.app/" target="_blank" rel="noopener noreferrer">Weather App</a></li>
      <li><a href="http://aastu.software/" target="_blank" rel="noopener noreferrer">AASTU Software</a></li>
      <li><a href="https://greatstack.in/" target="_blank" rel="noopener noreferrer">GreatStack</a></li>
      <li><a href="https://webseyf.github.io/scienfic-calculator/" target="_blank" rel="noopener noreferrer">Scientific Calculator</a></li>
      <li><a href="https://webseyf.github.io/bootstrap-web/" target="_blank" rel="noopener noreferrer">Bootstrap Web</a></li>
      <li><a href="https://vist-ethio.vercel.app/" target="_blank" rel="noopener noreferrer">Vist Ethio</a></li>
    </ul>
    <p>Contact me at: <strong>seyfadincompany@example.com</strong></p>
  </div>
);

export default AboutUsPage;
