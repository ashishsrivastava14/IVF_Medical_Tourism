import { useParams, Link } from 'react-router-dom';
import { clinics, doctors, packages as allPackages, testimonials } from '../../data/mockData';
import {
  Star, MapPin, Phone, Mail, Calendar, ShieldCheck, ArrowLeft,
  CheckCircle2, Award, Users, Microscope, Heart, Clock,
  Globe, Building2, Stethoscope, MessageSquare, ArrowRight, Sparkles
} from 'lucide-react';
import CountryFlag from '../../components/CountryFlag';
import DoctorCard from '../../components/DoctorCard';
import PackageCard from '../../components/PackageCard';

export default function ClinicProfilePage() {
  const { id } = useParams();
  const clinic = clinics.find(c => c.id === Number(id));
  if (!clinic) return <div className="max-w-3xl mx-auto py-20 text-center text-gray-500">Clinic not found.</div>;

  const clinicDoctors = doctors.filter(d => clinic.doctors.includes(d.id));
  const clinicPackages = allPackages.filter(p => clinic.packages?.includes(p.id));
  const clinicTestimonials = testimonials.filter(t => t.clinicId === clinic.id);
  const avgDoctorRating = clinicDoctors.length > 0
    ? (clinicDoctors.reduce((sum, d) => sum + d.rating, 0) / clinicDoctors.length).toFixed(1)
    : clinic.rating;
  const totalProcedures = clinicDoctors.reduce((sum, d) => sum + d.proceduresPerformed, 0);
  const yearsOpen = new Date().getFullYear() - clinic.established;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Link to="/clinics" className="inline-flex items-center gap-1 text-sm text-primary-600 hover:underline mb-6">
        <ArrowLeft className="w-4 h-4" /> All Clinics
      </Link>

      {/* Hero Banner */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
          <img src={clinic.logo} alt={clinic.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-white">{clinic.name}</h1>
                  <span className="bg-green-400/20 text-green-200 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-400/30 backdrop-blur-sm">Verified</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /><CountryFlag code={clinic.country} /> {clinic.city}</span>
                  <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-current" /> {clinic.rating} ({clinic.reviews} reviews)</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Established {clinic.established}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-accent self-start md:self-end">Enquire Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Years of Excellence', value: `${yearsOpen}+`, icon: Award, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Patient Reviews', value: clinic.reviews.toLocaleString(), icon: MessageSquare, color: 'text-primary-600', bg: 'bg-primary-50' },
          { label: 'Treatments Offered', value: clinic.treatmentsOffered.length, icon: Stethoscope, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Procedures Done', value: totalProcedures > 0 ? totalProcedures.toLocaleString() + '+' : `${yearsOpen * 500}+`, icon: Microscope, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((s, i) => (
          <div key={i} className={`${s.bg} rounded-2xl p-5 text-center border border-gray-100`}>
            <s.icon className={`w-6 h-6 ${s.color} mx-auto mb-2`} />
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">

          {/* About */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary-500" /> About {clinic.name}
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>{clinic.description}</p>
              <p>
                With {yearsOpen} years of experience, {clinic.name} has built a reputation for delivering exceptional
                fertility care. Our team of {clinicDoctors.length > 0 ? clinicDoctors.length : 'several'} specialist{clinicDoctors.length !== 1 ? 's' : ''} works
                collaboratively to create personalized treatment plans that maximize your chances of success. We welcome
                international patients and provide comprehensive support from initial consultation through to follow-up care.
              </p>
              <p>
                Our state-of-the-art facility features the latest reproductive technology, including advanced embryo culture
                systems and genetic testing capabilities. Every aspect of our clinic is designed to provide a comfortable,
                stress-free environment during what we understand is an important and emotional journey.
              </p>
            </div>
          </div>

          {/* Success Rates */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> Success Rates by Age Group
            </h2>
            <p className="text-sm text-gray-500 mb-5">Clinical pregnancy rates per embryo transfer — independently audited and updated annually.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Under 35', val: clinic.successRates.under35, tier: 'Excellent' },
                { label: '35 – 37', val: clinic.successRates['35to37'], tier: 'Very Good' },
                { label: '38 – 40', val: clinic.successRates['38to40'], tier: 'Good' },
                { label: 'Over 40', val: clinic.successRates.over40, tier: 'Above Average' },
              ].map(s => (
                <div key={s.label} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-5 text-center border border-primary-100/50">
                  <p className="text-3xl font-bold text-primary-700">{s.val}%</p>
                  <p className="text-xs font-semibold text-gray-700 mt-1">{s.label}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{s.tier}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">* Rates based on latest annual report. Individual results may vary based on medical history and treatment protocol.</p>
          </div>

          {/* Treatments Offered */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-emerald-500" /> Treatments Offered
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {clinic.treatmentsOffered.map(t => (
                <div key={t} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-violet-500" /> Facilities & Technology
            </h2>
            <p className="text-sm text-gray-500 mb-5">Our clinic is equipped with cutting-edge reproductive technology and designed for patient comfort at every stage.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {clinic.facilities.map(f => (
                <div key={f} className="flex items-center gap-3 bg-violet-50/50 rounded-xl px-4 py-3 border border-violet-100/50">
                  <span className="w-2.5 h-2.5 bg-violet-400 rounded-full shrink-0" />
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-100/50 p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-600" /> Your Journey With Us
            </h2>
            <p className="text-sm text-gray-500 mb-5">From your very first inquiry to follow-up care back home, here's what to expect when you choose {clinic.name}.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { step: '1', title: 'Free Enquiry & Consultation', desc: 'Submit your medical history online. You\'ll receive a detailed review and personalized recommendation within 48 hours — completely free of charge.' },
                { step: '2', title: 'Treatment Plan & Quote', desc: 'Your assigned specialist creates a tailored protocol with a transparent, all-inclusive cost breakdown. No hidden fees, no surprises.' },
                { step: '3', title: 'Travel & Arrival', desc: 'Our international patient team assists with visa letters, flight bookings, airport transfer, and accommodation near the clinic.' },
                { step: '4', title: 'Treatment & Follow-Up', desc: 'Receive your treatment under expert care. After you return home, your medical team remains accessible for follow-up consultations and support.' },
              ].map(item => (
                <div key={item.step} className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/80">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-primary-500 text-white text-xs font-bold flex items-center justify-center">{item.step}</span>
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Doctors */}
          {clinicDoctors.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-500" /> Our Specialists
              </h2>
              <p className="text-sm text-gray-500 mb-5">Meet the experienced fertility specialists at {clinic.name}. Each doctor is carefully selected for their expertise, patient care, and proven track record.</p>
              <div className="grid md:grid-cols-2 gap-6">
                {clinicDoctors.map(d => <DoctorCard key={d.id} doctor={d} />)}
              </div>
            </div>
          )}

          {/* Packages */}
          {clinicPackages.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent-500" /> Treatment Packages
              </h2>
              <p className="text-sm text-gray-500 mb-5">All-inclusive treatment packages with transparent pricing. Each package covers consultation, procedures, medications, and follow-up — no hidden fees.</p>
              <div className="grid md:grid-cols-2 gap-6">
                {clinicPackages.map(p => <PackageCard key={p.id} pkg={p} clinicName={clinic.name} />)}
              </div>
            </div>
          )}

          {/* Patient Stories */}
          {clinicTestimonials.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-pink-500" /> Patient Stories
              </h2>
              <div className="space-y-4">
                {clinicTestimonials.slice(0, 3).map(t => (
                  <div key={t.id} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-3.5 h-3.5 ${j < t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed italic">"{t.text}"</p>
                    <p className="mt-3 text-xs font-semibold text-gray-900">{t.name} <span className="font-normal text-gray-400">— {t.treatment}</span></p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Enquiry CTA */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent-500/20">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Ready to Learn More?</h3>
            <p className="text-sm text-gray-500 mb-4">Get a free, no-obligation quote from {clinic.name}.</p>
            <Link to="/contact" className="block w-full bg-gradient-to-r from-accent-500 to-pink-500 text-white py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-accent-500/25 transition-all">
              Get Free Quote
            </Link>
            <p className="text-xs text-gray-400 mt-3">Response within 24–48 hours</p>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary-500" /> Contact Information
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700">{clinic.address}</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700">{clinic.phone}</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700">{clinic.email}</span>
              </div>
            </div>
          </div>

          {/* Accreditations */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600" /> Accreditations
            </h2>
            <div className="space-y-2">
              {clinic.accreditations.map(a => (
                <div key={a} className="flex items-center gap-2.5 bg-green-50 rounded-lg px-3 py-2 border border-green-100">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-sm font-medium text-green-800">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">Why Choose {clinic.name}?</h3>
            <div className="space-y-3">
              {[
                { icon: ShieldCheck, text: 'Internationally accredited & audited annually' },
                { icon: Award, text: `${yearsOpen}+ years of proven fertility expertise` },
                { icon: Globe, text: 'Patients from 30+ countries welcomed' },
                { icon: Heart, text: 'Dedicated international patient coordinator' },
                { icon: CheckCircle2, text: 'Transparent, all-inclusive pricing' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <item.icon className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-600 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International Patients */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-violet-500" /> International Patient Services
            </h3>
            <div className="space-y-2">
              {[
                'Airport pickup & transfer',
                'Visa invitation letters',
                'Hotel & accommodation booking',
                'Multilingual patient coordinator',
                'Remote follow-up consultations',
                'Medical records translation',
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
