import { Globe } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-12 border-y border-gray-100 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-10">
          Trusted by leading educational institutions
        </p>
        <div className="flex flex-wrap gap-10 md:gap-20 hover:grayscale-0 transition-all duration-500 opacity-60 grayscale gap-x-10 gap-y-10 items-center justify-center">
          <div className="text-2xl font-bold font-serif text-gray-600">GES</div>
          <div className="text-2xl font-bold font-sans text-gray-600 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Mastercard Foundation
          </div>
          <div className="text-2xl font-bold text-gray-600 font-mono">Little Explorers</div>
          <div className="text-2xl font-bold text-gray-600">Ghana International School</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
