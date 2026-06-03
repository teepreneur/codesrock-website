import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Check, Banknote, Package, ShieldCheck, Rocket, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const SchoolContent = () => {
  const [schoolType, setSchoolType] = useState('private');
  const [formData, setFormData] = useState({
    representative_name: '',
    representative_role: '',
    principal_name: '',
    principal_phone: '',
    school_name: '',
    location: '',
    max_students: '',
    school_phone: '',
    email: '',
    num_teachers: '2',
    num_students: '100',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: null }));
    }
  };

  const validateForm = () => {
    if (!formData.representative_name.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter representative name' });
      return false;
    }
    if (!formData.school_name.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter school name' });
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid email' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus({ loading: true, success: false, error: null });

    try {
      if (!supabase) {
        setStatus({
          loading: false,
          success: false,
          error: 'Database not configured. Please contact support.'
        });
        return;
      }

      const categoryTag = 
        schoolType === 'private' ? 'PRIVATE' : 'GOVERNMENT';
      
      const schoolNameFinal = `${formData.school_name} [${categoryTag}]` + 
        (schoolType !== 'government' && formData.num_teachers && formData.num_students 
          ? ` (${formData.num_teachers} Teachers, ${formData.num_students} Students)`
          : '');

      const { data, error } = await supabase
        .from('school_applications')
        .insert([
          {
            representative_name: formData.representative_name,
            representative_role: formData.representative_role,
            principal_name: formData.principal_name,
            principal_phone: formData.principal_phone,
            school_name: schoolNameFinal,
            location: formData.location,
            max_students: formData.max_students ? parseInt(formData.max_students) : null,
            school_phone: formData.school_phone,
            email: formData.email,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      setStatus({ loading: false, success: true, error: null });

      setTimeout(() => {
        setFormData({
          representative_name: '',
          representative_role: '',
          principal_name: '',
          principal_phone: '',
          school_name: '',
          location: '',
          max_students: '',
          school_phone: '',
          email: '',
          num_teachers: '2',
          num_students: '100',
        });
        setStatus({ loading: false, success: false, error: null });
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        loading: false,
        success: false,
        error: error.message || 'Something went wrong. Please try again.',
      });
    }
  };

  const isGovt = schoolType === 'government';
  const startingInvestment = isGovt ? 3600 : 5850;
  
  const teachersCount = parseInt(formData.num_teachers) || 0;
  const studentsCount = parseInt(formData.num_students) || 0;
  const monthlySub = isGovt ? 0 : (teachersCount * 50) + (studentsCount * 5);
  const termlySub = monthlySub * 3;

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start animate-fade-in">
      {/* Left Column: Package Details */}
      <div className="lg:col-span-5 space-y-8">
        {/* School Classification Toggle */}
        <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-gray-100">
          <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
            School Classification
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setSchoolType('private')}
              className={`py-3 px-2 text-center text-sm font-bold rounded-xl border-2 transition-all ${
                schoolType === 'private'
                  ? 'border-[#FF7340] bg-[#FFF4F0] text-[#FF7340]'
                  : 'border-gray-100 hover:border-gray-200 text-gray-500 bg-white'
              }`}
            >
              Private School
            </button>
            <button
              type="button"
              onClick={() => setSchoolType('government')}
              className={`py-3 px-2 text-center text-sm font-bold rounded-xl border-2 transition-all ${
                schoolType === 'government'
                  ? 'border-[#46C5D5] bg-[#E8FAFC] text-[#46C5D5]'
                  : 'border-gray-100 hover:border-gray-200 text-gray-500 bg-white'
              }`}
            >
              Govt / Sponsored
            </button>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-[#46C5D5] rounded-full"></span>
            Why Partner Schools Love Us
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <div className="bg-[#46C5D5]/10 p-1 rounded-full mt-1 text-[#46C5D5]">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-gray-600 text-base">
                <strong>Differentiation:</strong> Stand out as a forward-thinking STEM institution.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="bg-[#46C5D5]/10 p-1 rounded-full mt-1 text-[#46C5D5]">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-gray-600 text-base">
                <strong>Turnkey Solution:</strong> We provide the curriculum, training, and hardware.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="bg-[#46C5D5]/10 p-1 rounded-full mt-1 text-[#46C5D5]">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-gray-600 text-base">
                <strong>Teacher Support:</strong> Continuous professional development workshops.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="bg-[#46C5D5]/10 p-1 rounded-full mt-1 text-[#46C5D5]">
                <Banknote className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-gray-600 text-base">
                <strong>Income:</strong> Opportunity for schools to make extra revenue.
              </span>
            </li>
          </ul>
        </div>

        {/* Pricing Breakdown */}
        <div className="bg-[#0F172A] text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#46C5D5] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Package className="w-5 h-5 text-[#46C5D5]" />
            {isGovt ? 'Sponsored School Kit' : 'Comprehensive School Kit'}
          </h3>

          <div className="space-y-4 mb-8 border-b border-gray-700 pb-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Classroom Bot Activity Set</span>
              <span className="font-mono text-[#46C5D5]">₵ {isGovt ? '900' : '1,200'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Classroom Coding Activity Set</span>
              <span className="font-mono text-[#46C5D5]">₵ {isGovt ? '600' : '900'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Training, Evaluation & Validation</span>
              <span className="font-mono text-[#46C5D5]">₵ {isGovt ? '900' : '1,200'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Curriculum Access</span>
              <span className="font-mono text-[#46C5D5]">₵ {isGovt ? '1,200' : '1,500'}</span>
            </div>
            <div className="flex justify-between items-start text-sm">
              <span className="text-gray-400 pr-2">Training content (books, songs, flashcards, videos)</span>
              <span className="font-mono text-[#46C5D5] whitespace-nowrap">₵ {isGovt ? '0' : '1,050'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Gamified Teacher Portal Access</span>
              <span className="font-mono text-[#46C5D5]">{isGovt ? 'Sponsored / Free' : '1 Term Free'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Support & Maintenance</span>
              <span className="font-mono text-[#46C5D5]">{isGovt ? 'Sponsored / Free' : '1 Term Free'}</span>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">
                {isGovt ? 'Sponsored Onboarding' : 'Starting Investment'}
              </p>
              <div className="text-3xl font-bold mt-1">₵ {startingInvestment.toLocaleString()}</div>
            </div>
            {isGovt && (
              <span className="bg-[#46C5D5]/20 text-[#46C5D5] text-xs px-2 py-1 rounded border border-[#46C5D5]/30">
                UNICEF/CSR Funded
              </span>
            )}
          </div>
        </div>

        {/* Subscription / Sponsorship Details Card */}
        {!isGovt ? (
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-xl border border-slate-800 space-y-4">
            <h4 className="text-base font-bold text-gray-200 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#FF7340] rounded-full"></span>
              Term 2+ Portal Subscription Calculator
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Software access and support are free for the first term. Thereafter, subscriptions are calculated based on school size.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Est. Lead Teachers</label>
                <input
                  type="number"
                  name="num_teachers"
                  value={formData.num_teachers}
                  onChange={handleChange}
                  min="1"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-[#FF7340] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Est. Enrolled Kids</label>
                <input
                  type="number"
                  name="num_students"
                  value={formData.num_students}
                  onChange={handleChange}
                  min="1"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-[#FF7340] transition-colors"
                />
              </div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl space-y-2 border border-slate-700/50">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Teachers (₵50 × {teachersCount})</span>
                <span className="font-mono text-gray-300">₵ {(teachersCount * 50).toLocaleString()} / mo</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Students (₵5 × {studentsCount})</span>
                <span className="font-mono text-gray-300">₵ {(studentsCount * 5).toLocaleString()} / mo</span>
              </div>
              <div className="border-t border-slate-700 my-2 pt-2 flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase">Estimated Sub</p>
                  <p className="text-lg font-bold text-[#FF7340]">₵ {monthlySub.toLocaleString()}<span className="text-xs font-normal text-gray-400">/mo</span></p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 uppercase">Billed Termly</p>
                  <p className="text-sm font-bold text-gray-200">₵ {termlySub.toLocaleString()}<span className="text-xs font-normal text-gray-400">/term</span></p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-xl border border-slate-800 space-y-3">
            <h4 className="text-base font-bold text-[#46C5D5] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#46C5D5] rounded-full"></span>
              Government Sponsorship Model
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Through the UNICEF StartUp Lab, CodesRock packages for government/public schools are sponsored. 
              The initial onboarding investment of ₵3,600 and ongoing Teacher Portal subscriptions are funded 
              by Corporate CSR partners or International Development agencies. 
            </p>
            <div className="mt-4 bg-[#46C5D5]/10 p-3 rounded-lg border border-[#46C5D5]/20 text-center">
              <span className="text-xs font-semibold text-[#46C5D5]">Portal Subscription: ₵0 (Fully Sponsored)</span>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Comprehensive Form */}
      <div className="lg:col-span-7">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#46C5D5] to-[#2FB0C0]"></div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">School Partnership Application</h2>
          <p className="text-gray-500 mb-8">Complete the application below. A payment invoice will be sent to your email upon submission.</p>

          {/* Success Message */}
          {status.success && (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-medium">
                Application submitted successfully! We'll send you an invoice shortly.
              </p>
            </div>
          )}

          {/* Error Message */}
          {status.error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <p className="text-red-800 font-medium">{status.error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Applicant Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">School Representative Name *</label>
                <input
                  type="text"
                  name="representative_name"
                  value={formData.representative_name}
                  onChange={handleChange}
                  disabled={status.loading}
                  required
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#46C5D5] focus:bg-white outline-none transition-all disabled:opacity-50"
                  placeholder="e.g. Mrs. Ellen Darko"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Official Role</label>
                <input
                  type="text"
                  name="representative_role"
                  value={formData.representative_role}
                  onChange={handleChange}
                  disabled={status.loading}
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#46C5D5] focus:bg-white outline-none transition-all disabled:opacity-50"
                  placeholder="e.g. IT Head, Admin"
                />
              </div>
            </div>

            {/* Principal/Head Info (For Verification) */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-6">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#46C5D5]" strokeWidth={2} />
                Principal / Head / Owner Details
                <span className="text-xs font-normal text-gray-500 ml-auto">(For consent verification)</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="principal_name"
                    value={formData.principal_name}
                    onChange={handleChange}
                    disabled={status.loading}
                    className="input-field w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[#46C5D5] outline-none transition-all disabled:opacity-50"
                    placeholder="Name of Principal/Head"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Contact Number</label>
                  <input
                    type="tel"
                    name="principal_phone"
                    value={formData.principal_phone}
                    onChange={handleChange}
                    disabled={status.loading}
                    className="input-field w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[#46C5D5] outline-none transition-all disabled:opacity-50"
                    placeholder="Direct Phone Number"
                  />
                </div>
              </div>
            </div>

            {/* School Details */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">School Name *</label>
              <input
                type="text"
                name="school_name"
                value={formData.school_name}
                onChange={handleChange}
                disabled={status.loading}
                required
                className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#46C5D5] focus:bg-white outline-none transition-all disabled:opacity-50"
                placeholder="e.g. Little Explorers Academy"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Location / Area</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={status.loading}
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#46C5D5] focus:bg-white outline-none transition-all disabled:opacity-50"
                  placeholder="e.g. East Legon, Accra"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Max Students per Class (Pre-K to Grade 3)</label>
                <input
                  type="number"
                  name="max_students"
                  value={formData.max_students}
                  onChange={handleChange}
                  disabled={status.loading}
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#46C5D5] focus:bg-white outline-none transition-all disabled:opacity-50"
                  placeholder="e.g. 25"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">School Phone Number</label>
                <input
                  type="tel"
                  name="school_phone"
                  value={formData.school_phone}
                  onChange={handleChange}
                  disabled={status.loading}
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#46C5D5] focus:bg-white outline-none transition-all disabled:opacity-50"
                  placeholder="054 419 8026"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address (For Invoice) *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.loading}
                  required
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#46C5D5] focus:bg-white outline-none transition-all disabled:opacity-50"
                  placeholder="info@school.edu.gh"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status.loading || status.success}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-[#46C5D5] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status.loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : status.success ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Submitted!
                </>
              ) : (
                <>
                  Start Onboarding
                  <Rocket className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SchoolContent;
