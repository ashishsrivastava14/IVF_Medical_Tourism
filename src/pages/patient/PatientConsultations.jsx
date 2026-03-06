import { useState } from 'react';
import { currentPatient } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import Modal from '../../components/Modal';
import { Video, MapPin } from 'lucide-react';

export default function PatientConsultations() {
  const consultations = currentPatient.consultations;
  const [callOpen, setCallOpen] = useState(false);
  const [activeCall, setActiveCall] = useState(null);

  const joinCall = (c) => { setActiveCall(c); setCallOpen(true); };

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
                  <button onClick={() => joinCall(c)} className="btn-primary text-sm">Join Call</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal open={callOpen} onClose={() => setCallOpen(false)} title="Video Consultation" maxWidth="max-w-xl">
        {activeCall && (
          <div className="text-center space-y-4">
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <Video className="w-12 h-12 text-white/60 mx-auto mb-3" />
                <p className="text-white font-medium">{activeCall.doctor}</p>
                <p className="text-white/60 text-sm mt-1">Connecting...</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Scheduled: {activeCall.date}</p>
            <div className="flex justify-center gap-3">
              <button onClick={() => setCallOpen(false)} className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition">End Call</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
