import { Link } from 'react-router-dom';
import { visaInfo, hotels, countries } from '../../data/mockData';
import CountryFlag from '../../components/CountryFlag';
import { Plane, Hotel, Stamp, ShieldCheck, HeartPulse, Globe } from 'lucide-react';

export default function MedicalTourismPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold">Medical Tourism Guide</h1>
          <p className="mt-4 text-primary-100 text-lg leading-relaxed">
            Everything you need to know about traveling abroad for IVF treatment — from visa requirements to hotel recommendations and what to expect on arrival.
          </p>
          <Link to="/contact" className="mt-6 inline-block btn-accent">Plan My Trip</Link>
        </div>
      </div>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: HeartPulse, step: '1', title: 'Consult Online', desc: 'Free video consultation with our fertility specialist to discuss your needs.' },
            { icon: Globe, step: '2', title: 'Choose Destination', desc: 'Pick from our vetted clinics in 6+ countries based on treatment and budget.' },
            { icon: Plane, step: '3', title: 'Travel & Treat', desc: 'We arrange visa, flights, hotel, and local transport. You focus on your health.' },
            { icon: ShieldCheck, step: '4', title: 'Follow-Up Care', desc: 'Post-treatment support and coordination with your local doctor back home.' },
          ].map(item => (
            <div key={item.step} className="bg-white rounded-xl border p-5 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-bold flex items-center justify-center mx-auto mb-2">{item.step}</div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visa info */}
      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center gap-2"><Stamp className="w-6 h-6" /> Visa Requirements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaInfo.map(v => (
            <div key={v.country} className="bg-white rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-3">
                <CountryFlag code={v.country} showName />
              </div>
              <p className="text-sm font-semibold text-primary-700">{v.visaType}</p>
              <p className="text-sm text-gray-500 mt-1">Processing: {v.processingTime}</p>
              <div className="mt-3">
                <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Documents Needed</p>
                <ul className="space-y-1">
                  {v.documents.map(d => (
                    <li key={d} className="text-sm text-gray-600 flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-3 text-xs text-gray-400 italic">{v.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hotels */}
      <section className="mb-16">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center gap-2"><Hotel className="w-6 h-6" /> Recommended Hotels</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-xl border">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3">Hotel</th>
                <th className="text-left px-4 py-3">City</th>
                <th className="text-center px-4 py-3">Stars</th>
                <th className="text-right px-4 py-3">Per Night</th>
                <th className="text-left px-4 py-3">Distance</th>
                <th className="text-left px-4 py-3">Amenities</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map(h => (
                <tr key={h.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{h.name}</td>
                  <td className="px-4 py-3"><CountryFlag code={h.country} /> {h.city}</td>
                  <td className="px-4 py-3 text-center text-yellow-500">{'★'.repeat(h.stars)}</td>
                  <td className="px-4 py-3 text-right font-medium">${h.pricePerNight}</td>
                  <td className="px-4 py-3 text-gray-500">{h.distanceToClinic}</td>
                  <td className="px-4 py-3"><div className="flex flex-wrap gap-1">{h.amenities.map(a => <span key={a} className="text-xs bg-gray-100 px-2 py-0.5 rounded">{a}</span>)}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
