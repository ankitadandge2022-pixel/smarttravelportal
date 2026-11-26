import MyBookings from './pages/MyBookings';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import Packages from './pages/Packages';
import Booking from './pages/Booking';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">

        <Link to="/" className="logo">
          TravelGo.
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/my-bookings">My Bookings</Link>
        </div>

      </nav>

      {/* Website Pages */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/destination/:id"
          element={<DestinationDetails />}
        />

        <Route
          path="/packages"
          element={<Packages />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>

      {/* Footer */}
      <footer>
        <h2>TravelGo.</h2>
        <p>Explore the World. Create Memories.</p>
        <p>© 2026 TravelGo. All Rights Reserved.</p>
      </footer>

    </>
  );
}

export default App;
