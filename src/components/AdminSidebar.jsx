import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import {
  LayoutDashboard, Users, Building2, UserCheck, CreditCard,
  Stamp, Hotel, BarChart3, Stethoscope, CalendarDays,
  ClipboardList, LogOut, Menu, X, Baby
} from 'lucide-react';

const adminLinks = [
  { to: '/admin',          icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/admin/doctors',  icon: Stethoscope,     label: 'Doctors' },
  { to: '/admin/clinics',  icon: Building2,       label: 'Clinics' },
  { to: '/admin/patients', icon: Users,           label: 'Patients' },
  { to: '/admin/payments', icon: CreditCard,      label: 'Payments' },
  { to: '/admin/visa',     icon: Stamp,           label: 'Visa Management' },
  { to: '/admin/hotels',   icon: Hotel,           label: 'Hotels' },
  { to: '/admin/analytics',icon: BarChart3,       label: 'Analytics' },
];

const doctorLinks = [
  { to: '/doctor',               icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/doctor/patients',      icon: Users,           label: 'My Patients' },
  { to: '/doctor/appointments',  icon: CalendarDays,    label: 'Appointments' },
  { to: '/doctor/consultations', icon: ClipboardList,   label: 'Consultations' },
];

export default function AdminSidebar({ role }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const links = role === 'doctor' ? doctorLinks : adminLinks;

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-100'}`;

  const content = (
    <>
      <div className="p-5 border-b flex items-center gap-3">
        <Baby className="w-7 h-7 text-primary-600" />
        <div>
          <span className="font-display font-bold text-primary-700 block">FertiCare</span>
          <span className="text-xs text-gray-500 capitalize">{role} Panel</span>
        </div>
      </div>

      {user && (
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            {user.avatar ? <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt="" /> : <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-700">{user.name.charAt(0)}</div>}
            <div>
              <p className="font-medium text-sm text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500 capitalize">{role}</p>
            </div>
          </div>
        </div>
      )}

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/admin' || l.to === '/doctor'} className={linkClass} onClick={() => setOpen(false)}>
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
      <button className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow" onClick={() => setOpen(!open)}>
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      {open && <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)} />}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white border-r shadow-sm z-40 flex flex-col transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        {content}
      </aside>
    </>
  );
}
