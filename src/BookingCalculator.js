import React, { useState, useEffect } from 'react';
import './BookingCalculator.css';

function BookingCalculator({ onNavigate }) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [quoteResult, setQuoteResult] = useState(null);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendarLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCalculate = (e) => {
    e.preventDefault();
    // In a real application, this would call an API to calculate the actual quote
    // For now, we'll simulate a response
    setQuoteResult({
      distance: '57.7 miles',
      duration: '1 hr 4 min',
      price: '$57.70' // Assuming $1 per mile as per your pricing in the routes section
    });
  };

  return (
    <div className="calculator-page">
      <div className="calculator-container">
        <div className="calculator-card">
          <h1>QUOTE CALCULATOR</h1>
          
          <form onSubmit={handleCalculate}>
            <div className="form-group">
              <label>
                <div className="icon-label">
                  <span className="location-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#E91E63"/>
                    </svg>
                  </span>
                  PICK UP
                </div>
                <div className="input-container">
                  <input 
                    type="text" 
                    placeholder="Enter Location" 
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    required
                  />
                  <span className="dropdown-icon">▼</span>
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>
                <div className="icon-label">
                  <span className="location-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#E91E63"/>
                    </svg>
                  </span>
                  DROP OFF
                </div>
                <div className="input-container">
                  <input 
                    type="text" 
                    placeholder="Enter Location" 
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    required
                  />
                  <span className="dropdown-icon">▼</span>
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>
                <div className="icon-label">
                  <span className="calendar-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="#666666"/>
                    </svg>
                  </span>
                  DATE
                </div>
                <div className="input-container">
                  <input 
                    type="text" 
                    placeholder="Select Date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                  <span className="dropdown-icon">▼</span>
                </div>
              </label>
            </div>

            <div className="form-group">
              <label>
                <div className="icon-label">
                  <span className="time-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#666666"/>
                    </svg>
                  </span>
                  TIME
                </div>
                <div className="input-container">
                  <input 
                    type="text" 
                    placeholder="Select Time" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                  <span className="dropdown-icon">▼</span>
                </div>
              </label>
            </div>

            <button type="submit" className="calculate-btn">CALCULATE ESTIMATE</button>
          </form>

          {quoteResult && (
            <div className="quote-result">
              <div className="trip-details">
                <span className="car-icon">🚗</span>
                <div className="trip-info">
                  <span>{quoteResult.duration}</span>
                  <span>{quoteResult.distance}</span>
                </div>
              </div>
              <div className="price-estimate">
                <span>Estimated Price:</span>
                <span className="price">{quoteResult.price}</span>
              </div>
            </div>
          )}
        </div>

        <div className="map-placeholder">
          <img src="quote-map.png" alt="Map with route" />
        </div>
      </div>

      {/* Schedule a Ride section */}
      <div className="schedule-section">
        <h2>Schedule a Ride</h2>
        <div className="calendly-container">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/d/ysc-wkv-hnm"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BookingCalculator;