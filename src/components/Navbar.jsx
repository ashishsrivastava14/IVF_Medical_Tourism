import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, ChevronDown, User, LogOut, Baby } from 'lucide-react';

export default function Navbar() {
  const { user, logout, loginAs } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Doctors', to: '/doctors' },
    { label: 'Clinics', to: '/clinics' },
    { label: 'Treatments', to: '/treatments' },
    { label: 'Cost Calculator', to: '/cost-calculator' },
    { label: 'Medical Tourism', to: '/medical-tourism' },
    { label: 'Contact', to: '/contact' },
  ];

  const handleLogout = () => { logout(); navigate('/'); };

  const dashboardPath = user?.role === 'admin' ? '/admin' : user?.role === 'doctor' ? '/doctor' : '/patient';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Baby className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-display font-bold text-primary-700">FertiCare<span className="text-accent-500"> Global</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">{l.label}</Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Demo switcher */}
            <div className="relative">
              <button onClick={() => setDemoOpen(!demoOpen)} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full font-medium text-gray-600 transition-colors">
                Demo Login ▾
              </button>
              {demoOpen && (
                <div className="absolute right-0 mt-1 w-44 bg-white rounded-lg shadow-lg border py-1 z-50">
                  {['patient', 'doctor', 'admin'].map(r => (
                    <button key={r} onClick={() => { loginAs(r); setDemoOpen(false); navigate(r === 'admin' ? '/admin' : r === 'doctor' ? '/doctor' : '/patient'); }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 capitalize">{r} Login</button>
                  ))}
                </div>
              )}
            </div>

            {user ? (
              <div className="relative">
                <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600">
                  {user.avatar ? <img src={user.avatar} className="w-8 h-8 rounded-full object-cover" alt="" /> : <User className="w-8 h-8 p-1 bg-gray-200 rounded-full" />}
                  <span className="hidden xl:inline">{user.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
                    <Link to={dashboardPath} onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-50">Dashboard</Link>
                    <button onClick={() => { setProfileOpen(false); handleLogout(); }} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-red-600 flex items-center gap-2"><LogOut className="w-4 h-4" /> Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-primary-600">Sign In</Link>
                <Link to="/register" className="btn-primary text-sm">Get Started</Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white pb-4">
          <div className="px-4 pt-3 space-y-2">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-primary-600">{l.label}</Link>
            ))}
            <hr className="my-2" />
            {user ? (
              <>
                <Link to={dashboardPath} onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700">Dashboard</Link>
                <button onClick={() => { setMobileOpen(false); handleLogout(); }} className="block py-2 text-red-600">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700">Sign In</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-primary-600">Get Started</Link>
              </>
            )}
            <hr className="my-2" />
            <p className="text-xs text-gray-400">Quick Demo:</p>
            <div className="flex gap-2">
              {['patient', 'doctor', 'admin'].map(r => (
                <button key={r} onClick={() => { loginAs(r); setMobileOpen(false); navigate(r === 'admin' ? '/admin' : r === 'doctor' ? '/doctor' : '/patient'); }}
                  className="text-xs bg-gray-100 px-3 py-1.5 rounded-full capitalize">{r}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
