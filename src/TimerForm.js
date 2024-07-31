import React, { useState } from 'react';

function TimerForm({ addTimer }) {
  const [seconds, setSeconds] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTimer(parseFloat(seconds));
    setSeconds('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <h3>New Timer</h3>
      <input
        type="number"
        step= "0.01"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        placeholder="Enter Seconds"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TimerForm;
