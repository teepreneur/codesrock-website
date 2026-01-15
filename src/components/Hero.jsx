import { Calendar, School } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

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
          <button
            onClick={() => navigate('/signup')}
            className="sm:w-auto hover:bg-[#46C5D5]/5 transition-all flex gap-2 text-lg font-semibold text-[#46C5D5] bg-white w-full border-[#46C5D5]/20 border-2 rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center"
          >
            <School className="w-6 h-6" />
            Join as School or Parent
          </button>
        </div>

        {/* Hero Visuals - Video Animation */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden bg-gradient-to-br from-[#D4F1F4] via-[#FDE8F0] to-[#FEF3E2]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src={import.meta.env.BASE_URL + 'hero-animation.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
