import { useState } from 'react';
import { clinics, packages as allPackages, treatments, countries } from '../../data/mockData';
import PackageCard from '../../components/PackageCard';
import CountryFlag from '../../components/CountryFlag';

export default function PackageBuilderPage() {
  const [treatment, setTreatment] = useState('');
  const [country, setCountry] = useState('');

  const filtered = allPackages.filter(p => {
    const clinic = clinics.find(c => c.id === p.clinicId);
    const matchTreatment = !treatment || p.treatment.toLowerCase().includes(treatment.toLowerCase());
    const matchCountry = !country || clinic?.country === country;
    return matchTreatment && matchCountry;
  });

  const uniqueCountries = [...new Set(clinics.map(c => c.country))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Treatment Packages</h1>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">All-inclusive IVF packages with transparent pricing. Compare and find the right package for you.</p>
      </div>

      <div className="bg-white rounded-xl border p-4 mb-8 flex flex-wrap gap-3 justify-center">
        <select value={treatment} onChange={e => setTreatment(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">
          <option value="">All Treatments</option>
          {treatments.map(t => <option key={t.slug} value={t.name}>{t.name}</option>)}
        </select>
        <select value={country} onChange={e => setCountry(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">
          <option value="">All Countries</option>
          {uniqueCountries.map(c => {
            const countryData = countries.find(cn => cn.code === c);
            return <option key={c} value={c}>{countryData?.flag} {countryData?.name || c}</option>;
          })}
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(p => (
          <PackageCard key={p.id} pkg={p} clinicName={clinics.find(c => c.id === p.clinicId)?.name} />
        ))}
      </div>
      {filtered.length === 0 && <p className="text-center py-12 text-gray-400">No packages match your selection.</p>}
    </div>
  );
}
