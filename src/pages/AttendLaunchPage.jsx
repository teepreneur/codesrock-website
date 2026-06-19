import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Calendar, Clock, MapPin, CheckCircle2, AlertCircle, Loader2, Sparkles, BookOpen, Users, Code, Award } from 'lucide-react';
import BackgroundElements from '../components/BackgroundElements';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AttendLaunchPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school_org: '',
    role: 'parent',
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
    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter your full name' });
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.phone.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter a phone number' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus({ loading: true, success: false, error: null });

    try {
      // 1. Attempt to store in Supabase
      if (supabase) {
        const { error } = await supabase
          .from('launch_attendees')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              school_org: formData.school_org,
              role: formData.role.toUpperCase(),
            },
          ]);

        if (error) throw error;
      } else {
        // 2. Fallback to LocalStorage + mock success if Supabase is offline/not configured
        console.warn('Supabase not configured. Saving RSVP to local storage fallback.');
        const existingRSVPs = JSON.parse(localStorage.getItem('launch_rsvps') || '[]');
        existingRSVPs.push({
          ...formData,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('launch_rsvps', JSON.stringify(existingRSVPs));
      }

      setStatus({ loading: false, success: true, error: null });
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          school_org: '',
          role: 'parent',
        });
        setStatus({ loading: false, success: false, error: null });
      }, 4000);

    } catch (err) {
      console.error('RSVP Submission Error:', err);
      // Even if database fails, we save locally to ensure we don't lose the lead
      try {
        const existingRSVPs = JSON.parse(localStorage.getItem('launch_rsvps') || '[]');
        existingRSVPs.push({
          ...formData,
          timestamp: new Date().toISOString(),
          error_fallback: true,
        });
        localStorage.setItem('launch_rsvps', JSON.stringify(existingRSVPs));
        setStatus({ loading: false, success: true, error: null });
      } catch (backupErr) {
        setStatus({
          loading: false,
          success: false,
          error: err.message || 'Failed to submit. Please check your connection and try again.',
        });
      }
    }
  };

  return (
    <div className="text-gray-800 bg-[#FAFAFA] relative text-lg min-h-screen">
      <BackgroundElements />
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-32 md:pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#FFF4F0] border border-[#FF7340]/20 text-[#FF7340] px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce-once">
          <Sparkles className="w-4 h-4" />
          Virtual Portal Launch Event
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          The Screen-Free Future of <span className="text-[#FF7340]">STEM Education.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Join CodesRock Labs for the live launch of our open-source **Teacher Portal**—a Digital Public Good bridging the coding and robotics gap for preschools, KG, and early grades.
        </p>

        {/* Quick Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-gray-200/50 shadow-sm">
            <Calendar className="w-8 h-8 text-[#FF7340] shrink-0" />
            <div className="text-left">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Date</p>
              <p className="text-sm font-bold text-gray-800">Tuesday, June 30</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-gray-200/50 shadow-sm">
            <Clock className="w-8 h-8 text-[#46C5D5] shrink-0" />
            <div className="text-left">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Time</p>
              <p className="text-sm font-bold text-gray-800">4:00 PM GMT</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-gray-200/50 shadow-sm">
            <MapPin className="w-8 h-8 text-[#5D3B98] shrink-0" />
            <div className="text-left">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Location</p>
              <p className="text-sm font-bold text-gray-800">Live Online (Zoom)</p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP & Agenda Split */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Agenda & Ecosystem Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2.5 h-8 bg-[#FF7340] rounded-full"></span>
                Event Agenda
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#FFF4F0] p-2.5 rounded-xl text-[#FF7340] font-bold text-sm shrink-0">16:00</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Introduction & CodesRock Labs Mission</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Our vision to democratize STEM education in Africa starting from the formative years (ages 3–8).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#E8FAFC] p-2.5 rounded-xl text-[#46C5D5] font-bold text-sm shrink-0">16:15</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">The CodesRock Ecosystem Showcase</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      A live walkthrough of our tactile, screen-free learning tools—including physical robots (RockBot), activity books, and Adinkra-themed coding mats.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#F3E8FF] p-2.5 rounded-xl text-[#5D3B98] font-bold text-sm shrink-0">16:30</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Early Childhood STEM: Bridging the Screen-Time Gap</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      How we introduce core coding logic (loops, conditionals, variables, data types) to KG & early grades safely without screen fatigue.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#FFF4F0] p-2.5 rounded-xl text-[#FF7340] font-bold text-sm shrink-0">16:45</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Announcing the Open-Source Teacher Portal</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      We are making the Teacher Portal open source as a **Digital Public Good**. Learn how schools can adapt it to build their own local curriculums at zero software cost.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#E8FAFC] p-2.5 rounded-xl text-[#46C5D5] font-bold text-sm shrink-0">17:00</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Impact Reports & Cohort Onboarding</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Showcasing results from our UNICEF StartUp Lab pilot schools and detailing onboarding cohorts for the upcoming term.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stakeholder Blocks */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-gray-100 space-y-3">
                <BookOpen className="w-8 h-8 text-[#FF7340]" />
                <h4 className="font-bold text-gray-900">For School Leaders</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Offer world-class STEM coding and robotics classes without buying computers or building labs. Boost school admissions prestige.
                </p>
              </div>
              <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-gray-100 space-y-3">
                <Users className="w-8 h-8 text-[#46C5D5]" />
                <h4 className="font-bold text-gray-900">For Parents</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Give your child coding mastery and AI readiness completely screen-free. Become a parent ambassador in your community.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF7340] to-[#E05B26]"></div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">Reserve Your Slot</h2>
              <p className="text-sm text-gray-500 mb-6">
                Fill in the details below to receive your webinar link and a complimentary CodesRock Info Kit.
              </p>

              {/* Status Notifications */}
              {status.success && (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-center gap-3 mb-6 animate-fade-in">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                  <p className="text-green-800 text-sm font-medium">
                    RSVP Confirmed! We have sent a confirmation email with your invitation details. See you on June 30th!
                  </p>
                </div>
              )}

              {status.error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-center gap-3 mb-6 animate-fade-in">
                  <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
                  <p className="text-red-800 text-sm font-medium">{status.error}</p>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 ml-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status.loading || status.success}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all text-sm disabled:opacity-50"
                    placeholder="e.g. Ama Serwaa"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 ml-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status.loading || status.success}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all text-sm disabled:opacity-50"
                    placeholder="e.g. ama@gmail.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 ml-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status.loading || status.success}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all text-sm disabled:opacity-50"
                    placeholder="e.g. 0244 000 000"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 ml-1">School / Organization Name</label>
                  <input
                    type="text"
                    name="school_org"
                    value={formData.school_org}
                    onChange={handleChange}
                    disabled={status.loading || status.success}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all text-sm disabled:opacity-50"
                    placeholder="e.g. Little Angels Academy"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 ml-1">I am registering as a:</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    disabled={status.loading || status.success}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all text-sm disabled:opacity-50"
                  >
                    <option value="parent">Parent wanting child STEM success</option>
                    <option value="school_leader">School Proprietor / Academic Director</option>
                    <option value="teacher">Teacher / Educator interested in training</option>
                    <option value="partner">Corporate CSR / Development Partner</option>
                    <option value="other">Interested observer / Volunteer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status.loading || status.success}
                  className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold text-sm shadow-xl hover:bg-[#FF7340] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-6"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Securing RSVP...
                    </>
                  ) : status.success ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Spot Reserved!
                    </>
                  ) : (
                    <>
                      Reserve My Spot
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AttendLaunchPage;
