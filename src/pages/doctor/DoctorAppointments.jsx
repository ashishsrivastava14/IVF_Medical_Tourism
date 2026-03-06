import { useState } from 'react';
import { doctorDashboard } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import Modal from '../../components/Modal';
import { Calendar, Video } from 'lucide-react';

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState(doctorDashboard.todayAppointments);
  const [activeSession, setActiveSession] = useState(null);

  const startAppointment = (a) => {
    setAppointments(prev => prev.map(item => item.id === a.id ? { ...item, status: 'in-progress' } : item));
    setActiveSession(a);
  };

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
          {appointments.map(a => (
            <div key={a.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <div className="w-16 text-center">
                <p className="text-lg font-bold text-primary-600">{a.time}</p>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{a.patient}</p>
                <p className="text-sm text-gray-500">{a.type}</p>
              </div>
              <StatusBadge status={a.status} />
              {a.status !== 'completed' && a.status !== 'in-progress' && (
                <button onClick={() => startAppointment(a)} className="btn-primary text-sm">Start</button>
              )}
              {a.status === 'in-progress' && (
                <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Active</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!activeSession} onClose={() => setActiveSession(null)} title="Appointment Session" maxWidth="max-w-xl">
        {activeSession && (
          <div className="space-y-4 text-center">
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
              <div>
                <Video className="w-12 h-12 text-white/60 mx-auto mb-3" />
                <p className="text-white font-medium">{activeSession.patient}</p>
                <p className="text-white/60 text-sm mt-1">{activeSession.type}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Time: {activeSession.time}</p>
            <div className="flex justify-center gap-3">
              <button onClick={() => {
                setAppointments(prev => prev.map(item => item.id === activeSession.id ? { ...item, status: 'completed' } : item));
                setActiveSession(null);
              }} className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition">End Session</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
