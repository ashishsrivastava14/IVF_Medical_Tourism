import { useParams, Link } from 'react-router-dom';
import { doctors, clinics, testimonials } from '../../data/mockData';
import {
  Star, MapPin, Award, GraduationCap, Calendar, Languages, ArrowLeft,
  ShieldCheck, Heart, Clock, CheckCircle2, Users, Stethoscope, Phone,
  MessageSquare, Globe, Microscope, BookOpen
} from 'lucide-react';
import CountryFlag from '../../components/CountryFlag';

export default function DoctorProfilePage() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === Number(id));
  if (!doctor) return <div className="max-w-3xl mx-auto py-20 text-center text-gray-500">Doctor not found.</div>;

  const clinic = clinics.find(c => c.id === doctor.clinicId);
  const doctorTestimonials = testimonials.filter(t => t.clinicId === doctor.clinicId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Link to="/doctors" className="inline-flex items-center gap-1 text-sm text-primary-600 hover:underline mb-6">
        <ArrowLeft className="w-4 h-4" /> All Doctors
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 px-6 md:px-10 py-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row gap-6 items-start">
            <img src={doctor.photo} alt={doctor.name} className="w-32 h-32 rounded-2xl object-cover border-4 border-white/30 shadow-xl" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl md:text-3xl font-display font-bold">{doctor.name}</h1>
                <span className="bg-green-400/20 text-green-200 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-400/30">Verified</span>
              </div>
              <p className="text-primary-200 font-medium text-lg">{doctor.specialty}</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-primary-100">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /><CountryFlag code={doctor.country} /> {doctor.city}</span>
                <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {doctor.experience} yrs experience</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-300 fill-current" /> {doctor.rating} ({doctor.reviews} reviews)</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {doctor.proceduresPerformed.toLocaleString()}+ procedures</span>
              </div>
              <p className="mt-4 text-primary-100/80 text-sm leading-relaxed max-w-2xl">{doctor.bio}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm text-primary-200">Consultation fee</p>
              <p className="text-3xl font-bold">${doctor.consultationFee}</p>
              <Link to="/contact" className="mt-3 inline-block btn-accent text-sm">Book Consultation</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Success Rate', value: `${doctor.successRate}%`, color: 'text-green-600', bg: 'bg-green-50', icon: CheckCircle2 },
              { label: 'Procedures', value: doctor.proceduresPerformed.toLocaleString(), color: 'text-primary-600', bg: 'bg-primary-50', icon: Microscope },
              { label: 'Experience', value: `${doctor.experience} Years`, color: 'text-purple-600', bg: 'bg-purple-50', icon: Award },
              { label: 'Rating', value: `${doctor.rating}/5`, color: 'text-amber-600', bg: 'bg-amber-50', icon: Star },
            ].map((s, i) => (
              <div key={i} className={`${s.bg} rounded-xl p-5 text-center border border-gray-100`}>
                <s.icon className={`w-6 h-6 ${s.color} mx-auto mb-2`} />
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Treatment Philosophy */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent-500" /> Treatment Philosophy
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                {doctor.name} believes that every fertility journey is unique and deserves a fully personalized approach.
                With over {doctor.experience} years of experience and {doctor.proceduresPerformed.toLocaleString()}+ procedures performed,
                {doctor.name.split(' ')[0] === 'Dr.' ? ` ${doctor.name}` : ` Dr. ${doctor.name.split(' ').pop()}`} combines
                evidence-based medicine with genuine compassion to guide patients through every step.
              </p>
              <p>
                "I believe in transparent communication and shared decision-making. Every patient receives a thorough
                evaluation, a clear explanation of all available options, and an honest assessment of expected outcomes.
                My goal is not just a successful procedure — it's helping families feel supported, informed, and hopeful
                throughout their entire journey."
              </p>
            </div>
          </div>

          {/* Education & Training */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary-500" /> Education & Training
            </h2>
            <div className="space-y-4">
              {doctor.education.map((e, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{e}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Verified credential</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-emerald-500" /> Specializations & Expertise
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {doctor.specializations.map(s => (
                <div key={s} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-100/50 p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-600" /> What to Expect
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { step: '1', title: 'Initial Consultation', desc: 'Comprehensive review of your medical history, prior treatments, and fertility goals. Available in-person or via secure video call.' },
                { step: '2', title: 'Diagnostic Assessment', desc: 'Thorough evaluation including lab work, imaging, and any specialized testing needed to determine the best course of action.' },
                { step: '3', title: 'Personalized Treatment Plan', desc: 'A tailored protocol with clear timelines, expected outcomes, and a fully transparent cost breakdown — no hidden fees.' },
                { step: '4', title: 'Ongoing Support', desc: 'Continuous monitoring throughout treatment, direct access to the medical team, and follow-up care even after you return home.' },
              ].map((item) => (
                <div key={item.step} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/80">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-primary-500 text-white text-xs font-bold flex items-center justify-center">{item.step}</span>
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Patient Stories */}
          {doctorTestimonials.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-pink-500" /> Patient Stories
              </h2>
              <div className="space-y-4">
                {doctorTestimonials.slice(0, 3).map((t) => (
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
          {/* Book CTA */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent-500/20">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Ready to Get Started?</h3>
            <p className="text-sm text-gray-500 mb-4">Schedule a free initial consultation with {doctor.name}.</p>
            <Link to="/contact" className="block w-full bg-gradient-to-r from-accent-500 to-pink-500 text-white py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-accent-500/25 transition-all">
              Book Free Consultation
            </Link>
            <p className="text-xs text-gray-400 mt-3">Next available: <span className="font-medium text-gray-600">{doctor.nextAvailable}</span></p>
          </div>

          {/* Availability */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-500" /> Weekly Availability
            </h2>
            <div className="grid grid-cols-7 gap-1.5">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="text-center">
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium mx-auto ${doctor.availability.includes(day) ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-gray-50 text-gray-300 border border-gray-100'}`}>
                    {day.charAt(0)}
                  </span>
                  <p className="text-[10px] text-gray-400 mt-1">{day}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-green-200 border border-green-300" /> Available</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-gray-100 border border-gray-200" /> Unavailable</span>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Languages className="w-5 h-5 text-violet-500" /> Languages
            </h2>
            <div className="space-y-2">
              {doctor.languages.map(l => (
                <div key={l} className="flex items-center gap-2.5 bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                  <Globe className="w-4 h-4 text-violet-400" />
                  <span className="text-sm text-gray-700">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinic */}
          {clinic && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-400" /> Practice Location
              </h2>
              <Link to={`/clinics/${clinic.id}`} className="text-primary-600 font-semibold hover:underline text-sm">{clinic.name}</Link>
              <p className="text-xs text-gray-500 mt-1">{clinic.address}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {clinic.accreditations.map(a => (
                  <span key={a} className="text-xs bg-primary-50 text-primary-600 border border-primary-100 px-2.5 py-1 rounded-full font-medium">{a}</span>
                ))}
              </div>
            </div>
          )}

          {/* Trust Badges */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">Why Patients Trust {doctor.name.split(' ').pop()}</h3>
            <div className="space-y-3">
              {[
                { icon: ShieldCheck, text: 'Board-certified & internationally recognized' },
                { icon: Award, text: `${doctor.experience}+ years of specialized experience` },
                { icon: CheckCircle2, text: `${doctor.successRate}% success rate — above global average` },
                { icon: Heart, text: 'Patient-centered, compassionate care' },
                { icon: Globe, text: 'Patients from 40+ countries worldwide' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <item.icon className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-600 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
