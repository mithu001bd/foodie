import { useState, useEffect } from 'react';
import { Copy, Check, Clock, Flame } from 'lucide-react';
import { offers } from '@/data';

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % 1000) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function CountdownTimer() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(23, 59, 59, 999);

  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const units = [
    { label: 'Days', value: days },
    { label: 'Hrs', value: hours },
    { label: 'Min', value: minutes },
    { label: 'Sec', value: seconds },
  ];

  return (
    <div className="flex items-center gap-2">
      <Clock className="h-4 w-4 text-gold-400" />
      <div className="flex gap-1.5">
        {units.map((u, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="text-center">
              <span className="font-mono text-lg font-bold text-white tabular-nums">
                {String(u.value).padStart(2, '0')}
              </span>
              <span className="block text-[10px] text-charcoal-400 uppercase">{u.label}</span>
            </div>
            {i < units.length - 1 && <span className="text-gold-500/50">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Offers() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyCode = (code: string, id: number) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="offers" className="py-20 lg:py-28 bg-charcoal-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-serif text-gold-400 text-sm tracking-[0.3em] uppercase mb-3">
            Special Offers
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Deals You Can't Resist
          </h2>
          <p className="text-charcoal-300 max-w-xl mx-auto">
            Grab our exclusive promotions before they're gone. Limited time only.
          </p>
          <div className="mt-6 inline-block">
            <CountdownTimer />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative rounded-2xl overflow-hidden border border-charcoal-800 bg-charcoal-900/50 transition-all duration-500 hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/10"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.dishName}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-4 py-1.5 text-sm font-bold text-charcoal-950 shadow-lg">
                    <Flame className="h-3.5 w-3.5" />
                    {offer.discount} OFF
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-2">{offer.title}</h3>
                <p className="text-sm text-charcoal-300 mb-4 leading-relaxed">{offer.description}</p>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-charcoal-800">
                  <div>
                    <p className="text-xs text-charcoal-400">{offer.dishName}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-bold text-gold-400">${offer.newPrice.toFixed(2)}</span>
                      {offer.oldPrice > 0 && (
                        <span className="text-sm text-charcoal-500 line-through">${offer.oldPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Voucher code */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-lg border border-dashed border-gold-500/40 bg-gold-500/5 px-4 py-2.5 text-center">
                    <span className="font-mono font-bold text-gold-300 tracking-widest">{offer.code}</span>
                  </div>
                  <button
                    onClick={() => copyCode(offer.code, offer.id)}
                    className="rounded-lg bg-gold-500/15 border border-gold-500/30 p-2.5 text-gold-300 transition-all hover:bg-gold-500 hover:text-charcoal-950"
                    aria-label="Copy code"
                  >
                    {copiedId === offer.id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
