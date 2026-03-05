import { Link } from 'react-router-dom';
import { Star, MapPin, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import CountryFlag from './CountryFlag';

export default function DoctorCard({ doctor }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-400 to-pink-400" />

      <div className="p-6">
        <div className="flex gap-4">
          <div className="relative">
            <img src={doctor.photo} alt={doctor.name} className="w-[72px] h-[72px] rounded-2xl object-cover shrink-0 ring-2 ring-gray-100" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <Link to={`/doctors/${doctor.id}`} className="text-lg font-bold text-gray-900 hover:text-primary-600 transition-colors line-clamp-1 flex items-center gap-1">
              {doctor.name}
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary-500" />
            </Link>
            <p className="text-sm text-primary-600 font-semibold">{doctor.specialty}</p>
            <div className="flex items-center gap-1.5 mt-1.5 text-sm text-gray-500">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <CountryFlag code={doctor.country} />
              <span>{doctor.city}</span>
            </div>
          </div>
        </div>

        {/* Rating row */}
        <div className="mt-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(doctor.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
          ))}
          <span className="text-sm font-semibold text-gray-700 ml-1">{doctor.rating}</span>
          <span className="text-xs text-gray-400 ml-1">({doctor.reviews})</span>
          <span className="text-gray-300 mx-2">·</span>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Award className="w-3.5 h-3.5 text-primary-400" /> {doctor.experience} yrs
          </span>
        </div>

        {/* Specializations */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {doctor.specializations.slice(0, 3).map(s => (
            <span key={s} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-lg border border-gray-100 font-medium">{s}</span>
          ))}
          {doctor.specializations.length > 3 && (
            <span className="text-xs text-gray-400 px-1 py-1">+{doctor.specializations.length - 3}</span>
          )}
        </div>

        {/* Stats bar */}
        <div className="mt-4 flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
          <div className="flex-1 text-center">
            <p className="text-lg font-extrabold text-emerald-600">{doctor.successRate}%</p>
            <p className="text-[11px] text-gray-400 font-medium">Success Rate</p>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="flex-1 text-center">
            <p className="text-lg font-extrabold text-gray-900">${doctor.consultationFee}</p>
            <p className="text-[11px] text-gray-400 font-medium">Consultation</p>
          </div>
        </div>

        {/* CTA */}
        <Link to={`/doctors/${doctor.id}`}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-primary-50 text-primary-700 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-100 transition-colors group-hover:bg-primary-600 group-hover:text-white"
        >
          View Profile
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
