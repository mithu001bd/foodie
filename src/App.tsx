import { useState } from 'react';
import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Offers from '@/components/Offers';
import Menu from '@/components/Menu';
import OrderModal from '@/components/OrderModal';
import Reservation from '@/components/Reservation';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import type { MenuItem } from '@/data';

export default function App() {
  const [orderItem, setOrderItem] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen bg-charcoal-950 text-charcoal-100 antialiased">
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <Offers />
        <Menu onOrder={setOrderItem} />
        <Reservation />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <OrderModal item={orderItem} onClose={() => setOrderItem(null)} />
    </div>
  );
}
