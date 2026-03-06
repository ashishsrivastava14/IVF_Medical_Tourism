import { useState } from 'react';
import { visaInfo } from '../../data/mockData';
import CountryFlag from '../../components/CountryFlag';
import StatusBadge from '../../components/StatusBadge';

const initialApplications = [
  { id: 'V-001', patient: 'Emily Chen', country: 'SG', type: 'Medical Visit Pass', submitted: '2026-03-01', status: 'pending' },
  { id: 'V-002', patient: 'Michael Brown', country: 'CZ', type: 'Schengen Visa', submitted: '2026-02-28', status: 'pending' },
  { id: 'V-003', patient: 'Sophia Kim', country: 'AE', type: 'Medical Tourism Visa', submitted: '2026-03-02', status: 'pending' },
  { id: 'V-004', patient: 'Jennifer Williams', country: 'SG', type: 'Visitor Pass', submitted: '2026-02-20', status: 'approved' },
];

export default function AdminVisa() {
  const [applications, setApplications] = useState(initialApplications);

  const updateStatus = (id, newStatus) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900">Visa Management</h1>
        <p className="text-gray-500 text-sm mt-1">{applications.filter(a => a.status === 'pending').length} pending visa applications</p>
      </div>

      {/* Applications */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="font-bold text-gray-900">Visa Applications</h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">ID</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Patient</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Destination</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Visa Type</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Submitted</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {applications.map(v => (
              <tr key={v.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3 font-mono text-xs text-gray-400">{v.id}</td>
                <td className="px-5 py-3 font-medium text-gray-900">{v.patient}</td>
                <td className="px-5 py-3"><CountryFlag code={v.country} showName /></td>
                <td className="px-5 py-3 text-gray-500">{v.type}</td>
                <td className="px-5 py-3 text-gray-500">{v.submitted}</td>
                <td className="px-5 py-3"><StatusBadge status={v.status} /></td>
                <td className="px-5 py-3 text-right">
                  {v.status === 'pending' && (
                    <div className="flex gap-2 justify-end">
                      <button onClick={() => updateStatus(v.id, 'approved')} className="text-green-600 text-sm hover:underline">Approve</button>
                      <button onClick={() => updateStatus(v.id, 'cancelled')} className="text-red-500 text-sm hover:underline">Reject</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Country visa info */}
      <div className="bg-white rounded-xl border p-6">
        <h2 className="font-bold text-gray-900 mb-4">Country Visa Requirements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visaInfo.map(v => (
            <div key={v.country} className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold"><CountryFlag code={v.country} showName /></p>
              <p className="text-sm text-primary-600 mt-1">{v.visaType}</p>
              <p className="text-xs text-gray-500 mt-1">{v.processingTime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
