import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToForm = () => {
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Image */}
          <a
            href="#"
            className="flex-shrink-0 group cursor-pointer transition-transform hover:scale-105 duration-300 relative z-50"
          >
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe9cd68f-6895-4b47-a0cd-c9f1d5fce2a3_320w.png"
              alt="CodesRock Logo"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('why-screen-free')}
              className="text-base font-medium text-gray-600 hover:text-[#46C5D5] transition-colors cursor-pointer"
            >
              Why Screen-Free?
            </button>
            <button
              onClick={() => scrollToSection('kit')}
              className="text-base font-medium text-gray-600 hover:text-[#FF7340] transition-colors cursor-pointer"
            >
              The Kit
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-base font-medium text-gray-600 hover:text-[#5D3B98] transition-colors cursor-pointer"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-base font-medium text-gray-600 hover:text-[#FDC82F] transition-colors cursor-pointer"
            >
              About Us
            </button>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={scrollToForm}
              className="hover:bg-[#E65D2D] shadow-orange-200 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex gap-2 text-base font-semibold text-white bg-[#FF7340] rounded-full pt-3 pr-7 pb-3 pl-7 shadow-lg gap-x-2 gap-y-2 items-center"
            >
              Book Free Demo <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden relative z-50">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-24 left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <button
            onClick={() => scrollToSection('why-screen-free')}
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#46C5D5] transition-colors py-2"
          >
            Why Screen-Free?
          </button>
          <button
            onClick={() => scrollToSection('kit')}
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#FF7340] transition-colors py-2"
          >
            The Kit
          </button>
          <button
            onClick={() => scrollToSection('impact')}
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#5D3B98] transition-colors py-2"
          >
            Impact
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left text-lg font-medium text-gray-700 hover:text-[#FDC82F] transition-colors py-2"
          >
            About Us
          </button>
          <button
            onClick={scrollToForm}
            className="w-full bg-[#FF7340] hover:bg-[#E65D2D] text-white font-semibold rounded-full py-4 px-6 shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
          >
            Book Free Demo <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
          style={{ top: '96px' }}
        />
      )}
    </nav>
  );
};

export default Navigation;
