
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DestinationDetails() {

  const { id } = useParams();

  const places = [
    {
      id: 1,
      name: "Goa",
      country: "India",
      price: "₹8,999",
      description: "Enjoy beautiful beaches, water sports, nightlife and delicious food in Goa.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2"
    },
    {
      id: 2,
      name: "Manali",
      country: "India",
      price: "₹12,999",
      description: "Experience snow-covered mountains, beautiful valleys and adventure activities.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23"
    },
    {
      id: 3,
      name: "Paris",
      country: "France",
      price: "₹45,999",
      description: "Explore the Eiffel Tower, beautiful streets and romantic places in Paris.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    },
    {
      id: 4,
      name: "Bali",
      country: "Indonesia",
      price: "₹35,999",
      description: "Discover tropical beaches, green landscapes and amazing resorts.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
    },
    {
      id: 5,
      name: "Maldives",
      country: "Maldives",
      price: "₹55,999",
      description: "Relax in luxury water villas and enjoy crystal-clear blue water.",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8"
    },
    {
      id: 6,
      name: "Dubai",
      country: "UAE",
      price: "₹29,999",
      description: "Experience luxury shopping, desert safari and amazing skyscrapers.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
    }
  ];

  const place = places.find(
    (item) => item.id === Number(id)
  );

  if (!place) {
    return (
      <div className="section">
        <h1>Destination Not Found!</h1>
        <Link to="/destinations" className="btn">
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">

      <img
        src={place.image}
        alt={place.name}
        className="details-image"
      />

      <div className="details-content">
        <h1>{place.name}</h1>

        <h3>📍 {place.country}</h3>

        <p>{place.description}</p>

        <h2>Starting Price: {place.price}</h2>

        <Link to="/packages" className="btn">
          Explore Packages
        </Link>

        <Link to="/destinations" className="back-link">
          ← Back to Destinations
        </Link>
      </div>

    </div>
  );
}

export default DestinationDetails;
