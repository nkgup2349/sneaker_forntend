// src/pages/About.js
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Our Sneaker Marketplace</h1>
        <p className="subtitle">
          A trusted, transparent, and technology-driven platform for buying
          authentic sneakers.
        </p>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Our sneaker marketplace is a full-stack platform designed to help
          customers explore, compare, and purchase premium sneakers from
          multiple verified sellers. Built with a strong focus on authenticity,
          transparency, and user experience, the platform ensures confidence at
          every step of the buying journey.
        </p>
      </section>

      <section className="about-section">
        <h2>Key Features</h2>
        <ul>
          <li>Multi-seller sneaker listings across brands and categories</li>
          <li>Real-time price comparison for the same product</li>
          <li>10-point sneaker authenticity and quality verification system</li>
          <li>End-to-end order and delivery tracking</li>
          <li>Customer ratings and product reviews</li>
          <li>Streamlined returns and refund workflow</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To build a reliable and scalable sneaker marketplace that eliminates
          counterfeit products, promotes fair pricing, and delivers a seamless
          experience for both buyers and sellers.
        </p>
      </section>

      <section className="about-section">
        <h2>Built By</h2>
        <p className="builder">
          <strong>Nikhil Kumar Gupta</strong>
          <br />
          National Institute of Technology, Agartala
        </p>
      </section>

      <section className="about-section">
        <h2>Contact</h2>
        <p>
          For queries, collaborations, or feedback, feel free to reach out:
        </p>
        <p className="contact">
          Email: <a href="mailto:nkgup2349@gmail.com">nkgup2349@gmail.com</a>
        </p>
        <p className="contact">
          Phone: <b>9863839377</b>
        </p>
      </section>
    </div>
  );
}
