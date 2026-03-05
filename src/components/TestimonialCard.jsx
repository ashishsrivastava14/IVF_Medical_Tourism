import { Star, Quote } from 'lucide-react';
import CountryFlag from './CountryFlag';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
            ))}
          </div>
          <Quote className="w-8 h-8 text-primary-100 group-hover:text-primary-200 transition-colors" />
        </div>

        {/* Text */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <CountryFlag code={testimonial.country} />
                <span>{testimonial.treatment}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
