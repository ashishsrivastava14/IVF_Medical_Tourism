import { useParams, Link } from 'react-router-dom';
import { clinics, doctors, packages as allPackages } from '../../data/mockData';
import { Star, MapPin, Phone, Mail, Calendar, ShieldCheck, ArrowLeft } from 'lucide-react';
import CountryFlag from '../../components/CountryFlag';
import DoctorCard from '../../components/DoctorCard';
import PackageCard from '../../components/PackageCard';

export default function ClinicProfilePage() {
  const { id } = useParams();
  const clinic = clinics.find(c => c.id === Number(id));
  if (!clinic) return <div className="max-w-3xl mx-auto py-20 text-center text-gray-500">Clinic not found.</div>;

  const clinicDoctors = doctors.filter(d => clinic.doctors.includes(d.id));
  const clinicPackages = allPackages.filter(p => clinic.packages?.includes(p.id));

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link to="/clinics" className="inline-flex items-center gap-1 text-sm text-primary-600 hover:underline mb-6">
        <ArrowLeft className="w-4 h-4" /> All Clinics
      </Link>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <img src={clinic.logo} alt={clinic.name} className="w-full h-56 object-cover" />

        <div className="p-6 md:p-8 space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-gray-900">{clinic.name}</h1>
              <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /><CountryFlag code={clinic.country} /> {clinic.city}</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500 fill-current" /> {clinic.rating} ({clinic.reviews})</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Est. {clinic.established}</span>
              </div>
            </div>
            <Link to="/contact" className="btn-primary self-start">Enquire Now</Link>
          </div>

          <p className="text-gray-600 leading-relaxed">{clinic.description}</p>

          {/* Accreditations */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-600" /> Accreditations</h2>
            <div className="flex flex-wrap gap-2">
              {clinic.accreditations.map(a => (
                <span key={a} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{a}</span>
              ))}
            </div>
          </div>

          {/* Success rates */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Success Rates</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Under 35', val: clinic.successRates.under35 },
                { label: '35–37', val: clinic.successRates['35to37'] },
                { label: '38–40', val: clinic.successRates['38to40'] },
                { label: 'Over 40', val: clinic.successRates.over40 },
              ].map(s => (
                <div key={s.label} className="bg-primary-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary-700">{s.val}%</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Treatments Offered</h2>
            <div className="flex flex-wrap gap-2">
              {clinic.treatmentsOffered.map(t => (
                <span key={t} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{t}</span>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Facilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {clinic.facilities.map(f => (
                <span key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-primary-400 rounded-full" /> {f}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /> {clinic.address}</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-400" /> {clinic.phone}</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-400" /> {clinic.email}</p>
            </div>
          </div>

          {/* Doctors */}
          {clinicDoctors.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Our Doctors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {clinicDoctors.map(d => <DoctorCard key={d.id} doctor={d} />)}
              </div>
            </div>
          )}

          {/* Packages */}
          {clinicPackages.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Treatment Packages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {clinicPackages.map(p => <PackageCard key={p.id} pkg={p} clinicName={clinic.name} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
