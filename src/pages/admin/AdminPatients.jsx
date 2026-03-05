import { adminStats } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import CountryFlag from '../../components/CountryFlag';

export default function AdminPatients() {
  const patients = adminStats.recentPatients;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Manage Patients</h1>
          <p className="text-gray-500 text-sm mt-1">{adminStats.totalPatients} total patients · {adminStats.activePatients} active</p>
        </div>
        <button className="btn-primary text-sm">+ Add Patient</button>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">ID</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Patient</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Country</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Treatment</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Clinic</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {patients.map(p => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3 font-mono text-xs text-gray-400">{p.id}</td>
                <td className="px-5 py-3 font-medium text-gray-900">{p.name}</td>
                <td className="px-5 py-3"><CountryFlag code={p.country} showName /></td>
                <td className="px-5 py-3 text-gray-500">{p.treatment}</td>
                <td className="px-5 py-3 text-gray-500">{p.clinic}</td>
                <td className="px-5 py-3"><StatusBadge status={p.status} /></td>
                <td className="px-5 py-3 text-right">
                  <button className="text-primary-600 text-sm hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
