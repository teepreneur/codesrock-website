import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  // Only show mobile sticky CTA after scrolling past the hero section
  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 600px (past hero section CTAs)
      setShowMobileCTA(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/233544198026"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-4 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all min-w-[56px] min-h-[56px] flex items-center justify-center ${showMobileCTA ? 'bottom-24' : 'bottom-6'
          } md:bottom-10`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>

      {/* Mobile Sticky CTA - Only shows after scrolling past hero */}
      <div
        className={`fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-100 md:hidden z-40 transition-all duration-300 ${showMobileCTA
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <button
          onClick={scrollToForm}
          className="w-full bg-[#FF7340] hover:bg-[#E65D2D] active:bg-[#D04D1D] text-white py-4 rounded-xl font-bold text-base shadow-lg transition-colors min-h-[52px]"
        >
          Book Free Demo
        </button>
      </div>
    </>
  );
};

export default FloatingCTA;
