import { ArrowRight, CalendarDays, Tag } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Restaurant ambiance"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/70 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="text-center animate-fade-up flex flex-col items-center">
          <p className="font-serif text-gold-400 text-sm sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">
            Est. 2015 · Fine Dining
          </p>
          <h1 className="font-serif text-3xl xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-5 sm:mb-6 max-w-4xl mx-auto">
            Experience Authentic
            <span className="block text-gradient-gold">Culinary Excellence</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-charcoal-200 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Where every dish tells a story of passion, tradition, and the finest ingredients
            sourced from around the world.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-charcoal-950 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-105 w-full sm:w-auto justify-center"
            >
              Explore Menu
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#reservation"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-300 w-full sm:w-auto justify-center"
            >
              <CalendarDays className="h-5 w-5" />
              Book a Table
            </a>
          </div>

          {/* Promo badge — inline on mobile, floating on desktop */}
          <div className="mt-8 sm:mt-10 lg:absolute lg:right-4 xl:right-12 lg:bottom-24 animate-float">
            <div className="relative">
              <div className="glass rounded-2xl border border-gold-500/30 px-5 sm:px-7 py-4 sm:py-5 shadow-2xl inline-block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gold-500/20 flex-shrink-0">
                    <Tag className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-charcoal-300 font-medium">Limited Time</p>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      Flat 20% OFF
                    </p>
                    <p className="text-xs text-gold-300">
                      on all signature platters this week!
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-gold-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-charcoal-400 tracking-widest uppercase">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
