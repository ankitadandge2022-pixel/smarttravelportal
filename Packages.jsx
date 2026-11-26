
import React from 'react';
import { Link } from 'react-router-dom';

function Packages() {

  const packages = [
    {
      id: 1,
      name: "Goa Beach Holiday",
      duration: "3 Days / 2 Nights",
      price: "₹8,999",
      features: ["Hotel Stay", "Breakfast", "Beach Tour", "Local Transport"],
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2"
    },
    {
      id: 2,
      name: "Manali Adventure",
      duration: "5 Days / 4 Nights",
      price: "₹12,999",
      features: ["Mountain View Hotel", "Food", "Sightseeing", "Adventure Activities"],
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23"
    },
    {
      id: 3,
      name: "Dubai Luxury Tour",
      duration: "6 Days / 5 Nights",
      price: "₹29,999",
      features: ["Luxury Hotel", "City Tour", "Desert Safari", "Breakfast"],
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
    }
  ];

  return (
    <div className="section">

      <h1>Our Travel Packages</h1>
      <p>Choose your dream holiday package!</p>

      <div className="destination-grid">

        {packages.map((item) => (
          <div className="destination-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <div className="destination-info">

              <h2>{item.name}</h2>

              <p>🗓️ {item.duration}</p>

              <h2>{item.price}</h2>

              <h3>Package Includes:</h3>

              <ul>
                {item.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>

              <Link to="/contact" className="btn">
                Book Now
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Packages;
