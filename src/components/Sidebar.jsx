import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import {
  LayoutDashboard, CalendarDays, FileText, Plane, CreditCard,
  MessageCircle, LogOut, Menu, X, Baby
} from 'lucide-react';

const links = [
  { to: '/patient',               icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/patient/consultations', icon: CalendarDays,    label: 'Consultations' },
  { to: '/patient/documents',     icon: FileText,        label: 'Documents' },
  { to: '/patient/travel',        icon: Plane,           label: 'Travel' },
  { to: '/patient/payments',      icon: CreditCard,      label: 'Payments' },
  { to: '/patient/messages',      icon: MessageCircle,   label: 'Messages' },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-100'}`;

  const content = (
    <>
      <div className="p-5 border-b flex items-center gap-3">
        <Baby className="w-7 h-7 text-primary-600" />
        <span className="font-display font-bold text-primary-700">FertiCare</span>
      </div>

      {user && (
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            {user.avatar && <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />}
            <div>
              <p className="font-medium text-sm text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">Patient</p>
            </div>
          </div>
        </div>
      )}

      <nav className="flex-1 p-3 space-y-1">
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/patient'} className={linkClass} onClick={() => setOpen(false)}>
            <l.icon className="w-5 h-5" /> {l.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t">
        <NavLink to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100" onClick={() => setOpen(false)}>
          ← Back to Site
        </NavLink>
        <button onClick={() => { logout(); navigate('/'); }} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 w-full">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow" onClick={() => setOpen(!open)}>
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {open && <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white border-r shadow-sm z-40 flex flex-col transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        {content}
      </aside>
    </>
  );
}
