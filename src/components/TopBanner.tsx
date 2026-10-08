import { useState, useEffect } from 'react';
import { X, ExternalLink, UtensilsCrossed } from 'lucide-react';

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('topBannerDismissed');
    if (dismissed) setVisible(false);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('topBannerDismissed', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 border-b border-gold-500/20">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-3 py-2.5">
          <div className="flex items-center gap-2 min-w-0">
            <UtensilsCrossed className="h-4 w-4 flex-shrink-0 text-gold-400" />
            <p className="text-xs sm:text-sm text-charcoal-100 whitespace-nowrap">
              <span className="text-charcoal-300 hidden xs:inline">Website designed & developed by</span>
              <span className="text-charcoal-300 xs:hidden">Dev:</span>{' '}
              <span className="font-medium text-gold-300">Mithun Rahman</span>
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href="https://mithu001bd.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 px-3 sm:px-4 py-1.5 text-xs font-medium text-gold-300 transition-all hover:bg-gold-500 hover:text-charcoal-950 hover:border-gold-500 whitespace-nowrap"
            >
              Portfolio
              <ExternalLink className="h-3 w-3" />
            </a>
            <button
              onClick={handleDismiss}
              className="text-charcoal-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
