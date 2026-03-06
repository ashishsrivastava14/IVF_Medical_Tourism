import { useState } from 'react';
import { doctorDashboard } from '../../data/mockData';
import Modal from '../../components/Modal';

export default function DoctorPatients() {
  const { activePatients } = doctorDashboard;
  const [selected, setSelected] = useState(null);

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
                <td className="px-5 py-3"><button onClick={() => setSelected(p)} className="text-primary-600 text-sm hover:underline">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title="Patient Details">
        {selected && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Patient ID</p>
                <p className="font-mono text-sm">{selected.id}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Name</p>
                <p className="font-medium">{selected.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Treatment</p>
                <p className="text-sm">{selected.treatment}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Current Stage</p>
                <p className="text-sm text-primary-600 font-medium">{selected.stage}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-gray-500">Next Appointment</p>
                <p className="text-sm">{selected.nextAppt}</p>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button onClick={() => setSelected(null)} className="btn-primary text-sm">Close</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
