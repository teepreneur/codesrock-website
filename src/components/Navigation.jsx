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
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToForm = () => {
    setMobileMenuOpen(false);
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.location.href = '/#contact';
    }
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
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-panel shadow-md' : 'glass-panel'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo Image */}
            <a
              href="/"
              className="flex-shrink-0 group cursor-pointer transition-transform hover:scale-105 duration-300 flex items-center gap-2 md:gap-3"
              aria-label="CodesRock Labs Home"
            >
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe9cd68f-6895-4b47-a0cd-c9f1d5fce2a3_320w.png"
                alt="CodesRock Logo"
                className="h-14 md:h-20 w-auto object-contain drop-shadow-sm"
                loading="eager"
              />
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF7340] to-[#FF9B71] tracking-tight">
                Labs
              </span>
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

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 p-3 hover:bg-gray-100 rounded-xl transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7 text-gray-800" />
                ) : (
                  <Menu className="w-7 h-7 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Solid Opaque Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col h-screen w-screen overflow-y-auto">
          {/* Header inside Mobile Overlay */}
          <div className="flex justify-between items-center h-20 px-4 sm:px-6 border-b border-gray-100 shrink-0 bg-white">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe9cd68f-6895-4b47-a0cd-c9f1d5fce2a3_320w.png"
                alt="CodesRock Logo"
                className="h-14 w-auto object-contain"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF7340] to-[#FF9B71] tracking-tight">
                Labs
              </span>
            </a>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 p-3 hover:bg-gray-100 rounded-xl transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-7 h-7 text-gray-800" />
            </button>
          </div>

          {/* Navigation Links & Content */}
          <div className="px-6 py-8 flex-1 flex flex-col justify-between bg-white">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left text-xl font-bold text-gray-800 hover:text-gray-900 transition-all py-4 px-4 rounded-2xl hover:bg-gray-50 active:bg-gray-100 flex items-center"
                >
                  <span
                    className="w-3 h-3 rounded-full mr-4"
                    style={{ backgroundColor: link.color }}
                  />
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 pb-8 border-t border-gray-100 mt-8">
              <button
                onClick={scrollToForm}
                className="w-full bg-[#FF7340] hover:bg-[#E65D2D] text-white font-bold rounded-2xl py-4 px-6 shadow-lg transition-all flex items-center justify-center gap-3 text-lg"
              >
                Book Free Demo <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
