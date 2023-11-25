"use client"
import React, { useEffect, useState } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours + minutes / 60) * 30;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" stroke="#000" strokeWidth="4" fill="none" />

        {/* Hour hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + 40 * Math.cos((hourDeg * Math.PI) / 180)}
          y2={100 + 40 * Math.sin((hourDeg * Math.PI) / 180)}
          stroke="#000"
          strokeWidth="6"
        />

        {/* Minute hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + 60 * Math.cos((minuteDeg * Math.PI) / 180)}
          y2={100 + 60 * Math.sin((minuteDeg * Math.PI) / 180)}
          stroke="#000"
          strokeWidth="4"
        />

        {/* Second hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + 70 * Math.cos((secondDeg * Math.PI) / 180)}
          y2={100 + 70 * Math.sin((secondDeg * Math.PI) / 180)}
          stroke="#FF0000"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default AnalogClock;
