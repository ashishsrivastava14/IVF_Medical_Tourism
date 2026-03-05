import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import HomePage from './pages/public/HomePage';
import DoctorsListPage from './pages/public/DoctorsListPage';
import DoctorProfilePage from './pages/public/DoctorProfilePage';
import ClinicsListPage from './pages/public/ClinicsListPage';
import ClinicProfilePage from './pages/public/ClinicProfilePage';
import TreatmentsPage from './pages/public/TreatmentsPage';
import CostCalculatorPage from './pages/public/CostCalculatorPage';
import PackageBuilderPage from './pages/public/PackageBuilderPage';
import MedicalTourismPage from './pages/public/MedicalTourismPage';
import ContactPage from './pages/public/ContactPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Patient Pages
import PatientDashboard from './pages/patient/PatientDashboard';
import PatientConsultations from './pages/patient/PatientConsultations';
import PatientDocuments from './pages/patient/PatientDocuments';
import PatientTravelPage from './pages/patient/PatientTravelPage';
import PatientPayments from './pages/patient/PatientPayments';
import PatientMessages from './pages/patient/PatientMessages';

// Doctor Pages
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import DoctorPatients from './pages/doctor/DoctorPatients';
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import DoctorConsultations from './pages/doctor/DoctorConsultations';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminDoctors from './pages/admin/AdminDoctors';
import AdminClinics from './pages/admin/AdminClinics';
import AdminPatients from './pages/admin/AdminPatients';
import AdminPayments from './pages/admin/AdminPayments';
import AdminVisa from './pages/admin/AdminVisa';
import AdminHotels from './pages/admin/AdminHotels';
import AdminAnalytics from './pages/admin/AdminAnalytics';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsListPage />} />
        <Route path="/doctors/:id" element={<DoctorProfilePage />} />
        <Route path="/clinics" element={<ClinicsListPage />} />
        <Route path="/clinics/:id" element={<ClinicProfilePage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/cost-calculator" element={<CostCalculatorPage />} />
        <Route path="/packages" element={<PackageBuilderPage />} />
        <Route path="/medical-tourism" element={<MedicalTourismPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Patient Dashboard Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/patient/consultations" element={<PatientConsultations />} />
        <Route path="/patient/documents" element={<PatientDocuments />} />
        <Route path="/patient/travel" element={<PatientTravelPage />} />
        <Route path="/patient/payments" element={<PatientPayments />} />
        <Route path="/patient/messages" element={<PatientMessages />} />
      </Route>

      {/* Doctor Dashboard Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor/patients" element={<DoctorPatients />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/doctor/consultations" element={<DoctorConsultations />} />
      </Route>

      {/* Admin Dashboard Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/doctors" element={<AdminDoctors />} />
        <Route path="/admin/clinics" element={<AdminClinics />} />
        <Route path="/admin/patients" element={<AdminPatients />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/visa" element={<AdminVisa />} />
        <Route path="/admin/hotels" element={<AdminHotels />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
      </Route>
    </Routes>
  );
}

export default App;
