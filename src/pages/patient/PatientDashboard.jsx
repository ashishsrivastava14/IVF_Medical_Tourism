import { currentPatient } from '../../data/mockData';
import ProgressStepper from '../../components/ProgressStepper';
import StatusBadge from '../../components/StatusBadge';
import { CalendarDays, FileText, CreditCard, MessageCircle, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PatientDashboard() {
  const p = currentPatient;
  const plan = p.treatmentPlan;

  const quickStats = [
    { label: 'Consultations', value: p.consultations.length, icon: CalendarDays, color: 'bg-blue-100 text-blue-700', to: '/patient/consultations' },
    { label: 'Documents', value: p.documents.length, icon: FileText, color: 'bg-purple-100 text-purple-700', to: '/patient/documents' },
    { label: 'Payments', value: `$${p.payments.reduce((s, x) => s + x.amount, 0).toLocaleString()}`, icon: CreditCard, color: 'bg-green-100 text-green-700', to: '/patient/payments' },
    { label: 'Messages', value: p.messages.length, icon: MessageCircle, color: 'bg-orange-100 text-orange-700', to: '/patient/messages' },
  ];

  return (
    <div>
      {/* Welcome */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {p.name.split(' ')[0]} 👋</h1>
        <p className="text-gray-500 text-sm">Here's your treatment overview.</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickStats.map(s => (
          <Link key={s.label} to={s.to} className="bg-white rounded-xl border p-4 hover:shadow-md transition">
            <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center mb-2`}>
              <s.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </Link>
        ))}
      </div>

      {/* Treatment plan */}
      <div className="bg-white rounded-xl border p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Treatment Plan</h2>
            <p className="text-sm text-gray-500">{plan.treatment} at {plan.clinic} with {plan.doctor}</p>
          </div>
          <StatusBadge status={plan.status} />
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[700px]">
            <ProgressStepper steps={plan.steps} currentStep={plan.currentStep} />
          </div>
        </div>
      </div>

      {/* Two-column bottom */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming appointments */}
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-bold text-gray-900 mb-3">Upcoming Consultations</h3>
          {p.consultations.filter(c => c.status !== 'completed').map(c => (
            <div key={c.id} className="flex items-center justify-between py-2 border-b last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-900">{c.doctor}</p>
                <p className="text-xs text-gray-500">{c.date} · {c.type}</p>
              </div>
              <StatusBadge status={c.status} />
            </div>
          ))}
          {p.consultations.filter(c => c.status !== 'completed').length === 0 && (
            <p className="text-sm text-gray-400">No upcoming consultations.</p>
          )}
        </div>

        {/* Travel summary */}
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Plane className="w-5 h-5" /> Travel Summary</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>✈️ <strong>Flight:</strong> {p.travel.flights.airline} {p.travel.flights.flightNo} — {p.travel.flights.departure}</p>
            <p>🏨 <strong>Hotel:</strong> {p.travel.hotel.name} ({p.travel.hotel.checkIn} → {p.travel.hotel.checkOut})</p>
            <p>📋 <strong>Visa:</strong> {p.travel.visa.type} — <StatusBadge status={p.travel.visa.status} /></p>
            <p>🚗 {p.travel.localTransport}</p>
          </div>
          <Link to="/patient/travel" className="mt-3 inline-block text-primary-600 text-sm font-medium hover:underline">View all details →</Link>
        </div>
      </div>
    </div>
  );
}
