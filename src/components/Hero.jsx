import { Calendar, School } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroVideo from '/hero-animation.mp4?url';

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

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 mt-4 animate-fade-in-up">
          <img 
            src="/rocky_3d.png" 
            alt="Rocky from CodesRock" 
            className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full border-4 border-[#FF7340]/20 shadow-xl" 
          />
          
          <div className="relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-100 shadow-lg text-center md:text-left">
            {/* Speech bubble tail for md+ */}
            <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-r-[20px] border-r-white/70 border-b-[15px] border-b-transparent"></div>
            {/* Speech bubble tail for mobile */}
            <div className="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-b-[20px] border-b-white/70 border-r-[15px] border-r-transparent"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Play. Think. Code. Build. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CE3845] via-[#FDC82F] to-[#46C5D5]">
                Grow.
              </span>
            </h1>
          </div>
        </div>

        <p className="md:text-2xl leading-relaxed text-xl text-gray-500 max-w-4xl mr-auto mb-12 ml-auto">
          <span className="font-semibold text-gray-800">CodesRock Labs</span> is an innovative edtech company empowering children <span className="font-semibold text-gray-800">3+ years</span> with foundational <span className="font-semibold text-[#FF7340]">coding, AI, and robotics</span> skills through entirely <span className="font-semibold text-[#46C5D5]">screen-free</span>, hands-on activities. No tablets required—just pure creativity and real-world problem-solving.
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
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
