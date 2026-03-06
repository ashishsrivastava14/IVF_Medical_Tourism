import { doctorDashboard } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';

const doctorConsultationList = [
  { id: 'C-101', patient: 'Jennifer Williams', date: '2026-03-05', type: 'In-person', status: 'scheduled', notes: 'Day 2 scan – start stimulation.' },
  { id: 'C-102', patient: 'Mei Lin', date: '2026-03-05', type: 'In-person', status: 'scheduled', notes: 'Egg retrieval procedure.' },
  { id: 'C-103', patient: 'Anna Schmidt', date: '2026-03-05', type: 'In-person', status: 'scheduled', notes: 'Embryo transfer – 2 blastocysts.' },
  { id: 'C-104', patient: 'Sarah Connor', date: '2026-03-05', type: 'Video', status: 'scheduled', notes: 'Initial consultation – review AMH and AFC results.' },
  { id: 'C-105', patient: 'Jennifer Williams', date: '2026-02-15', type: 'Video', status: 'completed', notes: 'Pre-treatment review. All blood work normal. Protocol: Antagonist.' },
  { id: 'C-106', patient: 'Jennifer Williams', date: '2026-02-01', type: 'Video', status: 'completed', notes: 'Initial consultation. AMH 2.1, AFC 12. Recommended IVF with PGT-A.' },
  { id: 'C-107', patient: 'Lisa Park', date: '2026-03-04', type: 'Video', status: 'completed', notes: 'Egg freezing monitoring – follicle check day 6.' },
];

export default function DoctorConsultations() {
  const consultations = doctorConsultationList;

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
                <p className="font-semibold text-gray-900">{c.patient}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="font-mono text-xs text-gray-400">{c.id}</span>
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
