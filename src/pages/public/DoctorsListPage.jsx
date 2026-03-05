import { useState, useMemo } from 'react';
import { doctors, countries } from '../../data/mockData';
import DoctorCard from '../../components/DoctorCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function DoctorsListPage() {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const specialties = [...new Set(doctors.flatMap(d => d.specializations))];

  const filtered = useMemo(() => {
    let list = doctors.filter(d => {
      const matchSearch = !search || d.name.toLowerCase().includes(search.toLowerCase()) || d.city.toLowerCase().includes(search.toLowerCase());
      const matchCountry = !country || d.country === country;
      const matchSpecialty = !specialty || d.specializations.includes(specialty);
      return matchSearch && matchCountry && matchSpecialty;
    });

    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'experience') list.sort((a, b) => b.experience - a.experience);
    else if (sortBy === 'price-low') list.sort((a, b) => a.consultationFee - b.consultationFee);
    else if (sortBy === 'success') list.sort((a, b) => b.successRate - a.successRate);

    return list;
  }, [search, country, specialty, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900">Find a Fertility Specialist</h1>
        <p className="mt-2 text-gray-500">Browse our vetted network of IVF doctors across 6+ countries</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border p-4 mb-8 flex flex-wrap gap-3 items-center">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or city…" className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
        </div>
        <select value={country} onChange={e => setCountry(e.target.value)} className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300">
          <option value="">All Countries</option>
          {countries.filter(c => doctors.some(d => d.country === c.code)).map(c => (
            <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
          ))}
        </select>
        <select value={specialty} onChange={e => setSpecialty(e.target.value)} className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300">
          <option value="">All Specializations</option>
          {specialties.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300">
          <option value="rating">Sort: Rating</option>
          <option value="experience">Sort: Experience</option>
          <option value="success">Sort: Success Rate</option>
          <option value="price-low">Sort: Price (Low)</option>
        </select>
      </div>

      {/* Results */}
      <p className="text-sm text-gray-500 mb-4">{filtered.length} doctor{filtered.length !== 1 ? 's' : ''} found</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(d => <DoctorCard key={d.id} doctor={d} />)}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <SlidersHorizontal className="w-12 h-12 mx-auto mb-3" />
          <p className="text-lg">No doctors match your filters.</p>
          <button onClick={() => { setSearch(''); setCountry(''); setSpecialty(''); }} className="mt-3 text-primary-600 font-medium">Clear all filters</button>
        </div>
      )}
    </div>
  );
}
