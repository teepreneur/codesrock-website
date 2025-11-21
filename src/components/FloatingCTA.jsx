import { MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
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
        className="fixed bottom-28 right-5 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 md:hidden z-40 flex gap-3">
        <button
          onClick={scrollToForm}
          className="flex-1 bg-[#FF7340] text-white py-3.5 rounded-xl font-bold text-base shadow-lg"
        >
          Book Free Demo
        </button>
      </div>
    </>
  );
};

export default FloatingCTA;
