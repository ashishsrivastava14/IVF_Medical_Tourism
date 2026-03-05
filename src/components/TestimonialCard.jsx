import { Star } from 'lucide-react';
import CountryFlag from './CountryFlag';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">"{testimonial.text}"</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CountryFlag code={testimonial.country} />
          <span className="font-medium text-gray-900 text-sm">{testimonial.name}</span>
        </div>
        <span className="text-xs text-gray-400">{testimonial.treatment}</span>
      </div>
    </div>
  );
}
