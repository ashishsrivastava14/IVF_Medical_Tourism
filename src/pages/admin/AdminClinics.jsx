import { clinics } from '../../data/mockData';
import { Star, MapPin } from 'lucide-react';
import CountryFlag from '../../components/CountryFlag';

export default function AdminClinics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Manage Clinics</h1>
          <p className="text-gray-500 text-sm mt-1">{clinics.length} partner clinics</p>
        </div>
        <button className="btn-primary text-sm">+ Add Clinic</button>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Clinic</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Location</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Rating</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Reviews</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Accreditations</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {clinics.map(c => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-gray-900">{c.name}</td>
                <td className="px-5 py-3"><CountryFlag code={c.country} showName /> · {c.city}</td>
                <td className="px-5 py-3 text-center"><Star className="w-3.5 h-3.5 text-yellow-500 fill-current inline" /> {c.rating}</td>
                <td className="px-5 py-3 text-center text-gray-500">{c.reviews}</td>
                <td className="px-5 py-3">
                  <div className="flex flex-wrap gap-1">{c.accreditations.slice(0, 2).map(a => <span key={a} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded">{a}</span>)}</div>
                </td>
                <td className="px-5 py-3 text-right">
                  <button className="text-primary-600 text-sm hover:underline mr-3">Edit</button>
                  <button className="text-red-500 text-sm hover:underline">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
