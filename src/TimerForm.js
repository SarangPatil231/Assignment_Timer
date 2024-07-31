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
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        placeholder="Enter seconds"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TimerForm;
