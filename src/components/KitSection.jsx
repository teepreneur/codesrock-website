import { Bot, BookOpen, Layers, Music, GraduationCap, Shapes } from 'lucide-react';

const KitSection = () => {
  const kitItems = [
    {
      icon: Bot,
      title: 'The Robot',
      description: 'Friendly, tangible coding bot that moves based on physical command cards.',
      color: '#CE3845',
    },
    {
      icon: BookOpen,
      title: 'Activity Books',
      description:
        'Culturally relevant activities from Ghana that introduce algorithmic thinking concepts.',
      color: '#FDC82F',
    },
    {
      icon: Layers,
      title: 'Flashcards',
      description: 'Colorful command cards for sequencing, loops, and debugging games.',
      color: '#46C5D5',
    },
    {
      icon: Music,
      title: 'Songs & Audio',
      description: 'Catchy, original songs that make learning syntax a dance party.',
      color: '#5D3B98',
    },
    {
      icon: GraduationCap,
      title: 'Teacher Portal',
      description:
        'Online access to lesson plans, video tutorials, and classroom management tools.',
      color: '#2563EB',
    },
    {
      icon: Shapes,
      title: 'Unplugged Games',
      description:
        'Collaborative physical games that teach sorting, looping, and logic without screens.',
      color: '#FF7340',
    },
  ];

  return (
    <section className="z-10 bg-white pt-24 pb-24 relative" id="kit">
      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
            What's Inside the CodesRock Kit?
          </h2>
          <p className="text-xl text-gray-500">
            Everything a teacher or parent needs to spark joy and logic.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl transition-all hover:-translate-y-2"
                style={{ '--hover-color': `${item.color}/10` }}
              >
                <div
                  className="w-16 h-16 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: `${item.color}10`,
                    color: item.color,
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KitSection;
