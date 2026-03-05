import { doctorDashboard } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import { Calendar } from 'lucide-react';

export default function DoctorAppointments() {
  const { todayAppointments } = doctorDashboard;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-500 text-sm mt-1">Today's schedule and upcoming appointments</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
      </div>

      <div className="bg-white rounded-xl border p-6">
        <h2 className="font-bold text-gray-900 mb-4">Today's Schedule</h2>
        <div className="space-y-3">
          {todayAppointments.map(a => (
            <div key={a.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <div className="w-16 text-center">
                <p className="text-lg font-bold text-primary-600">{a.time}</p>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{a.patient}</p>
                <p className="text-sm text-gray-500">{a.type}</p>
              </div>
              <StatusBadge status={a.status} />
              <button className="btn-primary text-sm">Start</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
