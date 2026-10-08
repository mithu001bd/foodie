import { useState } from 'react';
import { CalendarDays, Clock, Users, Phone, User, MessageSquare, Check } from 'lucide-react';

interface FormErrors {
  name?: string;
  phone?: string;
  guests?: string;
  date?: string;
  time?: string;
}

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    requests: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (form.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!form.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selected = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) newErrors.date = 'Date cannot be in the past';
    }
    if (!form.time) newErrors.time = 'Please select a time';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', phone: '', guests: '2', date: '', time: '', requests: '' });
      }, 4000);
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const inputClass = (error?: string) =>
    `w-full rounded-lg bg-charcoal-800 border px-4 py-3 pl-11 text-sm text-white placeholder-charcoal-500 focus:outline-none transition-colors ${
      error
        ? 'border-red-500/50 focus:border-red-500'
        : 'border-charcoal-700 focus:border-gold-500/50'
    }`;

  if (submitted) {
    return (
      <section id="reservation" className="py-20 lg:py-28 bg-charcoal-900">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gold-500/30 bg-charcoal-900 p-12 text-center animate-slide-up">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
              <Check className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-white mb-3">Reservation Confirmed!</h3>
            <p className="text-charcoal-300">
              Thank you, {form.name}. We've received your booking for {form.guests} guests
              on {form.date} at {form.time}. A confirmation will be sent to your phone shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-20 lg:py-28 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-serif text-gold-400 text-sm tracking-[0.3em] uppercase mb-3">
            Reservations
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Book Your Table
          </h2>
          <p className="text-charcoal-300 max-w-xl mx-auto">
            Secure your spot for an unforgettable dining experience. We can't wait to serve you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-charcoal-700 bg-charcoal-950/50 p-6 sm:p-8 space-y-5"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-xs text-charcoal-400 mb-2 uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-500" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={inputClass(errors.name)}
                  placeholder="Your full name"
                />
              </div>
              {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs text-charcoal-400 mb-2 uppercase tracking-wider">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-500" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={inputClass(errors.phone)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs text-charcoal-400 mb-2 uppercase tracking-wider">Number of Guests</label>
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-500" />
                <select
                  value={form.guests}
                  onChange={(e) => handleChange('guests', e.target.value)}
                  className={inputClass()}
                >
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((n) => (
                    <option key={n} value={n} className="bg-charcoal-900">
                      {n} {n === '1' ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs text-charcoal-400 mb-2 uppercase tracking-wider">Date</label>
              <div className="relative">
                <CalendarDays className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-500" />
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={inputClass(errors.date)}
                />
              </div>
              {errors.date && <p className="mt-1.5 text-xs text-red-400">{errors.date}</p>}
            </div>

            {/* Time */}
            <div className="sm:col-span-2">
              <label className="block text-xs text-charcoal-400 mb-2 uppercase tracking-wider">Preferred Time</label>
              <div className="relative">
                <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-500" />
                <select
                  value={form.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                  className={inputClass(errors.time)}
                >
                  <option value="" className="bg-charcoal-900">Select a time slot</option>
                  <optgroup label="Lunch" className="bg-charcoal-900">
                    <option value="12:00 PM" className="bg-charcoal-900">12:00 PM</option>
                    <option value="12:30 PM" className="bg-charcoal-900">12:30 PM</option>
                    <option value="1:00 PM" className="bg-charcoal-900">1:00 PM</option>
                    <option value="1:30 PM" className="bg-charcoal-900">1:30 PM</option>
                    <option value="2:00 PM" className="bg-charcoal-900">2:00 PM</option>
                  </optgroup>
                  <optgroup label="Dinner" className="bg-charcoal-900">
                    <option value="6:00 PM" className="bg-charcoal-900">6:00 PM</option>
                    <option value="6:30 PM" className="bg-charcoal-900">6:30 PM</option>
                    <option value="7:00 PM" className="bg-charcoal-900">7:00 PM</option>
                    <option value="7:30 PM" className="bg-charcoal-900">7:30 PM</option>
                    <option value="8:00 PM" className="bg-charcoal-900">8:00 PM</option>
                    <option value="8:30 PM" className="bg-charcoal-900">8:30 PM</option>
                    <option value="9:00 PM" className="bg-charcoal-900">9:00 PM</option>
                  </optgroup>
                </select>
              </div>
              {errors.time && <p className="mt-1.5 text-xs text-red-400">{errors.time}</p>}
            </div>

            {/* Special requests */}
            <div className="sm:col-span-2">
              <label className="block text-xs text-charcoal-400 mb-2 uppercase tracking-wider">Special Requests</label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-charcoal-500" />
                <textarea
                  value={form.requests}
                  onChange={(e) => handleChange('requests', e.target.value)}
                  rows={3}
                  className={inputClass()}
                  placeholder="Any dietary restrictions, allergies, or special occasions?"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 py-4 text-base font-bold text-charcoal-950 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30"
          >
            <CalendarDays className="h-5 w-5" />
            Reserve Table
          </button>
        </form>
      </div>
    </section>
  );
}
