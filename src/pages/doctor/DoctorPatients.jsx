import { doctorDashboard } from '../../data/mockData';

export default function DoctorPatients() {
  const { activePatients } = doctorDashboard;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900">My Patients</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your active patient list</p>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">ID</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Patient</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Treatment</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Current Stage</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Next Appointment</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {activePatients.map(p => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3 font-mono text-xs text-gray-400">{p.id}</td>
                <td className="px-5 py-3 font-medium text-gray-900">{p.name}</td>
                <td className="px-5 py-3 text-gray-500">{p.treatment}</td>
                <td className="px-5 py-3 text-primary-600 font-medium">{p.stage}</td>
                <td className="px-5 py-3 text-gray-500">{p.nextAppt}</td>
                <td className="px-5 py-3"><button className="text-primary-600 text-sm hover:underline">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
