
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        Sorry, the page you are looking for
        does not exist or has been moved.
      </p>

      <Link to="/" className="btn">
        ← Back To Home
      </Link>

    </div>
  );
}

export default NotFound;
