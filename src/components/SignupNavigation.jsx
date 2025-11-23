import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignupNavigation = () => {
  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-500">Back to Home</span>
          </Link>
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe9cd68f-6895-4b47-a0cd-c9f1d5fce2a3_320w.png"
            alt="CodesRock Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="w-20"></div>
        </div>
      </div>
    </nav>
  );
};

export default SignupNavigation;
