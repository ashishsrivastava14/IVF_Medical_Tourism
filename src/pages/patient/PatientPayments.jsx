import { currentPatient } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';
import { DollarSign } from 'lucide-react';

export default function PatientPayments() {
  const payments = currentPatient.payments;
  const total = payments.reduce((s, p) => s + p.amount, 0);
  const paid = payments.filter(p => p.status === 'paid').reduce((s, p) => s + p.amount, 0);
  const pending = total - paid;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900">Payments</h1>
        <p className="text-gray-500 text-sm mt-1">Track your payment history and outstanding balances</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border p-5 text-center">
          <p className="text-xs text-gray-500">Total</p>
          <p className="text-2xl font-bold text-gray-900">${total.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 rounded-xl border border-green-200 p-5 text-center">
          <p className="text-xs text-gray-500">Paid</p>
          <p className="text-2xl font-bold text-green-600">${paid.toLocaleString()}</p>
        </div>
        <div className="bg-orange-50 rounded-xl border border-orange-200 p-5 text-center">
          <p className="text-xs text-gray-500">Pending</p>
          <p className="text-2xl font-bold text-orange-600">${pending.toLocaleString()}</p>
        </div>
      </div>

      {/* Payment list */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
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
                <td className="px-5 py-3 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-gray-900">{p.description}</span>
                </td>
                <td className="px-5 py-3 text-right font-medium">${p.amount.toLocaleString()} {p.currency}</td>
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
