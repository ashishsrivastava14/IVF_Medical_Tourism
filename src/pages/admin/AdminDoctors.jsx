import { doctors } from '../../data/mockData';
import { Star, MapPin } from 'lucide-react';
import CountryFlag from '../../components/CountryFlag';

export default function AdminDoctors() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Manage Doctors</h1>
          <p className="text-gray-500 text-sm mt-1">{doctors.length} registered doctors</p>
        </div>
        <button className="btn-primary text-sm">+ Add Doctor</button>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Doctor</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Specialty</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Location</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Rating</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Success</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Experience</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(d => (
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <img src={d.photo} alt="" className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-medium text-gray-900">{d.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-500">{d.specialty}</td>
                <td className="px-5 py-3"><CountryFlag code={d.country} showName /> · {d.city}</td>
                <td className="px-5 py-3 text-center"><Star className="w-3.5 h-3.5 text-yellow-500 fill-current inline" /> {d.rating}</td>
                <td className="px-5 py-3 text-center text-green-600 font-medium">{d.successRate}%</td>
                <td className="px-5 py-3 text-center text-gray-500">{d.experience} yrs</td>
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
