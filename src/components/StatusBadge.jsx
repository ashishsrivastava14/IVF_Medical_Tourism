const statusConfig = {
  'completed':       { bg: 'bg-green-100',  text: 'text-green-800',  dot: 'bg-green-500' },
  'in-progress':     { bg: 'bg-blue-100',   text: 'text-blue-800',   dot: 'bg-blue-500' },
  'scheduled':       { bg: 'bg-purple-100', text: 'text-purple-800', dot: 'bg-purple-500' },
  'pending':         { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
  'pending-payment': { bg: 'bg-orange-100', text: 'text-orange-800', dot: 'bg-orange-500' },
  'upcoming':        { bg: 'bg-gray-100',   text: 'text-gray-600',   dot: 'bg-gray-400' },
  'verified':        { bg: 'bg-green-100',  text: 'text-green-800',  dot: 'bg-green-500' },
  'approved':        { bg: 'bg-green-100',  text: 'text-green-800',  dot: 'bg-green-500' },
  'confirmed':       { bg: 'bg-green-100',  text: 'text-green-800',  dot: 'bg-green-500' },
  'paid':            { bg: 'bg-green-100',  text: 'text-green-800',  dot: 'bg-green-500' },
  'consultation':    { bg: 'bg-indigo-100', text: 'text-indigo-800', dot: 'bg-indigo-500' },
  'cancelled':       { bg: 'bg-red-100',    text: 'text-red-800',    dot: 'bg-red-500' },
};

export default function StatusBadge({ status }) {
  const cfg = statusConfig[status] || statusConfig['pending'];
  const label = status.replace(/-/g, ' ');

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${cfg.bg} ${cfg.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {label}
    </span>
  );
}
