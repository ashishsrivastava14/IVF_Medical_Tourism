import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Globe, ShieldCheck, Heart, Stethoscope, DollarSign,
  Plane, CheckCircle2,
  Sparkles, Star, MapPin, Users, Baby, Award, Clock, ArrowUpRight,
  Quote, Building2, Microscope, HeartHandshake, Zap
} from 'lucide-react';
import { doctors, clinics, testimonials, globalStats, packages, countries } from '../../data/mockData';
import DoctorCard from '../../components/DoctorCard';
import TestimonialCard from '../../components/TestimonialCard';
import StatCounter from '../../components/StatCounter';
import PackageCard from '../../components/PackageCard';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1920&q=80',
    title: 'Your Journey to',
    highlight: 'Parenthood',
    titleEnd: 'Starts Here',
    subtitle: 'Access world-class IVF treatments at a fraction of the cost. We connect you with top fertility specialists across 6 countries.',
    overlay: 'from-primary-900/40 via-primary-900/20 to-primary-900/10',
  },
  {
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1920&q=80',
    title: 'World-Class',
    highlight: 'Fertility',
    titleEnd: 'Specialists',
    subtitle: '42 vetted doctors across 12 JCI-accredited clinics with proven success rates and personalized treatment plans.',
    overlay: 'from-primary-900/40 via-primary-900/20 to-primary-900/10',
  },
  {
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1920&q=80',
    title: 'Advanced',
    highlight: 'IVF Technology',
    titleEnd: 'Global Access',
    subtitle: 'From PGT genetic testing to ICSI and egg freezing — cutting-edge reproductive science at affordable prices worldwide.',
    overlay: 'from-primary-900/40 via-primary-900/20 to-primary-900/10',
  },
  {
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=80',
    title: 'Complete',
    highlight: 'Care Package',
    titleEnd: 'For Your Trip',
    subtitle: 'Travel arrangements, visa support, boutique hotels, and a dedicated coordinator — we handle everything so you can focus on your family.',
    overlay: 'from-primary-900/40 via-primary-900/20 to-primary-900/10',
  },
];

