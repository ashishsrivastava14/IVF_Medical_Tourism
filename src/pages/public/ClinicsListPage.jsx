import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { clinics, countries } from '../../data/mockData';
import { Star, MapPin, Search } from 'lucide-react';
import CountryFlag from '../../components/CountryFlag';

export default function ClinicsListPage() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState(searchParams.get('country') || '');

  const filtered = useMemo(() => {
    return clinics.filter(c => {
      const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.city.toLowerCase().includes(search.toLowerCase());
      const matchCountry = !country || c.country === country;
      return matchSearch && matchCountry;
    });
  }, [search, country]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-display font-bold text-gray-900">Partner Clinics</h1>
      <p className="mt-2 text-gray-500 mb-8">JCI and ESHRE accredited fertility centers across the globe</p>

      <div className="bg-white rounded-xl border p-4 mb-8 flex flex-wrap gap-3">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search clinics…" className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
        </div>
        <select value={country} onChange={e => setCountry(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">
          <option value="">All Countries</option>
          {countries.filter(c => clinics.some(cl => cl.country === c.code)).map(c => (
            <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(clinic => (
          <div key={clinic.id} className="bg-white rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden">
            <img src={clinic.logo} alt={clinic.name} className="w-full h-44 object-cover" />
            <div className="p-5">
              <Link to={`/clinics/${clinic.id}`} className="text-lg font-bold text-gray-900 hover:text-primary-600 transition">{clinic.name}</Link>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <MapPin className="w-3.5 h-3.5" />
                <CountryFlag code={clinic.country} />
                <span>{clinic.city}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center gap-1 text-yellow-500 text-sm"><Star className="w-4 h-4 fill-current" /> {clinic.rating}</span>
                <span className="text-xs text-gray-400">{clinic.reviews} reviews</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {clinic.accreditations.slice(0, 2).map(a => (
                  <span key={a} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{a}</span>
                ))}
              </div>
              <div className="mt-3 text-sm text-gray-500">Est. {clinic.established} · {clinic.treatmentsOffered.length} treatments</div>
              <Link to={`/clinics/${clinic.id}`} className="mt-4 block text-center btn-primary text-sm w-full">View Clinic</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
