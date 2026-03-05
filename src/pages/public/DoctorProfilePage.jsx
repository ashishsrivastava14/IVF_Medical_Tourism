import { useParams, Link } from 'react-router-dom';
import { doctors, clinics } from '../../data/mockData';
import { Star, MapPin, Award, GraduationCap, Calendar, Languages, ArrowLeft } from 'lucide-react';
import CountryFlag from '../../components/CountryFlag';

export default function DoctorProfilePage() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === Number(id));
  if (!doctor) return <div className="max-w-3xl mx-auto py-20 text-center text-gray-500">Doctor not found.</div>;

  const clinic = clinics.find(c => c.id === doctor.clinicId);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link to="/doctors" className="inline-flex items-center gap-1 text-sm text-primary-600 hover:underline mb-6">
        <ArrowLeft className="w-4 h-4" /> All Doctors
      </Link>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-8 text-white">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img src={doctor.photo} alt={doctor.name} className="w-28 h-28 rounded-xl object-cover border-4 border-white/30" />
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-display font-bold">{doctor.name}</h1>
              <p className="text-primary-200 font-medium mt-1">{doctor.specialty}</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-primary-100">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /><CountryFlag code={doctor.country} /> {doctor.city}</span>
                <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {doctor.experience} yrs experience</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-300 fill-current" /> {doctor.rating} ({doctor.reviews} reviews)</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-primary-200">Consultation fee</p>
              <p className="text-3xl font-bold">${doctor.consultationFee}</p>
              <Link to="/contact" className="mt-3 inline-block btn-accent text-sm">Book Consultation</Link>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Bio */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">About</h2>
            <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Success Rate', value: `${doctor.successRate}%`, color: 'text-green-600' },
              { label: 'Procedures', value: doctor.proceduresPerformed.toLocaleString(), color: 'text-primary-600' },
              { label: 'Experience', value: `${doctor.experience} Years`, color: 'text-purple-600' },
              { label: 'Rating', value: `${doctor.rating}/5`, color: 'text-yellow-600' },
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"><GraduationCap className="w-5 h-5" /> Education & Training</h2>
            <ul className="space-y-2">
              {doctor.education.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Specializations</h2>
            <div className="flex flex-wrap gap-2">
              {doctor.specializations.map(s => (
                <span key={s} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"><Languages className="w-5 h-5" /> Languages</h2>
            <div className="flex gap-2">
              {doctor.languages.map(l => (
                <span key={l} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{l}</span>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"><Calendar className="w-5 h-5" /> Availability</h2>
            <div className="flex gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <span key={day} className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium ${doctor.availability.includes(day) ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                  {day}
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">Next available: <span className="font-medium text-gray-900">{doctor.nextAvailable}</span></p>
          </div>

          {/* Clinic */}
          {clinic && (
            <div className="bg-gray-50 rounded-xl p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Practice Location</h2>
              <Link to={`/clinics/${clinic.id}`} className="text-primary-600 font-medium hover:underline">{clinic.name}</Link>
              <p className="text-sm text-gray-500 mt-1">{clinic.address}</p>
              <div className="flex gap-2 mt-2">
                {clinic.accreditations.map(a => (
                  <span key={a} className="text-xs bg-white border px-2 py-0.5 rounded">{a}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
