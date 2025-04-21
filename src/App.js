import React from 'react';
import './App.css';
import logo from './logo.svg'; // You'll need to replace this with your actual logo

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">SafeRide</div>
        <nav className="nav-links">
          <a href="#pricing">Pricing</a>
          <a href="#calculator">Quote Calculator</a>
          <a href="#scheduling">Scheduling</a>
          <a href="#" className="active">Home</a>
        </nav>
      </header>
      
      <section className="hero">
        <div className="logo-container">
          {/* Replace this with your actual logo */}
          <img src="/logo-placeholder.png" alt="SafeRide Logo" className="main-logo" />
        </div>
      </section>

      <section className="routes-section">
        <h1>Common Routes</h1>
        
        <div className="routes-container">
          <div className="routes-list">
            <div className="route-item">
              <h2>Ithaca to Rochester</h2>
              <p className="price">$100, one-way</p>
            </div>
            
            <div className="route-item">
              <h2>Ithaca to Syracuse</h2>
              <p className="price">$120 single rider, $90 for multiple riders</p>
            </div>
            
            <div className="route-item">
              <h2>Long distance routes</h2>
              <p className="price">$1 per mile, round-trip</p>
            </div>
            
            <button className="quote-btn">Get a Quote</button>
          </div>
          
          <div className="map-container">
            {/* Replace this with your actual map image */}
            <img src="/map-placeholder.png" alt="Map with locations" className="map-image" />
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} SafeRide. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;