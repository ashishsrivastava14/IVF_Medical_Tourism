import { hotels } from '../../data/mockData';
import CountryFlag from '../../components/CountryFlag';

export default function AdminHotels() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Hotel Partners</h1>
          <p className="text-gray-500 text-sm mt-1">{hotels.length} partner hotels</p>
        </div>
        <button className="btn-primary text-sm">+ Add Hotel</button>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Hotel</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Location</th>
              <th className="text-center px-5 py-3 font-medium text-gray-500">Stars</th>
              <th className="text-right px-5 py-3 font-medium text-gray-500">Per Night</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Distance</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Amenities</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {hotels.map(h => (
              <tr key={h.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-gray-900">{h.name}</td>
                <td className="px-5 py-3"><CountryFlag code={h.country} /> {h.city}</td>
                <td className="px-5 py-3 text-center text-yellow-500">{'★'.repeat(h.stars)}</td>
                <td className="px-5 py-3 text-right font-medium">${h.pricePerNight}</td>
                <td className="px-5 py-3 text-gray-500">{h.distanceToClinic}</td>
                <td className="px-5 py-3">
                  <div className="flex flex-wrap gap-1">{h.amenities.slice(0, 3).map(a => <span key={a} className="text-xs bg-gray-100 px-2 py-0.5 rounded">{a}</span>)}</div>
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
