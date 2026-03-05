import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PackageCard({ pkg, clinicName }) {
  return (
    <div className={`bg-white rounded-xl border-2 ${pkg.popular ? 'border-primary-500 shadow-lg' : 'border-gray-200 shadow-sm'} overflow-hidden flex flex-col`}>
      {pkg.popular && (
        <div className="bg-primary-500 text-white text-xs font-semibold text-center py-1">Most Popular</div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{clinicName}</p>
        <p className="text-xs text-primary-600 font-medium mt-1">{pkg.treatment}</p>

        <div className="mt-4">
          <span className="text-3xl font-bold text-gray-900">${pkg.price.toLocaleString()}</span>
          <span className="text-sm text-gray-500 ml-1">{pkg.currency}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Duration: {pkg.duration}</p>

        <ul className="mt-4 space-y-2 flex-1">
          {pkg.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link to="/contact" className={`mt-6 w-full text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${pkg.popular ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
