import { School, Baby, Check } from 'lucide-react';

const RoleSelector = ({ selectedRole, onSelectRole }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
      {/* School Card */}
      <div
        onClick={() => onSelectRole('school')}
        className={`role-card cursor-pointer group relative bg-white border-2 rounded-[2rem] p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
          selectedRole === 'school' ? 'border-[#FF7340] bg-[#FFF4F0]' : 'border-gray-100'
        }`}
      >
        <div className={`absolute top-6 right-6 w-6 h-6 bg-[#FF7340] rounded-full flex items-center justify-center text-white transition-all duration-300 ${
          selectedRole === 'school' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}>
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
        </div>
        <div className="w-14 h-14 rounded-2xl bg-[#46C5D5]/10 text-[#46C5D5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <School className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">I represent a School</h3>
        <p className="text-gray-500 text-base">For preschools and primary schools looking to integrate computational thinking into the classroom.</p>
      </div>

      {/* Parent Card */}
      <div
        onClick={() => onSelectRole('parent')}
        className={`role-card cursor-pointer group relative bg-white border-2 rounded-[2rem] p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
          selectedRole === 'parent' ? 'border-[#FF7340] bg-[#FFF4F0]' : 'border-gray-100'
        }`}
      >
        <div className={`absolute top-6 right-6 w-6 h-6 bg-[#FF7340] rounded-full flex items-center justify-center text-white transition-all duration-300 ${
          selectedRole === 'parent' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}>
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
        </div>
        <div className="w-14 h-14 rounded-2xl bg-[#FDC82F]/10 text-[#FDC82F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Baby className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">I am a Parent</h3>
        <p className="text-gray-500 text-base">For individuals wanting a home kit to give their child a head start in logic and coding.</p>
      </div>
    </div>
  );
};

export default RoleSelector;
