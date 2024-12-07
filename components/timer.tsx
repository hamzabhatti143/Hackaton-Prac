"use client"
// src/components/CountdownTimer.tsx
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-5 bg-black p-5 rounded-lg">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col justify-center items-center w-20 h-20 bg-white rounded-full shadow-md"
        >
          <span className="text-lg font-bold text-black">
            {value < 10 ? `0${value}` : value}
          </span>
          <span className="text-sm text-gray-500 capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
