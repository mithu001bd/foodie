import { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import type { MenuItem } from '@/data';

interface OrderModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function OrderModal({ item, onClose }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!item) return null;

  const totalPrice = (item.price * quantity).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuantity(1);
      setName('');
      setPhone('');
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md rounded-2xl bg-charcoal-900 border border-charcoal-700 shadow-2xl overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-charcoal-950/60 p-2 text-charcoal-300 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
              <Check className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Order Placed!</h3>
            <p className="text-charcoal-300 text-sm">
              We'll call you shortly to confirm your order for {quantity}× {item.name}.
            </p>
          </div>
        ) : (
          <>
            {/* Item image */}
            <div className="relative h-40 overflow-hidden">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent" />
              <div className="absolute bottom-3 left-5">
                <h3 className="font-serif text-2xl font-bold text-white">{item.name}</h3>
                <p className="text-gold-300 text-sm">{item.category}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <p className="text-sm text-charcoal-300">{item.description}</p>

              {/* Quantity */}
              <div>
                <label className="block text-xs text-charcoal-400 mb-2 uppercase tracking-wider">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-lg border border-charcoal-700 p-2 text-charcoal-200 hover:border-gold-500/50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-mono text-lg font-bold text-white w-8 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-lg border border-charcoal-700 p-2 text-charcoal-200 hover:border-gold-500/50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <div className="ml-auto text-right">
                    <span className="text-xs text-charcoal-400 block">Total</span>
                    <span className="font-serif text-2xl font-bold text-gold-400">${totalPrice}</span>
                  </div>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs text-charcoal-400 mb-2 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg bg-charcoal-800 border border-charcoal-700 px-4 py-3 text-sm text-white placeholder-charcoal-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs text-charcoal-400 mb-2 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full rounded-lg bg-charcoal-800 border border-charcoal-700 px-4 py-3 text-sm text-white placeholder-charcoal-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 py-3.5 text-sm font-bold text-charcoal-950 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30"
              >
                <ShoppingBag className="h-5 w-5" />
                Confirm Order · ${totalPrice}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
