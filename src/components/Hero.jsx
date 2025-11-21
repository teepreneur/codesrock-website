import { Calendar, School, Code2 } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-5 py-2 shadow-sm mb-10 animate-float">
          <span className="bg-[#46C5D5]/10 text-[#46C5D5] text-sm font-bold px-3 py-0.5 rounded-full">
            New
          </span>
          <span className="text-sm font-medium text-gray-600">
            Join 150+ schools targeting 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.1]">
          Play. Think. Code. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CE3845] via-[#FDC82F] to-[#46C5D5]">
            Grow.
          </span>
        </h1>

        <p className="md:text-2xl leading-relaxed text-xl text-gray-500 max-w-3xl mr-auto mb-12 ml-auto">
          The complete <span className="font-semibold text-gray-800">screen-free</span>{' '}
          computational thinking program used by preschools and K3 across Ghana. No tablets
          required—just pure creativity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 w-full max-w-md mx-auto sm:max-w-none">
          <button
            onClick={scrollToForm}
            className="sm:w-auto shadow-orange-200 hover:shadow-2xl transition-all transform hover:-translate-y-1 flex gap-2 text-lg font-semibold text-white bg-[#FF7340] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl gap-x-2 gap-y-2 items-center justify-center"
          >
            <Calendar className="w-6 h-6" />
            Book a Free Online Demo
          </button>
          <button className="sm:w-auto hover:bg-[#46C5D5]/5 transition-all flex gap-2 text-lg font-semibold text-[#46C5D5] bg-white w-full border-[#46C5D5]/20 border-2 rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center">
            <School className="w-6 h-6" />
            Join as School or Parent
          </button>
        </div>

        {/* Hero Visuals */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] shadow-2xl border border-gray-100 p-4 md:p-10 aspect-[16/9] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

            {/* Simulated Characters representing Logo Aliens */}
            <div className="flex items-end gap-8 md:gap-20 z-10 pb-8">
              {/* Left Character (Blue) */}
              <div className="flex flex-col items-center animate-wub">
                <div className="w-24 h-28 md:w-36 md:h-44 bg-[#46C5D5] rounded-t-full rounded-b-3xl shadow-lg flex items-center justify-center relative group">
                  {/* Spots */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-[#2FB0C0] rounded-full opacity-60"></div>
                  <div className="absolute bottom-6 left-4 w-3 h-3 bg-[#2FB0C0] rounded-full opacity-60"></div>
                  {/* Face */}
                  <div className="flex gap-4 relative top-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 w-8 h-3 bg-white/40 rounded-full"></div>
                  {/* Antenna */}
                  <div className="absolute -top-6 -left-4 w-3 h-8 bg-[#46C5D5] -rotate-45 rounded-full"></div>
                  <div className="absolute -top-8 -left-6 w-5 h-5 bg-[#95E1EA] rounded-full"></div>
                </div>
                <div className="w-28 h-4 bg-gray-200/50 rounded-[100%] mt-4 blur-sm"></div>
              </div>

              {/* Middle Character (Pink) */}
              <div className="flex flex-col items-center animate-float">
                <div className="w-28 h-32 md:w-44 md:h-52 bg-[#EC4899] rounded-[2rem] shadow-lg flex items-center justify-center relative border-b-8 border-[#DB2777]">
                  <div className="w-20 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                    <Code2 className="w-10 h-10" strokeWidth={2} />
                  </div>
                  {/* Single Antenna */}
                  <div className="absolute -top-8 w-2 h-8 bg-[#EC4899]"></div>
                  <div className="absolute -top-10 w-6 h-6 bg-[#FDC82F] rounded-full animate-pulse shadow-lg shadow-yellow-200"></div>
                  {/* Eyes */}
                  <div className="absolute top-8 flex gap-8 w-full justify-center px-4">
                    <div className="w-8 h-8 bg-white rounded-full border-4 border-[#EC4899] flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full transform translate-x-1"></div>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full border-4 border-[#EC4899] flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full transform -translate-x-1"></div>
                    </div>
                  </div>
                </div>
                <div className="w-36 h-4 bg-gray-200/50 rounded-[100%] mt-4 blur-sm"></div>
              </div>

              {/* Right Character (Orange) */}
              <div className="flex flex-col items-center animate-wiggle" style={{ animationDelay: '1s' }}>
                <div className="w-24 h-24 md:w-36 md:h-36 bg-[#FF7340] rounded-full shadow-lg flex items-center justify-center relative overflow-hidden">
                  {/* Mouth */}
                  <div className="w-24 h-12 border-b-8 border-white/90 rounded-b-full mt-4"></div>
                  {/* Eyes on Stalks */}
                  <div className="absolute -top-6 -right-2 w-2 h-8 bg-[#FF7340] rotate-12"></div>
                  <div className="absolute -top-8 -right-4 w-6 h-6 bg-white border-4 border-[#FF7340] rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="w-28 h-4 bg-gray-200/50 rounded-[100%] mt-4 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
