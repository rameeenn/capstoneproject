import React, { useState, useEffect } from 'react';
import { fetchAvailableTimes } from './mockApi';

const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '49SE57',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '49SE57'
  };

  const inputStyle = {
    width: '90%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
    backgroundColor: 'FBDABB'
  };

  const selectStyle = {
    width: '90%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignItems: 'center',
  };


function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    fetchAvailableTimes().then((times) => {
      setAvailableTimes(times);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { date, time, numGuests, occasion });
  };

  return (
    <div>
     <h1 style={{
        textAlign: 'center', justifyContent: 'center',
     }}>Reservations</h1>
      <h2 style={{
        textAlign: 'center', justifyContent: 'center',
      }}>Book a Table</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label style={labelStyle}>Date:</label>
          <input style={inputStyle} type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label style={labelStyle}>Time:</label>
          <select style={selectStyle} value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">Select Time</option>
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Number of Guests:</label>
          <input style={inputStyle} type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} required />
        </div>
        <div>
          <label style={labelStyle}>Occasion:</label>
          <select style={selectStyle} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="" required >Select Occasion</option>
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
          </select>
        </div>
        <button style={buttonStyle} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
