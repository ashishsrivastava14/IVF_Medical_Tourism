import { Link } from 'react-router-dom';
import { Baby, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Baby className="h-7 w-7 text-primary-400" />
              <span className="text-lg font-display font-bold text-white">FertiCare <span className="text-accent-400">Global</span></span>
            </Link>
            <p className="text-sm leading-relaxed">Connecting hopeful parents with world-class fertility clinics across the globe. Affordable IVF, egg donation & surrogacy programs.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/doctors" className="hover:text-white transition">Find a Doctor</Link></li>
              <li><Link to="/clinics" className="hover:text-white transition">Partner Clinics</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition">Treatments</Link></li>
              <li><Link to="/cost-calculator" className="hover:text-white transition">Cost Calculator</Link></li>
              <li><Link to="/packages" className="hover:text-white transition">Package Builder</Link></li>
            </ul>
          </div>

          {/* For Patients */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Patients</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/medical-tourism" className="hover:text-white transition">Medical Tourism Guide</Link></li>
              <li><Link to="/register" className="hover:text-white transition">Create Account</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Get a Free Quote</Link></li>
              <li><a href="#" className="hover:text-white transition">Patient Stories</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> info@ferticareglobal.com</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +1 (800) 555-FERT</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Offices in New York, London, Singapore, Dubai</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} FertiCare Global. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-4 pt-4 text-center text-xs text-gray-500">
          Powered by <span className="text-gray-400 font-semibold">QuickPrepAI</span>
        </div>
      </div>
    </footer>
  );
}
