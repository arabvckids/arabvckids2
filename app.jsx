// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    // Send email and pin to backend
    console.log('Email:', email, 'PIN:', pin);
  };

  return (
    <div className="App">
      <h1>Parental Control Dashboard</h1>
      <div className="control-panel">
        <input 
          type="email" 
          placeholder="Parent Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Enter PIN" 
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button onClick={handleSubmit}>Set Controls</button>
      </div>
    </div>
  );
}

export default App;

