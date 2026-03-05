import { adminStats } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import CountryFlag from '../../components/CountryFlag';
import { Users, Stethoscope, Building2, DollarSign, CreditCard, Stamp, CalendarDays, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const s = adminStats;

  const statCards = [
    { icon: Users,        label: 'Total Patients',   value: s.totalPatients.toLocaleString(),   color: 'bg-blue-50 text-blue-600' },
    { icon: Users,        label: 'Active Patients',   value: s.activePatients,                   color: 'bg-green-50 text-green-600' },
    { icon: Stethoscope,  label: 'Doctors',           value: s.totalDoctors,                     color: 'bg-purple-50 text-purple-600' },
    { icon: Building2,    label: 'Clinics',           value: s.totalClinics,                     color: 'bg-indigo-50 text-indigo-600' },
    { icon: DollarSign,   label: 'Monthly Revenue',   value: `$${(s.monthlyRevenue / 1000).toFixed(0)}K`, color: 'bg-emerald-50 text-emerald-600' },
    { icon: CreditCard,   label: 'Pending Payments',  value: s.pendingPayments,                  color: 'bg-orange-50 text-orange-600' },
    { icon: Stamp,        label: 'Visa Pending',      value: s.visaPending,                      color: 'bg-yellow-50 text-yellow-600' },
    { icon: CalendarDays, label: 'Upcoming Consults',  value: s.upcomingConsultations,             color: 'bg-pink-50 text-pink-600' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Overview of the FertiCare Global platform</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(c => (
          <div key={c.label} className="bg-white rounded-xl border p-4">
            <div className={`w-10 h-10 rounded-lg ${c.color} flex items-center justify-center mb-2`}>
              <c.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{c.value}</p>
            <p className="text-xs text-gray-500">{c.label}</p>
          </div>
        ))}
      </div>

      {/* Revenue chart placeholder */}
      <div className="bg-white rounded-xl border p-6">
        <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Monthly Revenue</h2>
        <div className="flex items-end gap-4 h-48">
          {s.revenueByMonth.map(m => {
            const height = (m.revenue / 550000) * 100;
            return (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray-500">${(m.revenue / 1000).toFixed(0)}K</span>
                <div className="w-full bg-primary-500 rounded-t" style={{ height: `${height}%` }} />
                <span className="text-xs text-gray-500">{m.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two columns */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent patients */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-bold text-gray-900 mb-4">Recent Patients</h2>
          <div className="space-y-3">
            {s.recentPatients.map(p => (
              <div key={p.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-gray-900">{p.name}</p>
                  <p className="text-xs text-gray-500"><CountryFlag code={p.country} /> · {p.treatment}</p>
                </div>
                <StatusBadge status={p.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Patients by country */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-bold text-gray-900 mb-4">Patients by Country</h2>
          <div className="space-y-3">
            {s.patientsByCountry.map(c => (
              <div key={c.country} className="flex items-center gap-3">
                <CountryFlag code={c.country} showName />
                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: `${(c.count / 400) * 100}%` }} />
                </div>
                <span className="text-sm text-gray-600 font-medium w-12 text-right">{c.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
