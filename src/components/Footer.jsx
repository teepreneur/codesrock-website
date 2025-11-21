import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          {/* Footer Logo */}
          <div className="flex items-center">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5abf275-e534-4710-9012-2ead72f258d6_320w.png"
              alt="CodesRock"
              className="h-14 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-[#CE3845] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#46C5D5] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#006699] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Starters Technology – CodesRock. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
