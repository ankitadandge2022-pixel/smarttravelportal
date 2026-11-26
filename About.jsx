
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About TravelGo 🌍</h1>
        <p>Explore the World. Create Memories.</p>
      </section>

      <section className="about-content">

        <div className="about-text">
          <h2>Welcome To TravelGo</h2>

          <p>
            TravelGo is your trusted travel and tourism
            portal. We help travelers discover beautiful
            destinations around the world.
          </p>

          <p>
            Our mission is to make travel easy,
            affordable and memorable for everyone.
          </p>

          <Link to="/destinations" className="btn">
            Explore Destinations
          </Link>
        </div>

        <div className="about-features">
          <div>
            <h2>🌍 50+</h2>
            <p>Destinations</p>
          </div>

          <div>
            <h2>✈️ 100+</h2>
            <p>Travel Packages</p>
          </div>

          <div>
            <h2>😊 500+</h2>
            <p>Happy Travelers</p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default About;
