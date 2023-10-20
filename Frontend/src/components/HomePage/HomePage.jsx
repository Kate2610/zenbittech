import React from 'react';
import { Link } from 'react-router-dom'; // Импортируйте компонент Link
import './HomePage.styles.css';

function HomePage() {
  return (
    <main className='main'>
      <div className="content">
        <h1>The chemical negatively charged</h1>
        <p className='info'>
          Numerous calculations predict, and experiments confirm, that the force field reflects the beam,
          while the mass defect is not formed. The chemical compound is negatively charged. While the mass defect is.
        </p>
        <Link to="/dashboard"> 
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </main>
  );
}

export default HomePage;