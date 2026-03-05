import { currentPatient } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import { Video, MapPin } from 'lucide-react';

export default function PatientConsultations() {
  const consultations = currentPatient.consultations;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Consultations</h1>
      <p className="text-gray-500 text-sm mb-6">Your past and upcoming consultations</p>

      <div className="space-y-4">
        {consultations.map(c => (
          <div key={c.id} className="bg-white rounded-xl border p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{c.doctor}</h3>
                  <StatusBadge status={c.status} />
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                  <span>{c.date}</span>
                  <span className="flex items-center gap-1">
                    {c.type === 'Video' ? <Video className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                    {c.type}
                  </span>
                </div>
                {c.notes && <p className="mt-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{c.notes}</p>}
              </div>
              <div className="flex gap-2">
                {c.status === 'scheduled' && (
                  <button className="btn-primary text-sm">Join Call</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
