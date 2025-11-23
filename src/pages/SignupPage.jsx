import { useState } from 'react';
import BackgroundElements from '../components/BackgroundElements';
import SignupNavigation from '../components/SignupNavigation';
import RoleSelector from '../components/RoleSelector';
import SchoolContent from '../components/SchoolContent';
import ParentContent from '../components/ParentContent';
import SignupFooter from '../components/SignupFooter';

const SignupPage = () => {
  const [selectedRole, setSelectedRole] = useState('school');

  return (
    <div className="text-gray-800 bg-[#FAFAFA] relative text-lg min-h-screen">
      <BackgroundElements />
      <SignupNavigation />

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Let&apos;s get you <span className="text-[#FF7340]">set up.</span>
          </h1>
          <p className="text-xl text-gray-500">Select your role to view your specialized package.</p>
        </div>

        {/* Role Selector */}
        <RoleSelector selectedRole={selectedRole} onSelectRole={setSelectedRole} />

        {/* Dynamic Content */}
        {selectedRole === 'school' ? <SchoolContent /> : <ParentContent />}
      </main>

      <SignupFooter />
    </div>
  );
};

export default SignupPage;
