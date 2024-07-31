import React, { useState } from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';
import './App.css';

function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = (seconds) => {
    const newTimer = {
      id: Date.now(),
      createdAt: new Date(),
      remainingTime: seconds,
    };
    setTimers([...timers, newTimer]);
  };

  const removeTimer = (id) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  return (
    <div className="App">
      <div className="left">
        {timers.map(timer => (
          <Timer key={timer.id} timer={timer} removeTimer={removeTimer} />
        ))}
      </div>
      <div className="right">
        <TimerForm addTimer={addTimer} />
      </div>
    </div>
  );
}

export default App;
