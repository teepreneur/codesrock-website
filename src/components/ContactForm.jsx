import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'school',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
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
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Ellen Darko"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FF7340]/30 focus:bg-white focus:ring-0 outline-none transition-all text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="054 419 8026"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FF7340]/30 focus:bg-white focus:ring-0 outline-none transition-all text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="hello@school.edu"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#FF7340]/30 focus:bg-white focus:ring-0 outline-none transition-all text-base"
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
                      className="peer sr-only"
                    />
                    <div className="text-center py-4 rounded-2xl border-2 border-gray-100 text-gray-500 font-medium peer-checked:border-[#46C5D5] peer-checked:text-[#46C5D5] peer-checked:bg-[#46C5D5]/5 transition-all text-base">
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
                      className="peer sr-only"
                    />
                    <div className="text-center py-4 rounded-2xl border-2 border-gray-100 text-gray-500 font-medium peer-checked:border-[#FDC82F] peer-checked:text-[#FDC82F] peer-checked:bg-[#FDC82F]/5 transition-all text-base">
                      Parent
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-black transition-all transform hover:-translate-y-1 mt-6"
              >
                Schedule My Free Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
