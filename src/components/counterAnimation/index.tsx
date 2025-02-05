import React, { useEffect, useState } from "react";

interface CounterAnimationProps {
  value: number;
  duration?: number; // Optional: duration in seconds
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({
  value,
  duration = 1000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value < 1) {
      setCount(value);
      return;
    }
    let start = 0;
    const increment = value / (duration / 16); // Update every 16ms (~60fps)

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16); // ~60 FPS

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span className="">{count.toLocaleString()}</span>;
};
