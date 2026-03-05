import { Link } from 'react-router-dom';
import { treatments } from '../../data/mockData';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';

export default function TreatmentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Fertility Treatments</h1>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Learn about the treatments we offer and find the right path for your parenthood journey.</p>
      </div>

      <div className="space-y-6">
        {treatments.map(t => (
          <div key={t.id} className="bg-white rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="text-5xl">{t.icon}</div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900">{t.name}</h2>
                  <p className="text-sm text-primary-600 font-medium mt-1">{t.shortDesc}</p>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{t.description}</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-700">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      ${t.priceRange.min.toLocaleString()} – ${t.priceRange.max.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 text-gray-700">
                      <Clock className="w-4 h-4 text-blue-500" />
                      {t.duration}
                    </span>
                    <span className="text-gray-700">Success: {t.successRange}</span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Treatment Steps</p>
                    <div className="flex flex-wrap gap-2">
                      {t.steps.map((step, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          <span className="w-4 h-4 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Link to="/cost-calculator" className="btn-primary text-sm whitespace-nowrap">Get Quote <ArrowRight className="w-4 h-4 inline ml-1" /></Link>
                  <Link to="/doctors" className="text-sm text-primary-600 hover:underline">Find Specialist</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
