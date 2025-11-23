import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Check, Gift, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ParentContent = () => {
  const [formData, setFormData] = useState({
    parent_name: '',
    number_of_children: '1',
    child_age_range: '3 - 5 Years',
    phone: '',
    email: '',
    delivery_location: '',
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
    if (!formData.parent_name.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter your name' });
      return false;
    }
    if (!formData.phone.trim()) {
      setStatus({ loading: false, success: false, error: 'Please enter phone number' });
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

      const { data, error } = await supabase
        .from('parent_orders')
        .insert([
          {
            parent_name: formData.parent_name,
            number_of_children: formData.number_of_children,
            child_age_range: formData.child_age_range,
            phone: formData.phone,
            email: formData.email,
            delivery_location: formData.delivery_location,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      setStatus({ loading: false, success: true, error: null });

      setTimeout(() => {
        setFormData({
          parent_name: '',
          number_of_children: '1',
          child_age_range: '3 - 5 Years',
          phone: '',
          email: '',
          delivery_location: '',
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
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Package Details */}
      <div className="lg:col-span-5 space-y-8">
        {/* Benefits */}
        <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-[#FDC82F] rounded-full"></span>
            Why Parents Love It
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <div className="bg-[#FDC82F]/10 p-1 rounded-full mt-1 text-[#FDC82F]">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-gray-600 text-base">
                <strong>Zero Screen Time:</strong> Safe, healthy play that builds brain power.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="bg-[#FDC82F]/10 p-1 rounded-full mt-1 text-[#FDC82F]">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-gray-600 text-base">
                <strong>Independent Play:</strong> Designed so kids can learn with minimal supervision.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="bg-[#FDC82F]/10 p-1 rounded-full mt-1 text-[#FDC82F]">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-gray-600 text-base">
                <strong>Future Ready:</strong> Teaches the logic used by software engineers at Google.
              </span>
            </li>
          </ul>
        </div>

        {/* Pricing Breakdown */}
        <div className="bg-[#0F172A] text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FDC82F] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Gift className="w-5 h-5 text-[#FDC82F]" />
            Home Starter Kit
          </h3>

          <div className="space-y-4 mb-8 border-b border-gray-700 pb-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">1x Interactive Robot and activities</span>
              <span className="font-mono text-[#FDC82F]">₵ 1,200</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">CodesRock Activity Book</span>
              <span className="font-mono text-[#FDC82F]">₵ 280</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Kinestheic Coding Activity set</span>
              <span className="font-mono text-[#FDC82F]">₵ 950</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Teacher/Parent Portal</span>
              <span className="font-mono text-[#FDC82F]">Free</span>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Total Price</p>
              <div className="text-3xl font-bold mt-1">₵ 2,430</div>
            </div>
            <span className="bg-[#FDC82F]/20 text-[#FDC82F] text-xs px-2 py-1 rounded border border-[#FDC82F]/30">one-time payment</span>
          </div>
        </div>
      </div>

      {/* Right Column: Comprehensive Form */}
      <div className="lg:col-span-7">
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FDC82F] to-[#FF7340]"></div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Your Home Kit</h2>
          <p className="text-gray-500 mb-8">We deliver nationwide in Ghana. Payment on delivery available.</p>

          {/* Success Message */}
          {status.success && (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-medium">
                Order submitted successfully! We'll contact you shortly to confirm delivery.
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
            {/* Contact Info */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Parent Name *</label>
              <input
                type="text"
                name="parent_name"
                value={formData.parent_name}
                onChange={handleChange}
                disabled={status.loading}
                required
                className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all disabled:opacity-50"
                placeholder="e.g. Kwame Osei"
              />
            </div>

            {/* Child Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Number of Children</label>
                <select
                  name="number_of_children"
                  value={formData.number_of_children}
                  onChange={handleChange}
                  disabled={status.loading}
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all disabled:opacity-50"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Child&apos;s Age Range</label>
                <select
                  name="child_age_range"
                  value={formData.child_age_range}
                  onChange={handleChange}
                  disabled={status.loading}
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all disabled:opacity-50"
                >
                  <option>3 - 5 Years</option>
                  <option>5 - 7 Years</option>
                  <option>Mixed Ages</option>
                </select>
              </div>
            </div>

            {/* Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status.loading}
                  required
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all disabled:opacity-50"
                  placeholder="054 419 8026"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.loading}
                  required
                  className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all disabled:opacity-50"
                  placeholder="kwame@gmail.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Delivery Location (Region/City)</label>
              <input
                type="text"
                name="delivery_location"
                value={formData.delivery_location}
                onChange={handleChange}
                disabled={status.loading}
                className="input-field w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#FF7340] focus:bg-white outline-none transition-all disabled:opacity-50"
                placeholder="e.g. Kumasi, Ahodwo"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading || status.success}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-[#FF7340] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                  Request Home Kit
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParentContent;
