import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="jumbotron text-center">
      <h1>Plural Sight Administration</h1>
      <p>
        Using React, Flux and React Router for faster and responsive web apps
      </p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default Homepage;
