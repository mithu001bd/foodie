import { useState } from 'react';
import { Flame, ShoppingBag } from 'lucide-react';
import { menuItems, type MenuCategory, type MenuItem } from '@/data';

const categories: (MenuCategory | 'All')[] = [
  'All',
  'Appetizers',
  'Main Course',
  'Signature Platters',
  'Desserts & Drinks',
];

interface MenuProps {
  onOrder: (item: MenuItem) => void;
}

export default function Menu({ onOrder }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<(MenuCategory | 'All')>('All');

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-gradient-to-b from-charcoal-950 to-charcoal-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-serif text-gold-400 text-sm tracking-[0.3em] uppercase mb-3">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Crafted With Passion
          </h2>
          <p className="text-charcoal-300 max-w-xl mx-auto">
            Every dish is prepared using the freshest ingredients and authentic recipes.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-charcoal-950 shadow-lg shadow-gold-500/20'
                  : 'border border-charcoal-700 text-charcoal-300 hover:border-gold-500/50 hover:text-gold-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden border border-charcoal-800 bg-charcoal-900/40 transition-all duration-500 hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
                {item.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-charcoal-950 shadow-lg">
                    {item.badge}
                  </span>
                )}
                {/* Spice level */}
                {item.spiceLevel > 0 && (
                  <div className="absolute top-3 right-3 flex items-center gap-0.5 rounded-full bg-charcoal-950/80 px-2 py-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Flame
                        key={i}
                        className={`h-3 w-3 ${
                          i < item.spiceLevel ? 'text-red-500 fill-red-500' : 'text-charcoal-700'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-bold text-white leading-tight">{item.name}</h3>
                  <span className="text-lg font-bold text-gold-400 whitespace-nowrap">${item.price}</span>
                </div>
                <p className="text-sm text-charcoal-400 leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => onOrder(item)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500/10 border border-gold-500/30 py-2.5 text-sm font-medium text-gold-300 transition-all hover:bg-gold-500 hover:text-charcoal-950"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
