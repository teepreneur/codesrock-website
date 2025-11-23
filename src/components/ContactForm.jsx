import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'school',
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
    // Clear error when user starts typing
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: null }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter your name' });
      return false;
    }
    if (!formData.phone.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter your phone number' });
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

    // Validate form
    if (!validateForm()) return;

    // Set loading state
    setStatus({ loading: true, success: false, error: null });

    try {
      // Check if Supabase is configured
      if (!supabase) {
        console.log('Form submission (Supabase not configured):', formData);
        setStatus({
          loading: false,
          success: false,
          error: 'Database not configured. Please contact support.'
        });
        return;
      }

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('demo_requests')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            role: formData.role,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      // Success!
      setStatus({ loading: false, success: true, error: null });

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          role: 'school',
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

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-3xl mr-auto ml-auto pr-4 pl-4">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-gray-100">
          <div className="bg-[#FF7340] p-10 text-center relative overflow-hidden">
            <div
              className="bg-center opacity-10 w-full h-full bg-cover absolute top-0 left-0"
              style={{
                backgroundImage:
                  'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaf39219-7172-401d-91d4-e62668205af1_1600w.png)',
              }}
            ></div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 relative z-10">
              Ready to Rock?
            </h2>
            <p className="text-white/90 text-base relative z-10">
              We'll call you within 24 hours for your free 20-min demo.
            </p>
          </div>

          <div className="p-10 md:p-14">
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Success Message */}
              {status.success && (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 font-medium">
                    Thank you! We've received your request and will contact you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {status.error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <p className="text-red-800 font-medium">{status.error}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Ellen Darko"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FF7340]/30 focus:bg-white focus:ring-0 outline-none transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="054 419 8026"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FF7340]/30 focus:bg-white focus:ring-0 outline-none transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="hello@school.edu"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FF7340]/30 focus:bg-white focus:ring-0 outline-none transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">I am a...</label>
                <div className="flex gap-6">
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="school"
                      checked={formData.role === 'school'}
                      onChange={handleChange}
                      disabled={status.loading}
                      className="peer sr-only"
                    />
                    <div className="text-center py-4 rounded-2xl border-2 border-gray-100 text-gray-500 font-medium peer-checked:border-[#46C5D5] peer-checked:text-[#46C5D5] peer-checked:bg-[#46C5D5]/5 transition-all text-base peer-disabled:opacity-50 peer-disabled:cursor-not-allowed">
                      School Rep
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="parent"
                      checked={formData.role === 'parent'}
                      onChange={handleChange}
                      disabled={status.loading}
                      className="peer sr-only"
                    />
                    <div className="text-center py-4 rounded-2xl border-2 border-gray-100 text-gray-500 font-medium peer-checked:border-[#FDC82F] peer-checked:text-[#FDC82F] peer-checked:bg-[#FDC82F]/5 transition-all text-base peer-disabled:opacity-50 peer-disabled:cursor-not-allowed">
                      Parent
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={status.loading || status.success}
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-black transition-all transform hover:-translate-y-1 mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {status.loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Submitting...
                  </>
                ) : status.success ? (
                  <>
                    <CheckCircle2 className="w-6 h-6" />
                    Submitted!
                  </>
                ) : (
                  'Schedule My Free Demo'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
