import { Link } from 'react-router-dom';
import { visaInfo, hotels, countries } from '../../data/mockData';
import CountryFlag from '../../components/CountryFlag';
import {
  Plane, Hotel, Stamp, ShieldCheck, HeartPulse, Globe,
  ArrowRight, CheckCircle2, Star, MapPin, Clock, Users,
  Heart, Sparkles, MessageSquare, DollarSign, Award,
  Stethoscope, Baby, Calendar, Phone, BookOpen
} from 'lucide-react';

export default function MedicalTourismPage() {
  return (
    <div className="overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO
       ══════════════════════════════════════════ */}
      <section className="relative min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-900/60 to-primary-900/30" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
        <div className="absolute top-20 right-[10%] w-40 h-40 border border-white/10 rounded-full animate-[spin_25s_linear_infinite]" />
        <div className="absolute bottom-32 right-[25%] w-24 h-24 border border-accent-400/15 rounded-full animate-[spin_18s_linear_infinite_reverse]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <span className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4 text-accent-300" /> Your Complete Medical Tourism Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-hero leading-[1.05] text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              <span className="font-normal">Fertility Treatment</span>{' '}
              <span className="relative inline-block">
                <span className="relative z-10 italic bg-gradient-to-r from-accent-200 via-accent-300 to-pink-200 bg-clip-text text-transparent drop-shadow-none" style={{ WebkitTextStroke: '0.3px rgba(255,255,255,0.1)' }}>
                  Abroad,
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-accent-400/50 via-pink-400/50 to-accent-400/50 rounded-full blur-sm" />
              </span>
              <br className="hidden sm:block" />
              <span className="text-white/95 font-normal">Made Simple</span>
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-body text-white/75 leading-relaxed max-w-xl tracking-wide font-light">
              From your first inquiry to your flight home, we manage every detail — visas, flights, luxury hotels, and world-class fertility care in 6+ countries.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-pink-500 text-white px-7 py-3.5 rounded-xl font-body font-semibold tracking-wide shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all duration-300">
                Plan My Trip <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/cost-calculator" className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/25 text-white px-7 py-3.5 rounded-xl font-body font-semibold tracking-wide hover:bg-white/20 transition-all duration-300">
                Cost Calculator
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-body text-white/60">
              {[
                { icon: ShieldCheck, label: 'JCI-Accredited Clinics' },
                { icon: Users, label: '12,500+ Families Helped' },
                { icon: Globe, label: '6+ Countries' },
              ].map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  <b.icon className="w-4 h-4 text-accent-300" /> {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          WHY MEDICAL TOURISM — Stats + Content
       ══════════════════════════════════════════ */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <Sparkles className="w-4 h-4" /> Why Travel for IVF?
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
                World-Class Care at a{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Fraction of the Cost</span>
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Every year, over 1.4 million people travel abroad for medical treatment — and fertility care is one of the
                  fastest-growing segments. Patients from the US, UK, Australia, and Canada choose medical tourism not just
                  for cost savings, but for shorter wait times, access to cutting-edge technology, and highly experienced specialists.
                </p>
                <p>
                  At FertiCare Global, we've helped over 12,500 families navigate every aspect of fertility treatment abroad.
                  Our partner clinics are internationally accredited, use the same equipment found in top Western hospitals,
                  and offer success rates that match or exceed domestic averages — all at 40–70% lower cost.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { value: '40-70%', label: 'Cost Savings', icon: DollarSign, color: 'text-emerald-600 bg-emerald-50' },
                  { value: '68%', label: 'Avg. Success Rate', icon: Award, color: 'text-primary-600 bg-primary-50' },
                  { value: '12,500+', label: 'Babies Born', icon: Baby, color: 'text-pink-600 bg-pink-50' },
                  { value: '6+', label: 'Countries', icon: Globe, color: 'text-violet-600 bg-violet-50' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
                alt="Modern fertility clinic"
                className="rounded-2xl shadow-2xl shadow-gray-200/60 w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 max-w-[240px]">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-gray-900 text-sm">All-Inclusive Care</span>
                </div>
                <p className="text-xs text-gray-500">Treatment, travel, hotel, visa — one package, one price, zero surprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          HOW IT WORKS — Timeline
       ══════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-50/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <BookOpen className="w-4 h-4" /> Step by Step
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Your Journey, <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Step by Step</span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
              We've streamlined the entire process so you can focus on what matters — your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HeartPulse, step: '01', title: 'Free Consultation', desc: 'Share your medical history online. Within 48 hours, a fertility specialist reviews your case and recommends a personalized treatment plan — completely free of charge.', color: 'from-primary-500 to-sky-400' },
              { icon: Globe, step: '02', title: 'Choose Your Destination', desc: 'Pick from our vetted, JCI-accredited clinics in 6+ countries. We help you compare doctors, success rates, costs, and travel logistics to find your best fit.', color: 'from-accent-500 to-pink-400' },
              { icon: Plane, step: '03', title: 'Travel & Arrival', desc: 'We handle visa invitation letters, flights, luxury hotel bookings near your clinic, and airport pickup. Your dedicated coordinator greets you on arrival.', color: 'from-emerald-500 to-teal-400' },
              { icon: ShieldCheck, step: '04', title: 'Treatment & Follow-Up', desc: 'Receive world-class treatment with your specialist. After returning home, your medical team stays accessible for follow-up consultations and ongoing support.', color: 'from-amber-500 to-orange-400' },
            ].map(item => (
              <div key={item.step} className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`text-3xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-30`}>{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300">
              Start Your Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          WHAT'S INCLUDED — Split Image + Checklist
       ══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
                alt="Luxury hotel near clinic"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent-500 to-pink-500 text-white rounded-2xl p-4 shadow-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-white/80">Hassle-Free</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <CheckCircle2 className="w-4 h-4" /> All-Inclusive Packages
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
                Everything{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Taken Care Of</span>
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Our packages cover every aspect of your trip, so you never have to worry about logistics.
                From the moment you land until you fly home, we've got you covered.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  'IVF / ICSI treatment & medications',
                  'Pre-treatment diagnostic tests',
                  'Dedicated patient coordinator',
                  'Visa invitation letter & support',
                  'Airport pickup & clinic transfers',
                  'Luxury hotel near your clinic',
                  'Follow-up consultations at home',
                  '24/7 emergency support line',
                  'Medical records translation',
                  'Multilingual support team',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          VISA REQUIREMENTS
       ══════════════════════════════════════════ */}
      <section className="py-16 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              <Stamp className="w-4 h-4" /> Travel Documentation
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Visa <span className="bg-gradient-to-r from-accent-400 to-pink-400 bg-clip-text text-transparent">Requirements</span>
            </h2>
            <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
              We assist with visa applications and provide invitation letters for every destination. Here's what you need to know.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visaInfo.map(v => {
              const countryData = countries.find(c => c.code === v.country);
              return (
                <div key={v.country} className="group bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{countryData?.flag}</span>
                    <div>
                      <h3 className="font-bold text-white text-lg">{countryData?.name || v.country}</h3>
                      <p className="text-sm text-accent-300 font-medium">{v.visaType}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>Processing: <span className="text-white font-medium">{v.processingTime}</span></span>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Documents Required</p>
                    <div className="space-y-1.5">
                      {v.documents.map(d => (
                        <div key={d} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> {d}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed italic border-t border-white/[0.06] pt-3">{v.notes}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Not sure about your visa? <Link to="/contact" className="text-accent-400 hover:text-accent-300 font-medium">Contact our travel team</Link> for personalized guidance.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          ACCOMMODATION — Hotel Cards
       ══════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Hotel className="w-4 h-4" /> Handpicked Stays
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Recommended <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Hotels</span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
              Comfortable, highly-rated hotels near your clinic — hand-selected for convenience, comfort, and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {hotels.map(h => {
              const countryData = countries.find(c => c.code === h.country);
              return (
                <div key={h.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img src={h.image} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-bold text-amber-600 shadow">
                      ${h.pricePerNight}/night
                    </div>
                    <div className="absolute bottom-3 left-3 flex gap-0.5">
                      {Array.from({ length: h.stars }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">{h.name}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                      <MapPin className="w-3 h-3" />
                      <span>{countryData?.flag} {h.city}</span>
                      <span className="text-gray-300">·</span>
                      <span>{h.distanceToClinic} to clinic</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {h.amenities.slice(0, 4).map(a => (
                        <span key={a} className="text-[11px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded-full border border-gray-100">{a}</span>
                      ))}
                      {h.amenities.length > 4 && (
                        <span className="text-[11px] bg-gray-50 text-gray-400 px-2 py-0.5 rounded-full border border-gray-100">+{h.amenities.length - 4}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            We can also arrange apartments, serviced residences, or budget-friendly options. <Link to="/contact" className="text-primary-500 hover:text-primary-600 font-medium">Ask us about alternatives</Link>.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SAFETY — Split Content
       ══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <ShieldCheck className="w-4 h-4" /> Safety First
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
                Your Safety Is Our{' '}
                <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Top Priority</span>
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We understand that traveling abroad for fertility treatment is a major decision. That's why every clinic
                  in our network is independently accredited by JCI, ESHRE, or equivalent international bodies.
                  Our medical advisory board conducts annual on-site audits and reviews clinical outcomes.
                </p>
                <p>
                  Every patient receives comprehensive travel insurance guidance, a 24/7 emergency hotline,
                  and a dedicated coordinator who accompanies you throughout your stay. We don't just connect
                  you with a clinic — we are with you every step of the way.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { icon: ShieldCheck, text: 'All clinics JCI or ESHRE accredited' },
                  { icon: Award, text: 'Annual on-site audits by our medical board' },
                  { icon: Phone, text: '24/7 emergency support hotline' },
                  { icon: Heart, text: 'Dedicated multilingual coordinator' },
                  { icon: Calendar, text: 'Follow-up care for 12 months after treatment' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                    <item.icon className="w-5 h-5 text-primary-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"
                alt="Doctor consultation"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Fully Insured</p>
                  <p className="text-xs text-gray-500">Comprehensive coverage included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          FAQ Preview
       ══════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <MessageSquare className="w-4 h-4" /> Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Frequently Asked <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Is IVF abroad as safe as treatment at home?', a: 'Absolutely. All our partner clinics hold JCI or ESHRE accreditation — the same standards as top hospitals in the US and Europe. Our medical advisory board audits each clinic annually, and success rates are independently verified.' },
              { q: 'How much can I really save by traveling for IVF?', a: 'Most patients save between 40–70% compared to domestic prices. For example, a standard IVF cycle that costs $15,000–$25,000 in the US can be $3,500–$6,000 at our partner clinics, including medications.' },
              { q: 'How long do I need to stay in the destination country?', a: 'A typical IVF cycle requires 12–16 days abroad. Egg freezing usually takes 10–14 days. We tailor travel plans to minimize time away while ensuring you receive complete, unhurried care.' },
              { q: 'What if I have an emergency after returning home?', a: 'Every patient has access to our 24/7 emergency support line. Your treating doctor remains accessible via secure video consultations, and we coordinate with your local healthcare provider for any follow-up needs.' },
              { q: 'Do I need a special medical visa?', a: 'It depends on your nationality and destination. Many of our countries offer visa-free entry or simple e-visa processes. Our travel team handles all paperwork and provides clinic invitation letters for visa applications.' },
              { q: 'Can my partner or family member travel with me?', a: 'Of course! We encourage it. Our hotel bookings and travel arrangements accommodate companions. Many of our destinations are beautiful places to explore during downtime between appointments.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CTA
       ══════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Baby className="w-10 h-10 text-accent-300 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            Ready to Begin Your{' '}
            <span className="bg-gradient-to-r from-accent-300 to-pink-300 bg-clip-text text-transparent">Journey?</span>
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Take the first step today. Get a free, no-obligation consultation and a personalized travel plan from our fertility experts.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="group inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/cost-calculator" className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/25 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              Estimate Costs
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Hidden Fees</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> JCI-Accredited</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24/7 Support</span>
          </div>
        </div>
      </section>
    </div>
  );
}
