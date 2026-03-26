import { Globe } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-12 border-y border-gray-100 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-10">
          Trusted by leading educational institutions
        </p>
        <div className="flex flex-wrap gap-8 md:gap-12 hover:grayscale-0 transition-all duration-500 opacity-60 grayscale gap-x-10 gap-y-10 items-center justify-center">
          <div className="text-2xl font-bold font-serif text-gray-600">GES</div>
          <div className="text-xl font-bold font-sans text-gray-600 flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#46C5D5]" />
            Unicef Startup Lab
          </div>
          <div className="text-xl font-bold text-gray-600 font-mono">Little Explorers</div>
          <div className="text-xl font-bold text-gray-600">Ghana International School</div>
          <div className="text-xl font-bold text-gray-600 italic">Vine Christian School</div>
          <div className="text-xl font-bold text-gray-600 font-serif">Eden International</div>
          <div className="text-xl font-bold text-gray-600 tracking-tight">Goshen Academy</div>
          <div className="text-xl font-bold text-gray-600 underline decoration-[#FDC82F] decoration-2 underline-offset-4">Brainy Bairns</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
