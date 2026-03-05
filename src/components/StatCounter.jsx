import { useEffect, useRef, useState } from 'react';
import { Baby, Building2, Globe, TrendingUp } from 'lucide-react';

const iconMap = {
  'Babies Born': Baby,
  'Partner Clinics': Building2,
  'Countries Served': Globe,
  'Success Rate': TrendingUp,
};

const colorMap = {
  0: 'from-primary-500 to-sky-400',
  1: 'from-accent-500 to-pink-400',
  2: 'from-emerald-500 to-teal-400',
  3: 'from-amber-500 to-orange-400',
};

export default function StatCounter({ value, suffix = '', label, index = 0 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);
  const Icon = iconMap[label] || TrendingUp;

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
    <div ref={ref} className="flex flex-col items-center gap-2 py-5 px-4">
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colorMap[index % 4]} flex items-center justify-center shadow-sm mb-1`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tabular-nums">
        {display.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  );
}
