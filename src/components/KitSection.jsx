import {
  Wrench,
  Cpu,
  Radio,
  PenTool,
  BookOpen,
  ShieldCheck,
  Bot,
  Layers,
  Music,
  GraduationCap,
  Shapes,
} from 'lucide-react';

const KitSection = () => {
  const featuredKits = [
    {
      badge: 'Ages 3–6+ | Early Childhood & KG',
      title: 'CodesRock Screen-Free Mechanics Kit',
      subtitle: 'Assembly Mechanics & Tactile NFC Coding Board',
      description:
        'Child-safe patented nuts, bolts, gears, and structural plates paired with a physical desktop NFC coding board. Children press 3D block buttons to program robot movements 100% screen-free.',
      highlights: [
        'Patented bolt & nut mechanical assembly',
        'Physical NFC desktop coding board with 3D blocks',
        'Infrared obstacle sensors, LEDs & melody sound module',
        '4-level progressive storybook curriculum',
      ],
      color: '#FF7340',
      icon: Wrench,
    },
    {
      badge: 'Ages 6–8+ | Primary Grades',
      title: 'CodesRock Screen-Free Robotics Kit',
      subtitle: 'Rivet Engineering & Smart Optical Coding Pen',
      description:
        'Advanced robotic building with snap rivets and multi-sensor modules (color, sound, mic recorder, dial, RGB display). Children use a smart OID optical coding pen to tap physical coding cards to program code—click to build, poke to code!',
      highlights: [
        'Sturdy rivet snap-assembly with safety pliers',
        'OID Optical Smart Coding Pen & 100+ physical coding cards',
        'Advanced sensors: Color, Sound, Mic Recorder & RGB Display',
        '80-lesson comic storybook robotics curriculum',
      ],
      color: '#46C5D5',
      icon: Cpu,
    },
  ];

  const ecosystemTools = [
    {
      icon: Bot,
      title: 'Tactile Coding Robot',
      description: 'Friendly, tangible coding bot that moves based on physical command cards and sensors.',
      color: '#CE3845',
    },
    {
      icon: Radio,
      title: 'Tactile NFC Coding Board',
      description: 'Physical block programming board. Place 3D command blocks and press START—zero screens required.',
      color: '#FF7340',
    },
    {
      icon: PenTool,
      title: 'Smart Coding Pen & Cards',
      description: 'Tap physical coding cards with an optical OID pen to build algorithms in sequence.',
      color: '#46C5D5',
    },
    {
      icon: BookOpen,
      title: 'Activity Books & Workbooks',
      description: 'Culturally relevant storybooks and comic workbooks from Ghana introducing algorithmic thinking.',
      color: '#FDC82F',
    },
    {
      icon: Layers,
      title: 'Logic Flashcards',
      description: 'Colorful command cards for sequencing, loops, variables, and physical debugging games.',
      color: '#46C5D5',
    },
    {
      icon: Music,
      title: 'Songs & Audio',
      description: 'Catchy, original songs that make learning logic syntax an interactive dance party.',
      color: '#5D3B98',
    },
    {
      icon: GraduationCap,
      title: 'Open-Source Teacher Portal',
      description: 'Free access to lesson plans, video tutorials, worksheets, and classroom management tools.',
      color: '#2563EB',
    },
    {
      icon: Shapes,
      title: 'Unplugged Physical Games',
      description: 'Collaborative physical games that teach sorting, looping, and algorithms without screens.',
      color: '#FF7340',
    },
    {
      icon: ShieldCheck,
      title: '100% Screen-Free Guarantee',
      description: 'Zero blue light, zero computer labs. Students learn computational thinking purely hands-on.',
      color: '#5D3B98',
    },
  ];

  return (
    <section className="z-10 bg-white pt-24 pb-24 relative" id="kit" aria-labelledby="kit-heading">
      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 id="kit-heading" className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            What's Inside the <span className="text-[#FF7340]">CodesRock Ecosystem?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything preschools, KG, primary classrooms, and parents need to spark computational joy—completely screen-free.
          </p>
        </div>

        {/* Featured Product Kits Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredKits.map((kit, index) => {
            const Icon = kit.icon;
            return (
              <div
                key={index}
                className="bg-[#FAFAFA] border-2 border-gray-100 rounded-[2.5rem] p-8 md:p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-gray-700">
                      {kit.badge}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${kit.color}15`, color: kit.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                    {kit.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF7340] mb-4">{kit.subtitle}</p>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">{kit.description}</p>
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-200/60">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Kit Features:</p>
                  <ul className="space-y-2">
                    {kit.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm font-medium text-gray-800">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: kit.color }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete Ecosystem Tools Grid */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Complete Screen-Free Learning Tools
          </h3>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Combining tangible robots, storybooks, physical coding cards, and digital-free tools for complete STEM mastery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemTools.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default KitSection;
