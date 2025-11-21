import { ArrowRight } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      value: '+200%',
      description: 'Improvement in problem-solving skills (TechCheck)',
      color: '#FDC82F',
    },
    {
      value: '317+',
      description: 'Children impacted across 9 partner schools',
      color: '#46C5D5',
    },
    {
      value: '68%',
      description: 'Low-income reach, ensuring no child is left behind',
      color: '#FF7340',
    },
  ];

  return (
    <section id="impact" className="py-24 bg-[#5D3B98] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27514c0c-c799-47b5-8485-a6021230951d_800w.png)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-[#FDC82F] font-bold uppercase tracking-wider text-sm mb-3 block">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-6xl font-semibold text-white">
              Real Results from Ghana
            </h2>
          </div>
          <a
            href="#"
            className="text-white/80 hover:text-white text-base font-medium flex items-center gap-2 mt-6 md:mt-0 group"
          >
            View detailed Impact Report{' '}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-[2rem] p-10 border border-white/10"
            >
              <div
                className="text-6xl font-bold mb-3"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-white/90 font-medium text-lg">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
