import { doctorDashboard } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import { Users, CalendarDays, Stethoscope, UserPlus, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DoctorDashboard() {
  const { doctor, todayAppointments, weeklyStats, activePatients } = doctorDashboard;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
        <div className="flex items-center gap-4">
          <img src={doctor.photo} alt={doctor.name} className="w-16 h-16 rounded-xl object-cover border-2 border-white/30" />
          <div>
            <h1 className="text-2xl font-display font-bold">{doctor.name}</h1>
            <p className="text-primary-200">{doctor.specialty} · {doctor.clinic}</p>
          </div>
        </div>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border p-5 text-center">
          <Stethoscope className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{weeklyStats.consultations}</p>
          <p className="text-xs text-gray-500">Consultations this week</p>
        </div>
        <div className="bg-white rounded-xl border p-5 text-center">
          <CalendarDays className="w-6 h-6 text-green-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{weeklyStats.procedures}</p>
          <p className="text-xs text-gray-500">Procedures this week</p>
        </div>
        <div className="bg-white rounded-xl border p-5 text-center">
          <UserPlus className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{weeklyStats.newPatients}</p>
          <p className="text-xs text-gray-500">New patients</p>
        </div>
      </div>

      {/* Today's appointments */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Clock className="w-5 h-5" /> Today's Appointments</h2>
          <Link to="/doctor/appointments" className="text-sm text-primary-600 hover:underline">View All</Link>
        </div>
        <div className="space-y-3">
          {todayAppointments.map(a => (
            <div key={a.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-gray-500">{a.time}</span>
                <div>
                  <p className="font-medium text-sm text-gray-900">{a.patient}</p>
                  <p className="text-xs text-gray-500">{a.type}</p>
                </div>
              </div>
              <StatusBadge status={a.status} />
            </div>
          ))}
        </div>
      </div>

      {/* Active patients */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Users className="w-5 h-5" /> Active Patients</h2>
          <Link to="/doctor/patients" className="text-sm text-primary-600 hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-2 font-medium text-gray-500">Patient</th>
                <th className="text-left px-4 py-2 font-medium text-gray-500">Treatment</th>
                <th className="text-left px-4 py-2 font-medium text-gray-500">Stage</th>
                <th className="text-left px-4 py-2 font-medium text-gray-500">Next Appt</th>
              </tr>
            </thead>
            <tbody>
              {activePatients.map(p => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{p.name}</td>
                  <td className="px-4 py-2 text-gray-500">{p.treatment}</td>
                  <td className="px-4 py-2 text-primary-600">{p.stage}</td>
                  <td className="px-4 py-2 text-gray-500">{p.nextAppt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
