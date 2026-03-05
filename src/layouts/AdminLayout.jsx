import { Outlet, Navigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import { useAuth } from '../context/AuthContext';

export default function AdminLayout() {
  const { user } = useAuth();
  if (!user || (user.role !== 'admin' && user.role !== 'doctor')) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen flex bg-gray-100">
      <AdminSidebar role={user.role} />
      <main className="flex-1 p-6 lg:p-8 ml-0 lg:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
