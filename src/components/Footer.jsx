import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          {/* Footer Logo */}
          <div className="flex items-center">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5abf275-e534-4710-9012-2ead72f258d6_320w.png"
              alt="CodesRock - Screen-free computational thinking for kids"
              className="h-14 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
            />
          </div>
          <nav aria-label="Social media links">
            <ul className="flex gap-8 text-gray-400 list-none">
              <li>
                <a
                  href="#"
                  className="hover:text-[#CE3845] transition-colors block p-2 -m-2"
                  aria-label="Follow CodesRock on Instagram"
                >
                  <Instagram className="w-6 h-6" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#46C5D5] transition-colors block p-2 -m-2"
                  aria-label="Follow CodesRock on Twitter"
                >
                  <Twitter className="w-6 h-6" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#006699] transition-colors block p-2 -m-2"
                  aria-label="Follow CodesRock on LinkedIn"
                >
                  <Linkedin className="w-6 h-6" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Starters Technology – CodesRock. All rights reserved.</p>
          <nav aria-label="Legal links">
            <ul className="flex gap-6 mt-6 md:mt-0 list-none">
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
