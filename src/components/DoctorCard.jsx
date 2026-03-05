import { Link } from 'react-router-dom';
import { Star, MapPin, Award } from 'lucide-react';
import CountryFlag from './CountryFlag';

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-5">
        <div className="flex gap-4">
          <img src={doctor.photo} alt={doctor.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
          <div className="min-w-0">
            <Link to={`/doctors/${doctor.id}`} className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors line-clamp-1">
              {doctor.name}
            </Link>
            <p className="text-sm text-primary-600 font-medium">{doctor.specialty}</p>
            <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
              <MapPin className="w-3.5 h-3.5" />
              <CountryFlag code={doctor.country} />
              <span>{doctor.city}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" /> {doctor.rating}
          </span>
          <span className="text-gray-500">{doctor.reviews} reviews</span>
          <span className="flex items-center gap-1 text-gray-500">
            <Award className="w-3.5 h-3.5" /> {doctor.experience} yrs
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {doctor.specializations.slice(0, 3).map(s => (
            <span key={s} className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full">{s}</span>
          ))}
          {doctor.specializations.length > 3 && (
            <span className="text-xs text-gray-400">+{doctor.specializations.length - 3}</span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">Success rate</span>
            <p className="font-bold text-green-600">{doctor.successRate}%</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Consultation</span>
            <p className="font-bold text-gray-900">${doctor.consultationFee}</p>
          </div>
          <Link to={`/doctors/${doctor.id}`} className="btn-primary text-sm">View Profile</Link>
        </div>
      </div>
    </div>
  );
}
