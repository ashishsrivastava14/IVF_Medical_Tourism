import { Check } from 'lucide-react';

export default function ProgressStepper({ steps, currentStep }) {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {steps.map((step, i) => {
          const isCompleted = step.status === 'completed';
          const isCurrent = i === currentStep;
          return (
            <div key={i} className="flex-1 flex items-center">
              <div className="flex flex-col items-center w-full">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all
                  ${isCompleted ? 'bg-green-500 border-green-500 text-white' : isCurrent ? 'bg-primary-500 border-primary-500 text-white animate-pulse' : 'bg-white border-gray-300 text-gray-400'}`}>
                  {isCompleted ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`mt-2 text-xs text-center leading-tight ${isCompleted ? 'text-green-700 font-medium' : isCurrent ? 'text-primary-700 font-medium' : 'text-gray-400'}`}>
                  {step.label}
                </span>
                {step.date && <span className="text-[10px] text-gray-400">{step.date}</span>}
              </div>
              {i < steps.length - 1 && (
                <div className={`h-0.5 flex-1 mx-1 mt-[-1.5rem] ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
