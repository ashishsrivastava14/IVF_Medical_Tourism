import { doctorDashboard, currentPatient } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';

export default function DoctorConsultations() {
  const consultations = currentPatient.consultations;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900">Consultations</h1>
        <p className="text-gray-500 text-sm mt-1">Recent and upcoming patient consultations</p>
      </div>

      <div className="space-y-4">
        {consultations.map(c => (
          <div key={c.id} className="bg-white rounded-xl border p-5">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-semibold text-gray-900">{c.id}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>{c.date}</span>
                  <span>{c.type}</span>
                </div>
              </div>
              <StatusBadge status={c.status} />
            </div>
            {c.notes && <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 mt-2">{c.notes}</p>}
            <div className="mt-3 flex gap-2">
              <button className="text-sm text-primary-600 hover:underline">Add Notes</button>
              <button className="text-sm text-gray-500 hover:underline">View Patient</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
