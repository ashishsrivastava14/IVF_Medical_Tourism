import { currentPatient, adminStats } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import { DollarSign, TrendingUp } from 'lucide-react';

export default function AdminPayments() {
  const payments = currentPatient.payments;

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
                <td className="px-5 py-3 font-medium text-gray-900">{p.description}</td>
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
