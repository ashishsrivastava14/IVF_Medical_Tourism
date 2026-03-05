import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ value, suffix = '', label }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const end = value;
          const duration = 2000;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setDisplay(end); clearInterval(timer); }
            else setDisplay(start);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-white">
        {display.toLocaleString()}{suffix}
      </p>
      <p className="mt-1 text-primary-200 text-sm">{label}</p>
    </div>
  );
}
