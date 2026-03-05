import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', treatment: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-display font-bold text-gray-900">Thank You!</h1>
        <p className="mt-4 text-gray-500 text-lg">Our patient coordinator will contact you within 24 hours with a personalized treatment plan and quote.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Get Your Free Quote</h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">Fill out the form and our patient coordinator will reach out within 24 hours.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl border shadow-sm p-6 md:p-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interested Treatment</label>
              <select value={form.treatment} onChange={e => setForm({ ...form, treatment: e.target.value })} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300">
                <option value="">Select a treatment</option>
                <option>IVF</option>
                <option>ICSI</option>
                <option>IUI</option>
                <option>Egg Freezing</option>
                <option>Egg Donation IVF</option>
                <option>PGT (Genetic Testing)</option>
                <option>Surrogacy</option>
                <option>Other / Not sure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300" placeholder="Tell us about your situation, questions, or preferred destination…" />
            </div>
            <button type="submit" className="btn-primary w-full py-3 text-base">Submit Free Enquiry</button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary-500" /> info@ferticareglobal.com</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary-500" /> +1 (800) 555-FERT</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-500" /> New York, London, Mumbai, Dubai</p>
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary-500" /> 24/7 Patient Support</p>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-6">
            <h3 className="font-bold text-primary-800 mb-2">What happens next?</h3>
            <ol className="space-y-2 text-sm text-primary-700">
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center text-xs font-bold shrink-0">1</span> We review your enquiry within 24 hours</li>
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center text-xs font-bold shrink-0">2</span> Our coordinator contacts you for details</li>
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center text-xs font-bold shrink-0">3</span> You receive a personalized treatment plan</li>
              <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center text-xs font-bold shrink-0">4</span> Schedule your free video consultation</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
