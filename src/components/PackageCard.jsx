import { Check, ArrowUpRight, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PackageCard({ pkg, clinicName, featured = false }) {
  const isHighlighted = pkg.popular || featured;

  return (
    <div className={`group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 ${
      isHighlighted
        ? 'bg-gradient-to-b from-primary-600 to-primary-700 text-white shadow-xl shadow-primary-500/20 hover:shadow-2xl hover:shadow-primary-500/30 scale-[1.02] lg:scale-105'
        : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl'
    }`}>
      {/* Popular tag */}
      {isHighlighted && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
            <Sparkles className="w-3 h-3" /> Popular
          </span>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Treatment tag */}
        <span className={`inline-flex self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
          isHighlighted ? 'bg-white/15 text-white/90' : 'bg-primary-50 text-primary-600'
        }`}>
          {pkg.treatment}
        </span>

        <h3 className={`text-xl font-bold ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
        <p className={`text-sm mt-1 ${isHighlighted ? 'text-primary-200' : 'text-gray-500'}`}>{clinicName}</p>

        {/* Price */}
        <div className="mt-5">
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-extrabold ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
              ${pkg.price.toLocaleString()}
            </span>
            <span className={`text-sm ${isHighlighted ? 'text-primary-200' : 'text-gray-400'}`}>{pkg.currency}</span>
          </div>
          <div className={`flex items-center gap-1 mt-1 text-xs ${isHighlighted ? 'text-primary-200' : 'text-gray-400'}`}>
            <Clock className="w-3 h-3" />
            <span>{pkg.duration}</span>
          </div>
        </div>

        {/* Divider */}
        <div className={`my-5 h-px ${isHighlighted ? 'bg-white/15' : 'bg-gray-100'}`} />

        {/* Includes */}
        <ul className="space-y-2.5 flex-1">
          {pkg.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                isHighlighted ? 'bg-white/15' : 'bg-emerald-50'
              }`}>
                <Check className={`w-3 h-3 ${isHighlighted ? 'text-emerald-300' : 'text-emerald-500'}`} />
              </div>
              <span className={isHighlighted ? 'text-primary-100' : 'text-gray-600'}>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className={`mt-6 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
          isHighlighted
            ? 'bg-white text-primary-700 hover:bg-gray-100 shadow-lg'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}>
          Enquire Now
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
