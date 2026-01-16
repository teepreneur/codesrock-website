import { BrainCircuit, Users } from 'lucide-react';

const WhyScreenFree = () => {
  return (
    <section className="z-10 pt-24 pb-24 relative" id="why-screen-free" aria-labelledby="why-screen-free-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="why-screen-free-heading" className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
              Why go{' '}
              <span className="text-[#CE3845] relative inline-block">
                Screen-Free
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-[#CE3845]/20"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{' '}
              in a digital world?
            </h2>
            <p className="text-gray-600 mb-10 text-xl leading-relaxed">
              Early childhood experts and the WHO warn against excessive screen time for children
              under 5. Yet, computational thinking is a critical 21st-century skill. We bridge that
              gap with tangible play.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#CE3845]/10 text-[#CE3845] flex items-center justify-center shrink-0">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Boosts Cognitive Development</h4>
                  <p className="text-base text-gray-500 mt-2">
                    Enhances logic, sequencing, and problem-solving without the dopamine spikes of
                    screens.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#46C5D5]/10 text-[#46C5D5] flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Social & Collaborative</h4>
                  <p className="text-base text-gray-500 mt-2">
                    Kids learn to debug together, communicate ideas, and build resilience through
                    group play.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Background blob matching yellow/orange from logo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FDC82F] to-[#FF7340] rounded-[2.5rem] rotate-3 opacity-20"></div>
            <div className="overflow-hidden bg-white rounded-[2.5rem] pt-3 pr-3 pb-3 pl-3 relative shadow-2xl">
              <div className="aspect-[4/3] bg-gray-50 rounded-[2rem] flex items-center justify-center text-gray-400 border border-gray-100">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/074e27c6-2b28-428e-a325-5376f94175bd_1600w.jpg"
                  alt="Smiling Ghanaian children learning with CodesRock"
                  className="w-full h-full object-cover rounded-[2rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyScreenFree;
