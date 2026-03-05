import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Baby, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
    if (email.includes('admin')) navigate('/admin');
    else if (email.includes('doctor')) navigate('/doctor');
    else navigate('/patient');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <Baby className="w-10 h-10 text-primary-600" />
            <span className="text-2xl font-display font-bold text-primary-700">FertiCare <span className="text-accent-500">Global</span></span>
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border shadow-sm p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input type={showPw ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 pr-10" />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <button type="submit" className="btn-primary w-full py-2.5">Sign In</button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account? <Link to="/register" className="text-primary-600 font-medium hover:underline">Create one</Link>
        </p>

        <div className="mt-6 bg-gray-50 rounded-xl p-4 text-xs text-gray-400">
          <p className="font-semibold mb-1">Demo Logins:</p>
          <p>Patient: any email → patient dashboard</p>
          <p>Doctor: include "doctor" in email → doctor dashboard</p>
          <p>Admin: include "admin" in email → admin dashboard</p>
        </div>
      </div>
    </div>
  );
}
