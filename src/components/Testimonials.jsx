import { Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The children are always excited when it's time for CodesRock. It has transformed how they approach challenges—they don't give up, they 'debug'!",
      name: 'Mrs. Adjei',
      role: 'Preschool Head Teacher, Accra',
      quoteColor: '#CE3845',
    },
    {
      quote:
        "Finally, something educational that doesn't involve handing my son a phone. He's creating algorithms with his toys now. It's amazing.",
      name: 'Kwame O.',
      role: 'Parent',
      quoteColor: '#46C5D5',
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-20">
          Smiles from Teachers & Parents
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 relative"
            >
              <div
                className="absolute -top-6 right-10"
                style={{ color: `${testimonial.quoteColor}`, opacity: 0.2 }}
              >
                <Quote className="w-16 h-16" />
              </div>
              <p className="text-gray-600 mb-8 italic text-lg">{testimonial.quote}</p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
