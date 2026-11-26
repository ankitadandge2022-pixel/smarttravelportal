
import React, { useState, useEffect } from 'react';

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(
      localStorage.getItem('travelBookings')
    ) || [];

    setBookings(savedBookings);
  }, []);

  function deleteBooking(id) {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      'travelBookings',
      JSON.stringify(updatedBookings)
    );
  }

  return (
    <div className="section">

      <h1>My Bookings ✈️</h1>
      <p>Manage your travel bookings here.</p>

      {bookings.length === 0 ? (

        <div className="empty-favorites">
          <h2>No Bookings Found!</h2>
          <p>Please book your dream trip.</p>
        </div>

      ) : (

        <div className="destination-grid">

          {bookings.map((booking) => (

            <div className="destination-card" key={booking.id}>

              <div className="destination-info">

                <h2>{booking.destination}</h2>

                <p>👤 Name: {booking.name}</p>
                <p>📧 Email: {booking.email}</p>
                <p>📱 Phone: {booking.phone}</p>
                <p>📅 Date: {booking.date}</p>
                <p>👥 Persons: {booking.persons}</p>

                <button
                  className="remove-btn"
                  onClick={() => deleteBooking(booking.id)}
                >
                  Cancel Booking
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default MyBookings;
