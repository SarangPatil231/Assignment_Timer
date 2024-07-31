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
      <div> {remainingTime.toFixed(2)}</div>
      <div > {timer.createdAt.toLocaleString()}</div>
      <button onClick={() => removeTimer(timer.id)}>Delete</button>
    </div>
  );
}

export default Timer;
