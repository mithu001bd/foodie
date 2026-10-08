import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-b from-charcoal-900 to-charcoal-950 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-serif text-gold-400 text-sm tracking-[0.3em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Guests Say
          </h2>
          <div className="inline-flex items-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-sm text-charcoal-300">5.0 · Based on 1,200+ Google Reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <div className="rounded-2xl border border-charcoal-700 bg-charcoal-900/40 p-8 sm:p-10 text-center">
                    <Quote className="mx-auto h-10 w-10 text-gold-500/40 mb-6" />
                    <div className="flex justify-center gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gold-400 fill-gold-400" />
                      ))}
                    </div>
                    <p className="font-serif text-xl sm:text-2xl text-white leading-relaxed mb-8 italic">
                      "{t.review}"
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover border-2 border-gold-500/30"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-charcoal-400">{t.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-2 sm:-left-5 -translate-y-1/2 rounded-full bg-charcoal-800 border border-charcoal-700 p-2.5 text-charcoal-200 hover:bg-gold-500 hover:text-charcoal-950 hover:border-gold-500 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-2 sm:-right-5 -translate-y-1/2 rounded-full bg-charcoal-800 border border-charcoal-700 p-2.5 text-charcoal-200 hover:bg-gold-500 hover:text-charcoal-950 hover:border-gold-500 transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? 'w-8 bg-gold-400' : 'w-2 bg-charcoal-700 hover:bg-charcoal-600'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review cards grid (below carousel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-charcoal-800 bg-charcoal-900/30 p-6 transition-all hover:border-gold-500/30"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-sm text-charcoal-300 leading-relaxed mb-4 line-clamp-3">{t.review}</p>
              <div className="flex items-center gap-2">
                <img src={t.avatar} alt={t.name} className="h-8 w-8 rounded-full object-cover" />
                <span className="text-sm font-medium text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
