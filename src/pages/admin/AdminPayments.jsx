import { adminStats } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import CountryFlag from '../../components/CountryFlag';
import { DollarSign, TrendingUp } from 'lucide-react';

const adminPayments = [
  { id: 'PAY-001', patient: 'Jennifer Williams', country: 'US', description: 'IVF Premium Package – Deposit', amount: 3600, currency: 'USD', date: '2026-02-10', method: 'Wire Transfer', status: 'paid' },
  { id: 'PAY-002', patient: 'Jennifer Williams', country: 'US', description: 'IVF Premium Package – Balance', amount: 3600, currency: 'USD', date: '2026-03-01', method: 'Wire Transfer', status: 'pending' },
  { id: 'PAY-003', patient: 'Emma Thompson', country: 'GB', description: 'Egg Donation IVF – Full Payment', amount: 6500, currency: 'USD', date: '2026-02-28', method: 'Credit Card', status: 'paid' },
  { id: 'PAY-004', patient: 'Maria Silva', country: 'BR', description: 'IVF Package – Deposit', amount: 2900, currency: 'USD', date: '2026-03-02', method: 'Wire Transfer', status: 'paid' },
  { id: 'PAY-005', patient: 'Maria Silva', country: 'BR', description: 'IVF Package – Balance', amount: 2900, currency: 'USD', date: '2026-03-20', method: 'Wire Transfer', status: 'pending' },
  { id: 'PAY-006', patient: 'Fatima Khan', country: 'AE', description: 'Dubai Premium IVF + PGT', amount: 12000, currency: 'USD', date: '2026-02-25', method: 'Bank Transfer', status: 'pending' },
  { id: 'PAY-007', patient: 'Yuki Sato', country: 'JP', description: 'Mini IVF + Egg Freezing', amount: 5000, currency: 'USD', date: '2026-01-15', method: 'Credit Card', status: 'paid' },
  { id: 'PAY-008', patient: 'Sophia Kim', country: 'US', description: 'Consultation Fee', amount: 150, currency: 'USD', date: '2026-03-04', method: 'Credit Card', status: 'paid' },
];

export default function AdminPayments() {
  const payments = adminPayments;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Payments</h1>
          <p className="text-gray-500 text-sm mt-1">{adminStats.pendingPayments} pending payments</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <TrendingUp className="w-4 h-4 text-green-500" /> Revenue this month: <span className="font-bold text-gray-900">${adminStats.monthlyRevenue.toLocaleString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-50 rounded-xl border border-green-200 p-5 text-center">
          <p className="text-xs text-gray-500">Monthly Revenue</p>
          <p className="text-2xl font-bold text-green-600">${adminStats.monthlyRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-orange-50 rounded-xl border border-orange-200 p-5 text-center">
          <p className="text-xs text-gray-500">Pending Payments</p>
          <p className="text-2xl font-bold text-orange-600">{adminStats.pendingPayments}</p>
        </div>
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-5 text-center">
          <p className="text-xs text-gray-500">Total Patients</p>
          <p className="text-2xl font-bold text-blue-600">{adminStats.totalPatients}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="font-bold text-gray-900">Recent Transactions</h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-gray-500">ID</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Patient</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Description</th>
              <th className="text-right px-5 py-3 font-medium text-gray-500">Amount</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Date</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Method</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(p => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                <td className="px-5 py-3 font-mono text-xs text-gray-400">{p.id}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <CountryFlag code={p.country} />
                    <span className="font-medium text-gray-900">{p.patient}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-600">{p.description}</td>
                <td className="px-5 py-3 text-right font-medium">${p.amount.toLocaleString()}</td>
                <td className="px-5 py-3 text-gray-500">{p.date}</td>
                <td className="px-5 py-3 text-gray-500">{p.method}</td>
                <td className="px-5 py-3"><StatusBadge status={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
