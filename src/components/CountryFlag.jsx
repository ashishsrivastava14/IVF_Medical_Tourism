import { countries } from '../data/mockData';

export default function CountryFlag({ code, showName = false }) {
  const c = countries.find(c => c.code === code);
  if (!c) return <span className="text-sm">{code}</span>;

  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-base" title={c.name}>{c.flag}</span>
      {showName && <span className="text-sm text-gray-600">{c.name}</span>}
    </span>
  );
}
