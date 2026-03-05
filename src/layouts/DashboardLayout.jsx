import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';

export default function DashboardLayout() {
  const { user } = useAuth();
  if (!user || user.role !== 'patient') return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 ml-0 lg:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
