import React, { useEffect, useState } from 'react';

function Timer({ timer, removeTimer }) {
  const [remainingTime, setRemainingTime] = useState(timer.remainingTime);

  useEffect(() => {
    if (remainingTime <= 0) {
      removeTimer(timer.id);
      return;
    }
    const interval = setInterval(() => {
      setRemainingTime(prev => prev - 0.01);
    }, 10);
    return () => clearInterval(interval);
  }, [remainingTime, removeTimer, timer.id]);

  return (
    <div className="timer">
      <div id='remainingTime'><b> {remainingTime.toFixed(2)}</b></div>
      <div > {timer.createdAt.toLocaleString()}</div>
      <button id='btn-close' onClick={() => removeTimer(timer.id)}> &times; </button>
    </div>
  );
}

export default Timer;
