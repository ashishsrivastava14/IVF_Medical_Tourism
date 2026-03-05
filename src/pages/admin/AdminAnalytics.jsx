import { adminStats, costComparison } from '../../data/mockData';
import CountryFlag from '../../components/CountryFlag';
import { TrendingUp, Users, DollarSign, Globe } from 'lucide-react';

export default function AdminAnalytics() {
  const s = adminStats;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 text-sm mt-1">Platform performance metrics and trends</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Users, label: 'Total Patients', value: s.totalPatients.toLocaleString(), change: '+12%', color: 'text-blue-600' },
          { icon: DollarSign, label: 'Monthly Revenue', value: `$${(s.monthlyRevenue / 1000).toFixed(0)}K`, change: '+8%', color: 'text-green-600' },
          { icon: Globe, label: 'Countries Served', value: '65+', change: '+3', color: 'text-purple-600' },
          { icon: TrendingUp, label: 'Conversion Rate', value: '24%', change: '+2.3%', color: 'text-orange-600' },
        ].map(k => (
          <div key={k.label} className="bg-white rounded-xl border p-5">
            <k.icon className={`w-6 h-6 ${k.color} mb-2`} />
            <p className="text-2xl font-bold text-gray-900">{k.value}</p>
            <p className="text-xs text-gray-500">{k.label}</p>
            <p className="text-xs text-green-600 mt-1">{k.change} vs last month</p>
          </div>
        ))}
      </div>

      {/* Revenue trend */}
      <div className="bg-white rounded-xl border p-6">
        <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Revenue Trend (6 months)</h2>
        <div className="flex items-end gap-4 h-52">
          {s.revenueByMonth.map(m => {
            const height = (m.revenue / 550000) * 100;
            return (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray-500 font-medium">${(m.revenue / 1000).toFixed(0)}K</span>
                <div className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: `${height}%` }} />
                <span className="text-xs text-gray-500">{m.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Patient demographics */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-bold text-gray-900 mb-4">Patient Demographics</h2>
          <div className="space-y-3">
            {s.patientsByCountry.map(c => {
              const pct = Math.round((c.count / s.totalPatients) * 100);
              return (
                <div key={c.country} className="flex items-center gap-3">
                  <div className="w-24"><CountryFlag code={c.country} showName /></div>
                  <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-sm text-gray-600 w-16 text-right">{c.count} ({pct}%)</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-bold text-gray-900 mb-4">Average Treatment Costs by Region</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium text-gray-500">Country</th>
                  <th className="text-right py-2 font-medium text-gray-500">IVF</th>
                  <th className="text-right py-2 font-medium text-gray-500">ICSI</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.slice(0, 6).map(c => (
                  <tr key={c.country} className="border-b hover:bg-gray-50">
                    <td className="py-2"><CountryFlag code={c.country} showName /></td>
                    <td className="py-2 text-right">${c.ivf.toLocaleString()}</td>
                    <td className="py-2 text-right">${c.icsi.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
