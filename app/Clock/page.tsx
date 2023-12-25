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
    <div style={{ position: 'relative', width: '20px', height: '20px' }}>
      <svg width="10" height="10" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" stroke="#000" strokeWidth="4" fill="none" />

        {/* Hour hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + 50 * Math.cos((hourDeg * Math.PI) / 180)}
          y2={100 + 50 * Math.sin((hourDeg * Math.PI) / 180)}
          stroke="#000"
          strokeWidth="4"
        />

        {/* Minute hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + 80 * Math.cos((minuteDeg * Math.PI) / 180)}
          y2={100 + 80 * Math.sin((minuteDeg * Math.PI) / 180)}
          stroke="#000"
          strokeWidth="4"
          className='rounded-full'
        />

        {/* Second hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + 80 * Math.cos((secondDeg * Math.PI) / 180)}
          y2={100 + 80 * Math.sin((secondDeg * Math.PI) / 180)}
          stroke="#c2af03"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default AnalogClock;
