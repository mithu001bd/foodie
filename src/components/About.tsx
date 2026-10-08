import { Sparkles, Leaf, ShieldCheck, Bike } from 'lucide-react';

const highlights = [
  {
    icon: Leaf,
    title: '100% Fresh Ingredients',
    description: 'Locally sourced, farm-to-table produce delivered daily.',
  },
  {
    icon: ShieldCheck,
    title: '5-Star Hygiene',
    description: 'Certified kitchen maintaining the highest food safety standards.',
  },
  {
    icon: Sparkles,
    title: '100% Halal',
    description: 'All meats are certified halal and prepared with care.',
  },
  {
    icon: Bike,
    title: 'Fast Delivery',
    description: 'Hot, fresh meals delivered to your door within 30 minutes.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-charcoal-950 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Chef image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4253309/pexels-photo-4253309.jpeg?auto=compress&cs=tinysrgb&h=900"
                alt="Head Chef"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 glass rounded-2xl border border-gold-500/30 px-6 py-5 shadow-2xl">
              <p className="font-serif text-4xl font-bold text-gold-400">10+</p>
              <p className="text-sm text-charcoal-200">Years of Excellence</p>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold-500/30 rounded-tr-2xl" />
          </div>

          {/* Content */}
          <div>
            <p className="font-serif text-gold-400 text-sm tracking-[0.3em] uppercase mb-3">
              About Us
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A Story of Flavor,<br />Passion & Tradition
            </h2>
            <p className="text-charcoal-300 leading-relaxed mb-5">
              Founded in 2015, Saffron & Smoke began as a humble family kitchen with a bold
              vision — to bring authentic, world-class cuisine to our community without
              compromising on quality or tradition.
            </p>
            <p className="text-charcoal-300 leading-relaxed mb-8">
              Under the guidance of our award-winning head chef, every plate is a celebration
              of culinary artistry. From hand-selected spices to meticulously sourced
              ingredients, we ensure that each dish reflects our commitment to excellence.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-3 rounded-xl border border-charcoal-800 bg-charcoal-900/40 p-4 transition-all hover:border-gold-500/30"
                >
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 transition-colors group-hover:bg-gold-500/20">
                    <item.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-charcoal-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
