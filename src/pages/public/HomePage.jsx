import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Heart, Stethoscope, DollarSign, Plane, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { doctors, clinics, testimonials, globalStats, packages } from '../../data/mockData';
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
    overlay: 'from-primary-900/80 via-primary-900/60 to-primary-900/40',
  },
  {
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1920&q=80',
    title: 'World-Class',
    highlight: 'Fertility',
    titleEnd: 'Specialists',
    subtitle: '42 vetted doctors across 12 JCI-accredited clinics with proven success rates and personalized treatment plans.',
    overlay: 'from-primary-900/80 via-primary-800/55 to-accent-900/40',
  },
  {
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1920&q=80',
    title: 'Advanced',
    highlight: 'IVF Technology',
    titleEnd: 'Global Access',
    subtitle: 'From PGT genetic testing to ICSI and egg freezing — cutting-edge reproductive science at affordable prices worldwide.',
    overlay: 'from-accent-900/75 via-primary-900/55 to-primary-900/40',
  },
  {
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=80',
    title: 'Complete',
    highlight: 'Care Package',
    titleEnd: 'For Your Trip',
    subtitle: 'Travel arrangements, visa support, boutique hotels, and a dedicated coordinator — we handle everything so you can focus on your family.',
    overlay: 'from-primary-900/80 via-primary-900/60 to-accent-900/35',
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState('right');

  const featuredDoctors = doctors.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredPackages = packages.filter(p => p.popular);

  const goToSlide = useCallback((index) => {
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setSlideDirection('right');
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideDirection('left');
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  return (
    <div>
      {/* ─── Hero Slider ─── */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[800ms] ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>
          </div>
        ))}

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute top-20 right-[10%] w-32 h-32 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute bottom-32 right-[20%] w-20 h-20 border border-accent-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute top-40 right-[30%] w-2 h-2 bg-accent-400/40 rounded-full animate-pulse" />
          <div className="absolute top-60 right-[15%] w-3 h-3 bg-white/20 rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-40 left-[5%] w-2 h-2 bg-accent-300/30 rounded-full animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl lg:max-w-3xl">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
                currentSlide === heroSlides.indexOf(heroSlides[currentSlide]) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">Trusted by 12,500+ families worldwide</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-white">
                {heroSlides[currentSlide].title}{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-accent-300 via-accent-400 to-pink-300 bg-clip-text text-transparent">
                    {heroSlides[currentSlide].highlight}
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-accent-400/60 to-pink-400/60 rounded-full blur-[1px]" />
                </span>
                <br className="hidden sm:block" />
                <span className="text-white">{heroSlides[currentSlide].titleEnd}</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
                {heroSlides[currentSlide].subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/cost-calculator"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-pink-500 text-white px-6 sm:px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Calculate Your Savings
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/doctors"
                  className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/25 text-white px-6 sm:px-8 py-3.5 rounded-xl font-semibold hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Find a Doctor
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <span className="flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm">
                    <ShieldCheck className="w-4 h-4 text-accent-300" />
                  </span>
                  JCI-Accredited Clinics
                </span>
                <span className="flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm">
                    <Globe className="w-4 h-4 text-accent-300" />
                  </span>
                  6+ Countries
                </span>
                <span className="flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm">
                    <Heart className="w-4 h-4 text-accent-300" />
                  </span>
                  12,500+ Babies Born
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {/* Progress bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 pb-8">
              {/* Arrow Controls */}
              <div className="hidden md:flex items-center gap-2 mr-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white/25 backdrop-blur-md bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white hover:border-white/40 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-white/25 backdrop-blur-md bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white hover:border-white/40 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide indicators */}
              <div className="flex items-center gap-2 flex-1">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="group relative flex-1 max-w-[120px]"
                  >
                    <div className="h-[3px] rounded-full bg-white/20 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          index === currentSlide
                            ? 'bg-gradient-to-r from-accent-400 to-pink-400'
                            : index < currentSlide
                              ? 'bg-white/50 w-full'
                              : 'w-0'
                        }`}
                        style={index === currentSlide ? {
                          animation: isPlaying ? 'slideProgress 5.5s linear' : 'none',
                          width: '100%',
                        } : {}}
                      />
                    </div>
                    <span className={`absolute -top-7 left-0 text-xs font-medium transition-opacity ${
                      index === currentSlide ? 'text-white/80 opacity-100' : 'opacity-0'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </button>
                ))}
              </div>

              {/* Play / Pause */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full border border-white/25 backdrop-blur-md bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white hover:border-white/40 transition-all"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              {/* Slide counter */}
              <span className="hidden sm:block text-white/50 text-sm font-mono tabular-nums ml-1">
                {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-900/50 to-transparent z-[5]" />
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
