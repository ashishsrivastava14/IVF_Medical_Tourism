import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Heart, Stethoscope, DollarSign, Plane } from 'lucide-react';
import { doctors, clinics, testimonials, globalStats, packages } from '../../data/mockData';
import DoctorCard from '../../components/DoctorCard';
import TestimonialCard from '../../components/TestimonialCard';
import StatCounter from '../../components/StatCounter';
import PackageCard from '../../components/PackageCard';

export default function HomePage() {
  const featuredDoctors = doctors.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredPackages = packages.filter(p => p.popular);

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Your Journey to <span className="text-accent-300">Parenthood</span> Starts Here
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-100 leading-relaxed">
              Access world-class IVF treatments at a fraction of the cost. We connect you with top fertility specialists across 6 countries — with personalized care, travel support, and transparent pricing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/cost-calculator" className="btn-accent text-base px-6 py-3">
                Calculate Your Savings <ArrowRight className="w-5 h-5 ml-1 inline" />
              </Link>
              <Link to="/doctors" className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
                Find a Doctor
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-primary-200">
              <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> JCI-Accredited Clinics</span>
              <span className="flex items-center gap-2"><Globe className="w-5 h-5" /> 6+ Countries</span>
              <span className="flex items-center gap-2"><Heart className="w-5 h-5" /> 12,500+ Babies Born</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-primary-800 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {globalStats.map(s => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Why Choose FertiCare Global?</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">We make fertility treatment abroad simple, safe, and affordable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, title: 'Save Up to 70%', desc: 'World-class IVF from $3,500. Same quality as the US or UK at a fraction of the price.' },
              { icon: Stethoscope, title: 'Top-Rated Specialists', desc: '42 vetted fertility doctors across 12 accredited clinics with proven success rates.' },
              { icon: Plane, title: 'Full Concierge Service', desc: 'Visa support, flights, hotel, airport pickup, translation — we handle everything.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Doctors ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900">Featured Doctors</h2>
              <p className="mt-1 text-gray-500">Hand-picked fertility experts with exceptional track records</p>
            </div>
            <Link to="/doctors" className="hidden md:flex items-center gap-1 text-primary-600 font-semibold hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDoctors.map(d => <DoctorCard key={d.id} doctor={d} />)}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/doctors" className="text-primary-600 font-semibold">View All Doctors →</Link>
          </div>
        </div>
      </section>

      {/* ─── Popular Packages ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-gray-900">Popular Treatment Packages</h2>
            <p className="mt-2 text-gray-500">All-inclusive packages with transparent pricing — no hidden fees</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map(p => (
              <PackageCard key={p.id} pkg={p} clinicName={clinics.find(c => c.id === p.clinicId)?.name} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/packages" className="btn-outline">Build Custom Package</Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-gray-900">Patient Success Stories</h2>
            <p className="mt-2 text-gray-500">Real stories from real families who trusted FertiCare Global</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map(t => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Ready to Start Your Fertility Journey?</h2>
          <p className="mt-4 text-primary-100 text-lg">Get a free, no-obligation consultation and personalized treatment plan.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Free Quote
            </Link>
            <Link to="/cost-calculator" className="border border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Cost Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
