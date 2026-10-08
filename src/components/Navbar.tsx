import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Offers', href: '#offers' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reserve', href: '#reservation' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      setBannerVisible(!sessionStorage.getItem('topBannerDismissed'));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topOffset = bannerVisible && !scrolled ? 'top-11' : 'top-0';

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      } ${topOffset}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-gold tracking-wide whitespace-nowrap">
              Saffron<span className="text-gold-400">&</span>Smoke
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-charcoal-100 hover:text-gold-300 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-charcoal-950 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30"
            >
              <Phone className="h-4 w-4" />
              Reserve
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-charcoal-100 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-charcoal-950/98 backdrop-blur-md border-t border-charcoal-800 px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-base font-medium text-charcoal-100 hover:text-gold-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-charcoal-950"
          >
            <Phone className="h-4 w-4" />
            Reserve a Table
          </a>
        </div>
      </div>
    </nav>
  );
}
