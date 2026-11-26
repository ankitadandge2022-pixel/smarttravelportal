
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Destinations() {

  const places = [
    { id: 1, name: "Goa", country: "India", price: "₹8,999", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2" },
    { id: 2, name: "Manali", country: "India", price: "₹12,999", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23" },
    { id: 3, name: "Paris", country: "France", price: "₹45,999", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
    { id: 4, name: "Bali", country: "Indonesia", price: "₹35,999", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4" },
    { id: 5, name: "Maldives", country: "Maldives", price: "₹55,999", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8" },
    { id: 6, name: "Dubai", country: "UAE", price: "₹29,999", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" }
  ];

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('travelFavorites')) || [];
  });

  function addToFavorites(place) {
    const alreadyAdded = favorites.some(
      (item) => item.id === place.id
    );

    let updatedFavorites;

    if (alreadyAdded) {
      updatedFavorites = favorites.filter(
        (item) => item.id !== place.id
      );
      alert("Removed from Favorites!");
    } else {
      updatedFavorites = [...favorites, place];
      alert("Added to Favorites!");
    }

    setFavorites(updatedFavorites);
    localStorage.setItem(
      'travelFavorites',
      JSON.stringify(updatedFavorites)
    );
  }

  return (
    <div className="section">

      <h1>Explore Beautiful Destinations</h1>
      <p>Discover amazing places around the world.</p>

      <div className="destination-grid">

        {places.map((place) => (
          <div className="destination-card" key={place.id}>

            <img src={place.image} alt={place.name} />

            <div className="destination-info">

              <h2>{place.name}</h2>

              <p>📍 {place.country}</p>

              <h3>{place.price}</h3>

              <Link
                to={`/destination/${place.id}`}
                className="btn"
              >
                View Details
              </Link>

              <button
                className="favorite-btn"
                onClick={() => addToFavorites(place)}
              >
                {favorites.some(item => item.id === place.id)
                  ? "❤️ Remove Favorite"
                  : "🤍 Add to Favorites"}
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Destinations;
