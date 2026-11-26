
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover The World With TravelGo</h1>

          <p>
            Explore beautiful destinations, enjoy amazing
            holidays and create unforgettable memories.
          </p>

          <Link to="/destinations" className="btn">
            Explore Now →
          </Link>
        </div>
      </section>

      <section className="section">
        <h1>Welcome To TravelGo</h1>

        <p>
          Your journey begins here. Discover the most
          beautiful places around the world.
        </p>

        <div className="features">
          <div className="feature">
            <h2>🌍 Explore Places</h2>
            <p>Discover amazing destinations worldwide.</p>
          </div>

          <div className="feature">
            <h2>✈️ Easy Travel</h2>
            <p>Plan your perfect holiday with us.</p>
          </div>

          <div className="feature">
            <h2>💰 Best Packages</h2>
            <p>Enjoy affordable travel packages.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
