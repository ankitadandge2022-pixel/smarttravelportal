
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem('travelFavorites') || '[]'
    );

    setFavorites(saved);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter(
      (place) => place.id !== id
    );

    setFavorites(updated);
    localStorage.setItem(
      'travelFavorites',
      JSON.stringify(updated)
    );
  };

  return (
    <div className="section">

      <h1>❤️ My Favorite Destinations</h1>

      <p>Your saved dream travel destinations.</p>

      {favorites.length === 0 ? (

        <div className="empty-favorites">
          <h2>❤️ No Favorites Yet!</h2>

          <p>
            You have not added any destinations
            to your favorites.
          </p>

          <Link to="/destinations" className="btn">
            Explore Destinations
          </Link>
        </div>

      ) : (

        <div className="destination-grid">

          {favorites.map((place) => (

            <div className="destination-card" key={place.id}>

              <img src={place.image} alt={place.name} />

              <div className="destination-info">

                <h2>{place.name}</h2>

                <p>📍 {place.country}</p>

                <h3>{place.price}</h3>

                <button
                  className="btn remove-btn"
                  onClick={() => removeFavorite(place.id)}
                >
                  Remove ❤️
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Favorites;
