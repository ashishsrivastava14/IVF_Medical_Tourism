import { useState } from 'react';
import { costComparison, treatments } from '../../data/mockData';
import CountryFlag from '../../components/CountryFlag';
import { Calculator, ArrowDown } from 'lucide-react';

export default function CostCalculatorPage() {
  const [homeCountry, setHomeCountry] = useState('US');
  const [treatment, setTreatment] = useState('ivf');
  const [destCountry, setDestCountry] = useState('SG');

  const treatmentKey = { ivf: 'ivf', icsi: 'icsi', 'egg-freezing': 'eggFreezing', 'egg-donation': 'eggDonation', pgt: 'pgt' };
  const key = treatmentKey[treatment] || 'ivf';

  const homeData = costComparison.find(c => c.country === homeCountry);
  const destData = costComparison.find(c => c.country === destCountry);

  const homeCost = homeData?.[key] || 0;
  const destCost = destData?.[key] || 0;
  const savings = homeCost - destCost;
  const savingsPercent = homeCost > 0 ? Math.round((savings / homeCost) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">IVF Cost Calculator</h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">See how much you can save by traveling abroad for fertility treatment.</p>
      </div>

      {/* Calculator inputs */}
      <div className="bg-white rounded-xl border shadow-sm p-6 md:p-8 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Home Country</label>
            <select value={homeCountry} onChange={e => setHomeCountry(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm">
              {costComparison.map(c => <option key={c.country} value={c.country}>{c.countryName}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Treatment</label>
            <select value={treatment} onChange={e => setTreatment(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm">
              {treatments.filter(t => treatmentKey[t.slug]).map(t => <option key={t.slug} value={t.slug}>{t.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
            <select value={destCountry} onChange={e => setDestCountry(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm">
              {costComparison.filter(c => c.country !== homeCountry).map(c => <option key={c.country} value={c.country}>{c.countryName}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <CountryFlag code={homeCountry} showName />
          <p className="text-xs text-gray-500 mt-2">Cost at Home</p>
          <p className="text-3xl font-bold text-red-600 mt-1">${homeCost.toLocaleString()}</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <ArrowDown className="w-8 h-8 text-green-500 mx-auto" />
            <p className="text-2xl font-bold text-green-600 mt-2">Save ${savings.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{savingsPercent}% savings</p>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <CountryFlag code={destCountry} showName />
          <p className="text-xs text-gray-500 mt-2">Cost Abroad</p>
          <p className="text-3xl font-bold text-green-600 mt-1">${destCost.toLocaleString()}</p>
        </div>
      </div>

      {/* Comparison table */}
      <div className="mt-10 bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="text-lg font-bold text-gray-900">Full Country Comparison</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Country</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500">IVF</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500">ICSI</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500">Egg Donation</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500">Egg Freezing</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500">PGT</th>
              </tr>
            </thead>
            <tbody>
              {costComparison.map(c => (
                <tr key={c.country} className={`border-t hover:bg-gray-50 ${c.country === destCountry ? 'bg-green-50' : ''}`}>
                  <td className="px-4 py-3 font-medium"><CountryFlag code={c.country} showName /></td>
                  <td className="px-4 py-3 text-right">${c.ivf.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">${c.icsi.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">${c.eggDonation.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">${c.eggFreezing.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">${c.pgt.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
