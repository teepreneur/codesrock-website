import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for subtle nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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

  const navLinks = [
    { id: 'why-screen-free', label: 'Why Screen-Free?', color: '#46C5D5' },
    { id: 'kit', label: 'The Kit', color: '#FF7340' },
    { id: 'impact', label: 'Impact', color: '#5D3B98' },
    { id: 'about', label: 'About Us', color: '#FDC82F' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel shadow-md' : 'glass-panel'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo Image */}
          <a
            href="#"
            className="flex-shrink-0 group cursor-pointer transition-transform hover:scale-105 duration-300 relative z-50"
            aria-label="CodesRock Home"
          >
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe9cd68f-6895-4b47-a0cd-c9f1d5fce2a3_320w.png"
              alt="CodesRock Logo"
              className="h-14 md:h-20 w-auto object-contain drop-shadow-sm"
              loading="eager"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer relative group py-2"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: link.color }}
                />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={scrollToForm}
              className="hover:bg-[#E65D2D] shadow-orange-200 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex gap-2 text-base font-semibold text-white bg-[#FF7340] rounded-full py-3 px-7 shadow-lg items-center"
            >
              Book Free Demo <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Toggle - Larger touch target */}
          <div className="md:hidden relative z-50">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 p-3 hover:bg-gray-100 rounded-xl transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
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

      {/* Mobile Menu - Full screen overlay */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-white z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="px-6 py-8 h-full flex flex-col">
          {/* Navigation Links - Larger touch targets */}
          <div className="space-y-2 flex-1">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-xl font-medium text-gray-800 hover:text-gray-900 transition-all py-4 px-4 rounded-2xl hover:bg-gray-50 active:bg-gray-100 min-h-[56px] flex items-center"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full mr-4"
                  style={{ backgroundColor: link.color }}
                />
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile CTA - At bottom for easy thumb access */}
          <div className="pt-6 pb-8 border-t border-gray-100 mt-auto">
            <button
              onClick={scrollToForm}
              className="w-full bg-[#FF7340] hover:bg-[#E65D2D] active:bg-[#D04D1D] text-white font-semibold rounded-2xl py-5 px-6 shadow-lg transition-all flex items-center justify-center gap-3 text-lg min-h-[60px]"
            >
              Book Free Demo <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              Or scroll down to explore
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navigation;