const processSteps = [
  { step: '01', title: 'Free Consultation', desc: 'Share your medical history online and get matched with the right specialist.', icon: Stethoscope, color: 'from-primary-500 to-sky-400' },
  { step: '02', title: 'Treatment Plan', desc: 'Receive a personalized plan with cost breakdown and timeline.', icon: Microscope, color: 'from-accent-500 to-pink-400' },
  { step: '03', title: 'Travel & Stay', desc: 'We arrange flights, visa, hotel, and airport pickup for your comfort.', icon: Plane, color: 'from-emerald-500 to-teal-400' },
  { step: '04', title: 'Treatment & Care', desc: 'Expert treatment with your dedicated coordinator by your side.', icon: HeartHandshake, color: 'from-amber-500 to-orange-400' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isPlaying = true;
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredDoctors = doctors.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredPackages = packages.filter(p => p.popular).slice(0, 3);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % featuredTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredTestimonials.length]);

  return (
    <div className="overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          HERO SLIDER
       ═══════════════════════════════════════════════════════════ */}
      <section className="relative h-[560px] md:h-[620px] lg:h-[680px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[800ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="absolute inset-0">
              <img src={slide.image} alt="" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>
          </div>
        ))}

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute top-20 right-[10%] w-32 h-32 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute bottom-32 right-[20%] w-20 h-20 border border-accent-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute top-40 right-[30%] w-2 h-2 bg-accent-400/40 rounded-full animate-pulse" />
          <div className="absolute top-60 right-[15%] w-3 h-3 bg-white/20 rounded-full animate-pulse" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl lg:max-w-3xl">
              {/* <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">Trusted by 12,500+ families worldwide</span>
              </div> */}

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-hero leading-[1.05] text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                <span className="font-normal">{heroSlides[currentSlide].title}</span>{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 italic bg-gradient-to-r from-accent-200 via-accent-300 to-pink-200 bg-clip-text text-transparent drop-shadow-none" style={{ WebkitTextStroke: '0.3px rgba(255,255,255,0.1)' }}>
                    {heroSlides[currentSlide].highlight}
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-accent-400/50 via-pink-400/50 to-accent-400/50 rounded-full blur-sm" />
                </span>
                <br className="hidden sm:block" />
                <span className="text-white/95 font-normal">{heroSlides[currentSlide].titleEnd}</span>
              </h1>

              <p className="mt-6 text-base md:text-lg lg:text-xl font-body text-white/75 leading-relaxed max-w-xl tracking-wide font-light">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link to="/cost-calculator"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-pink-500 text-white px-6 sm:px-8 py-3.5 rounded-xl font-body font-semibold tracking-wide shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Calculate Your Savings
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/doctors"
                  className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/25 text-white px-6 sm:px-8 py-3.5 rounded-xl font-body font-semibold tracking-wide hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Find a Doctor
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-body">
                {[
                  { icon: ShieldCheck, label: 'JCI-Accredited Clinics' },
                  { icon: Globe, label: '6+ Countries' },
                  { icon: Heart, label: '12,500+ Babies Born' },
                ].map((badge, i) => (
                  <span key={i} className="flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors tracking-wide">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm">
                      <badge.icon className="w-4 h-4 text-accent-300" />
                    </span>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 pb-24">
              <div className="flex items-center gap-2 flex-1">
                {heroSlides.map((_, index) => (
                  <button key={index} onClick={() => goToSlide(index)} className="group relative flex-1 max-w-[120px]">
                    <div className="h-[3px] rounded-full bg-white/20 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          index === currentSlide ? 'bg-gradient-to-r from-accent-400 to-pink-400' : index < currentSlide ? 'bg-white/50 w-full' : 'w-0'
                        }`}
                        style={index === currentSlide ? { animation: isPlaying ? 'slideProgress 5.5s linear' : 'none', width: '100%' } : {}}
                      />
                    </div>
                  </button>
                ))}
              </div>
              <span className="hidden sm:block text-white/50 text-sm font-mono tabular-nums ml-1">
                {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-900/50 to-transparent z-[5]" />
      </section>


      {/* ═══════════════════════════════════════════════════════════
          STATS BAR — Floating Glass Card
       ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-20 -mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-100 p-2">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {globalStats.map((s, i) => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          HOW IT WORKS — Interactive Process Timeline
       ═══════════════════════════════════════════════════════════ */}
      <section className="pt-8 pb-14 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-50/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-50/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Header */}
          <div className="text-center mb-12">
           
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900">
              How It <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
              From your first consultation to treatment day, we guide you every step of the way.
            </p>
          </div>

          {/* Desktop: Horizontal timeline with connecting line */}
          <div className="hidden lg:block relative">
            {/* Central connecting line */}
            <div className="absolute top-[52px] left-[12%] right-[12%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-primary-200 via-accent-200 to-amber-200 rounded-full" />
            </div>

            <div className="grid grid-cols-4 gap-6">
              {processSteps.map((item, i) => (
                <div key={i} className="group relative flex flex-col items-center text-center">
                  {/* Step number ring + icon */}
                  <div className="relative mb-6">
                    {/* Animated ring */}
                    <div className={`absolute -inset-3 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`} />
                    <div className={`relative w-[104px] h-[104px] rounded-full bg-white border-2 border-gray-100 shadow-lg group-hover:shadow-2xl group-hover:border-transparent transition-all duration-500 flex items-center justify-center`}>
                      {/* Gradient border on hover */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="absolute inset-[2px] rounded-full bg-white group-hover:bg-gray-50/80 transition-colors duration-500" />
                      <div className="relative flex flex-col items-center">
                        <item.icon className={`w-8 h-8 text-gray-400 group-hover:text-transparent transition-colors duration-500`} style={{ WebkitBackgroundClip: 'text' }} />
                        <div className={`w-8 h-8 absolute bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 [mask-image:var(--icon-mask)]`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    {/* Step badge */}
                    <div className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md border-2 border-white`}>
                      <span className="text-xs font-bold text-white">{item.step}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/80 shadow-sm group-hover:shadow-xl group-hover:bg-white group-hover:-translate-y-1 transition-all duration-500 w-full">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical timeline */}
          <div className="lg:hidden relative">
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-200 via-accent-200 to-amber-200 rounded-full" />

            <div className="space-y-6">
              {processSteps.map((item, i) => (
                <div key={i} className="group relative flex gap-5 items-start">
                  {/* Timeline node */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm`}>
                      <span className="text-[10px] font-bold text-gray-500">{item.step}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:border-gray-200 transition-all duration-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link to="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300">
              Start Your Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          WHY CHOOSE US — Modern Bento Grid
       ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-gray-950 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              <Sparkles className="w-4 h-4" /> Why FertiCare Global
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Everything You Need,{' '}
              <span className="bg-gradient-to-r from-accent-400 to-pink-400 bg-clip-text text-transparent">One Platform</span>
            </h2>
            <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
              We combine medical excellence with hospitality — making fertility treatment abroad seamless.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 — Big */}
            <div className="lg:row-span-2 group bg-gradient-to-br from-primary-500/10 to-primary-600/5 border border-white/[0.06] rounded-3xl p-8 hover:border-primary-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-sky-400 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Save Up to 70%</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  World-class IVF from $3,500. Same quality as the US or UK at a fraction of the price. All costs transparent and upfront — no surprises.
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'IVF Treatment', home: '$15,000', abroad: '$3,500' },
                    { label: 'ICSI + PGT', home: '$22,000', abroad: '$6,000' },
                    { label: 'Egg Donation', home: '$30,000', abroad: '$8,000' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                      <span className="text-sm text-gray-300">{row.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500 line-through">{row.home}</span>
                        <span className="text-sm font-bold text-emerald-400">{row.abroad}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-accent-500/10 to-accent-600/5 border border-white/[0.06] rounded-3xl p-8 hover:border-accent-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-pink-400 flex items-center justify-center mb-5 shadow-lg shadow-accent-500/20">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Top-Rated Specialists</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  42 vetted fertility doctors across 12 accredited clinics with proven success rates averaging 68%.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {doctors.slice(0, 4).map((d, i) => (
                      <img key={i} src={d.photo} alt="" className="w-9 h-9 rounded-full border-2 border-gray-950 object-cover" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">+38 more specialists</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-emerald-500/10 to-teal-600/5 border border-white/[0.06] rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/20">
                  <Plane className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Full Concierge Service</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visa support, flights, boutique hotels, airport pickup, and a dedicated coordinator who speaks your language.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Visa', 'Flights', 'Hotels', 'Transfers', 'Translation'].map(tag => (
                    <span key={tag} className="text-xs bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-gradient-to-br from-amber-500/10 to-orange-600/5 border border-white/[0.06] rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Guaranteed Transparency</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No hidden fees. Every cost is itemized before you commit. Payment plans available for all budgets.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group bg-gradient-to-br from-violet-500/10 to-purple-600/5 border border-white/[0.06] rounded-3xl p-8 hover:border-violet-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center mb-5 shadow-lg shadow-violet-500/20">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">6+ Countries</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Access top clinics across India, Mexico, Czech Republic, Japan, UAE, Greece, and more.
                </p>
                <div className="flex items-center gap-3">
                  {countries.slice(0, 6).map((c) => (
                    <span key={c.code} className="text-2xl" title={c.name}>{c.flag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          FEATURED DOCTORS
       ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-gradient-to-b from-white to-gray-50/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900">
                Meet Our <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Doctors</span>
              </h2>
              <p className="mt-3 text-gray-500 text-lg max-w-lg">Hand-picked fertility experts with exceptional track records and compassionate care.</p>
            </div>
            <Link to="/doctors" className="group hidden md:inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all">
              View All Doctors
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDoctors.map(d => <DoctorCard key={d.id} doctor={d} />)}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/doctors" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold">
              View All Doctors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          PACKAGES — Featured 3 with accent bg
       ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent-100 rounded-full blur-3xl opacity-50" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900">
              Popular <span className="bg-gradient-to-r from-accent-500 to-pink-500 bg-clip-text text-transparent">Treatment Packages</span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">All-inclusive packages with transparent pricing — no hidden fees, ever.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredPackages.map((p, i) => (
              <PackageCard key={p.id} pkg={p} clinicName={clinics.find(c => c.id === p.clinicId)?.name} featured={i === 1} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/packages" className="group inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-800 px-8 py-3.5 rounded-xl font-semibold hover:border-primary-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Build Custom Package
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS — Large Featured + Cards
       ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900">
              Families We've <span className="bg-gradient-to-r from-pink-500 to-accent-500 bg-clip-text text-transparent">Helped</span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">Real stories from real families who trusted FertiCare Global with their dream.</p>
          </div>

          {/* Featured testimonial */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 border border-primary-100/50">
              <Quote className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 text-primary-200" />
              <div className="relative">
                <div className="min-h-[120px]">
                  {featuredTestimonials.map((t, i) => (
                    <div key={t.id} className={`transition-all duration-500 ${i === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium pl-6 md:pl-8">
                        "{t.text}"
                      </p>
                      <div className="mt-6 flex items-center justify-between pl-6 md:pl-8">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-lg">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{t.name}</p>
                            <p className="text-sm text-gray-500">{t.treatment}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {featuredTestimonials.map((_, i) => (
                    <button key={i} onClick={() => setActiveTestimonial(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-primary-500' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial mini-cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map(t => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          DESTINATIONS — Country Cards
       ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              <Globe className="w-4 h-4" /> Global Network
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900">
              Top <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Destinations</span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">
              Choose from world-renowned fertility hubs with competitive pricing and warm hospitality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.slice(0, 6).map((country) => {
              const countryDoctors = doctors.filter(d => d.country === country.code);
              const countryClinics = clinics.filter(c => c.country === country.code);
              return (
                <Link key={country.code} to={`/clinics?country=${country.code}`}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-5 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-500" />
                  <div className="relative">
                    <span className="text-4xl block mb-3">{country.flag}</span>
                    <h3 className="font-bold text-gray-900 text-sm">{country.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {countryClinics.length} clinic{countryClinics.length !== 1 ? 's' : ''} · {countryDoctors.length} doctor{countryDoctors.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          CTA — Final Conversion Section
       ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
            <Baby className="w-4 h-4 text-accent-300" />
            <span className="text-sm font-medium text-white/90">Free Consultation Available</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-accent-300 to-pink-300 bg-clip-text text-transparent">
              Fertility Journey?
            </span>
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Get a free, no-obligation consultation and personalized treatment plan from our expert fertility coordinators.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/contact"
              className="group inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/cost-calculator"
              className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/25 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              Cost Calculator
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Hidden Fees</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> JCI-Accredited</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24/7 Support</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Money-Back Guarantee</span>
          </div>
        </div>
      </section>
    </div>
  );
}
