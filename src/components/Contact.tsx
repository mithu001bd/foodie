import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter, UtensilsCrossed } from 'lucide-react';

const openingHours = [
  { label: 'Monday', slots: '12:00 PM – 3:00 PM · 6:00 PM – 10:30 PM' },
  { label: 'Tuesday', slots: '12:00 PM – 3:00 PM · 6:00 PM – 10:30 PM' },
  { label: 'Wednesday', slots: '12:00 PM – 3:00 PM · 6:00 PM – 10:30 PM' },
  { label: 'Thursday', slots: '12:00 PM – 3:00 PM · 6:00 PM – 10:30 PM' },
  { label: 'Friday', slots: '12:00 PM – 3:00 PM · 6:00 PM – 11:30 PM' },
  { label: 'Saturday', slots: '11:00 AM – 11:30 PM (All Day)' },
  { label: 'Sunday', slots: '11:00 AM – 10:00 PM (All Day)' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Contact() {
  return (
    <>
      {/* Contact & Opening Hours */}
      <section id="contact" className="py-20 lg:py-28 bg-charcoal-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-serif text-gold-400 text-sm tracking-[0.3em] uppercase mb-3">
              Visit Us
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact & Opening Hours
            </h2>
            <p className="text-charcoal-300 max-w-xl mx-auto">
              We'd love to welcome you. Find us, call us, or drop a message.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact info */}
            <div className="space-y-4">
              <div className="rounded-xl border border-charcoal-800 bg-charcoal-900/40 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-gold-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Our Location</h3>
                    <p className="text-sm text-charcoal-400">
                      125 Gourmet Avenue<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <Phone className="h-5 w-5 text-gold-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-sm text-charcoal-400 hover:text-gold-300 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gold-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:hello@saffronsmoke.com" className="text-sm text-charcoal-400 hover:text-gold-300 transition-colors">
                      hello@saffronsmoke.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="rounded-xl border border-charcoal-800 bg-charcoal-900/40 p-6">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-700 text-charcoal-300 transition-all hover:bg-gold-500 hover:text-charcoal-950 hover:border-gold-500"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div className="rounded-xl border border-charcoal-800 bg-charcoal-900/40 p-6">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="h-5 w-5 text-gold-400" />
                <h3 className="font-semibold text-white">Opening Hours</h3>
              </div>
              <div className="space-y-3">
                {openingHours.map((day) => (
                  <div
                    key={day.label}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-3 border-b border-charcoal-800 last:border-0"
                  >
                    <span className="text-sm font-medium text-white">{day.label}</span>
                    <span className="text-xs text-charcoal-400">{day.slots}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl border border-charcoal-800 bg-charcoal-900/40 overflow-hidden">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-5 w-5 text-gold-400" />
                  <h3 className="font-semibold text-white">Find Us on Map</h3>
                </div>
              </div>
              <div className="relative h-72 sm:h-80 bg-charcoal-800">
                <iframe
                  title="Restaurant Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.71%2C-73.99%2C40.73&layer=mapnik&marker=40.72%2C-74.00"
                  className="w-full h-full border-0 grayscale-[0.3] contrast-1.2"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-950 border-t border-charcoal-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <a href="#hero" className="flex items-center gap-2 mb-4">
                <UtensilsCrossed className="h-6 w-6 text-gold-400" />
                <span className="font-serif text-2xl font-bold text-gradient-gold">
                  Saffron & Smoke
                </span>
              </a>
              <p className="text-sm text-charcoal-400 leading-relaxed max-w-xs">
                Experience authentic culinary excellence. Where tradition meets innovation on
                every plate.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Home', href: '#hero' },
                  { label: 'Offers', href: '#offers' },
                  { label: 'Menu', href: '#menu' },
                  { label: 'Reserve', href: '#reservation' },
                  { label: 'About', href: '#about' },
                  { label: 'Reviews', href: '#testimonials' },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm text-charcoal-400 hover:text-gold-300 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Get in Touch</h4>
              <p className="text-sm text-charcoal-400 mb-2">125 Gourmet Avenue, New York, NY 10001</p>
              <p className="text-sm text-charcoal-400 mb-2">
                <a href="tel:+15551234567" className="hover:text-gold-300 transition-colors">+1 (555) 123-4567</a>
              </p>
              <p className="text-sm text-charcoal-400">
                <a href="mailto:hello@saffronsmoke.com" className="hover:text-gold-300 transition-colors">hello@saffronsmoke.com</a>
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-charcoal-500">
              © {new Date().getFullYear()} Saffron & Smoke. All rights reserved.
            </p>
            <p className="text-xs text-charcoal-500 text-center sm:text-right">
              Website designed & developed by{' '}
              <a
                href="https://mithu001bd.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 font-medium transition-colors"
              >
                Mithun Rahman
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
