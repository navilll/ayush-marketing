"use client";
import CountUp from "react-countup";
import { useRef, useState, useEffect } from "react";

const Counter = ({ end, decimals }) => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="count">
      {started && (
        <CountUp end={end ?? 100} duration={3} decimals={decimals ?? 0} />
      )}
    </span>
  );
};

export default Counter;