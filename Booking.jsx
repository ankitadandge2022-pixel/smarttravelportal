
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Booking() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    persons: '1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get old bookings
    const oldBookings = JSON.parse(
      localStorage.getItem('travelBookings') || '[]'
    );

    // Create new booking
    const newBooking = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      destination: formData.destination,
      date: formData.date,
      persons: formData.persons
    };

    // Save booking
    const updatedBookings = [
      ...oldBookings,
      newBooking
    ];

    localStorage.setItem(
      'travelBookings',
      JSON.stringify(updatedBookings)
    );

    alert('🎉 Your Booking is Successful!');

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      date: '',
      persons: '1'
    });

    // Go to My Bookings
    navigate('/my-bookings');
  };

  return (
    <div className="section">

      <h1>Book Your Dream Trip ✈️</h1>

      <p>Fill the form and plan your next adventure!</p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter 10 Digit Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{10}"
          maxLength="10"
          required
        />

        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        >
          <option value="">Select Destination</option>
          <option value="Goa">Goa</option>
          <option value="Manali">Manali</option>
          <option value="Paris">Paris</option>
          <option value="Bali">Bali</option>
          <option value="Maldives">Maldives</option>
          <option value="Dubai">Dubai</option>
        </select>

        <label>Travel Date</label>

        <input
          type="date"
          name="date"
          min={new Date().toISOString().split('T')[0]}
          value={formData.date}
          onChange={handleChange}
          required
        />

        <select
          name="persons"
          value={formData.persons}
          onChange={handleChange}
        >
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4 Persons</option>
          <option value="5">5 Persons</option>
          <option value="6">6 Persons</option>
          <option value="7">7 Persons</option>
          <option value="8">8 Persons</option>
          <option value="9">9 Persons</option>
          <option value="10">10 Persons</option>
        </select>

        <button type="submit" className="btn">
          Confirm Booking ✈️
        </button>

      </form>

    </div>
  );
}

export default Booking;
