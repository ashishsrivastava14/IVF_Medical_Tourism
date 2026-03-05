import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const mockUsers = {
  patient: { id: 'P-2026-0001', name: 'Jennifer Williams', email: 'jennifer.w@email.com', role: 'patient', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
  doctor:  { id: 'D-001', name: 'Dr. Priya Sharma', email: 'priya.sharma@ferticare.com', role: 'doctor', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200' },
  admin:   { id: 'A-001', name: 'Admin User', email: 'admin@ferticare.com', role: 'admin', avatar: null },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, _password) => {
    if (email.includes('doctor')) return setUser(mockUsers.doctor);
    if (email.includes('admin'))  return setUser(mockUsers.admin);
    return setUser(mockUsers.patient);
  };

  const register = (data) => {
    setUser({ ...mockUsers.patient, name: data.name, email: data.email });
  };

  const logout = () => setUser(null);

  const loginAs = (role) => setUser(mockUsers[role]);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loginAs }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};
