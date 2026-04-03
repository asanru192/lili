import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Lilly's Nails",
  description: "Get in touch with Lilly's Nails in Edgware for bespoke nail art appointments and inquiries.",
};

export default function ContactPage() {
  const openingHours = [
    { days: "Thursday", time: "10:00 - 19:00" },
    { days: "Friday", time: "10:00 - 19:00" },
    { days: "Saturday", time: "09:00 - 18:00" },
    { days: "Monday - Wednesday", time: "By Appointment" },
    { days: "Sunday", time: "Closed" },
  ];

  return (
    <div className="bg-surface text-on-surface">
      <NavBar />
      
      <main className="pt-32 pb-24 font-body">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-24 uppercase tracking-tighter">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-tight mb-8 tracking-tighter">
                Get in <span className="italic text-primary lowercase tracking-tighter">Touch</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md font-light leading-relaxed normal-case tracking-normal">
                Experience the art of curated nail design. Reach out for bespoke appointments and inquiries about our premier services.
              </p>
            </div>
            <div className="md:col-span-5 hidden md:block">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container-low shadow-2xl shadow-primary/5">
                <img 
                  alt="Luxury Salon Aesthetics" 
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] hover:scale-105 transition-transform duration-1000" 
                  src="/contact_hero.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Inquiry Form Side */}
          <div className="space-y-16">
            <div>
              <h2 className="font-headline text-3xl mb-12">Inquiry Form</h2>
              <form className="space-y-10 group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 group">
                    <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70">Full Name</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-stone-200 focus:border-primary focus:ring-0 py-3 transition-all placeholder:text-stone-300 font-headline text-lg" 
                      placeholder="Enter your name" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70">Email Address</label>
                    <input 
                      className="w-full bg-transparent border-0 border-b border-stone-200 focus:border-primary focus:ring-0 py-3 transition-all placeholder:text-stone-300 font-headline text-lg" 
                      placeholder="hello@example.com" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70">Subject</label>
                  <input 
                    className="w-full bg-transparent border-0 border-b border-stone-200 focus:border-primary focus:ring-0 py-3 transition-all placeholder:text-stone-300 font-headline text-lg" 
                    placeholder="Service Inquiry" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70">Message</label>
                  <textarea 
                    className="w-full bg-transparent border-0 border-b border-stone-200 focus:border-primary focus:ring-0 py-3 transition-all placeholder:text-stone-300 font-headline text-lg resize-none" 
                    placeholder="How can we help you?" 
                    rows={4}
                  ></textarea>
                </div>
                <button className="flex items-center space-x-6 text-on-surface hover:text-primary transition-all duration-300 group/btn">
                  <span className="font-label text-xs uppercase tracking-[0.3em] font-bold">Send Message</span>
                  <span className="w-12 h-[1px] bg-stone-300 group-hover/btn:bg-primary group-hover/btn:w-20 transition-all duration-500"></span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>
            </div>

            {/* Operating Hours */}
            <div className="bg-stone-100 p-10 rounded-2xl border border-stone-200/50">
              <h3 className="font-headline text-2xl mb-8">Opening Hours</h3>
              <div className="space-y-4">
                {openingHours.map((row, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-stone-200/50 last:border-0 text-sm">
                    <span className="font-bold text-stone-700">{row.days}</span>
                    <span className="italic text-on-surface-variant">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details & Map Side */}
          <div className="space-y-12">
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full shadow-lg shadow-primary/5 border border-stone-100">
                  <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 mb-2 font-bold">The Boutique Atelier</p>
                  <p className="font-headline text-2xl text-on-surface leading-tight">
                    85 Burnt Oak Broadway,<br />
                    Burnt Oak, Edgware<br />
                    HA8 5EP, United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full shadow-lg shadow-primary/5 border border-stone-100">
                  <span className="material-symbols-outlined text-primary text-2xl">call</span>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 mb-2 font-bold">Direct Line</p>
                  <p className="font-headline text-2xl text-on-surface">020 8952 2187</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Stylized Image */}
            <div className="relative group overflow-hidden rounded-2xl aspect-square lg:aspect-auto lg:h-[500px] shadow-2xl shadow-primary/5 transition-transform duration-700 hover:-translate-y-1">
              <img 
                className="w-full h-full object-cover filter grayscale opacity-70 group-hover:scale-105 transition-transform duration-1000" 
                src="/contact_map_placeholder.png"
                alt="Stylized map of Edgware"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 p-8 bg-white/95 backdrop-blur-md rounded-xl flex justify-between items-center shadow-xl border border-white/20">
                <div className="space-y-1">
                  <h4 className="font-headline text-2xl text-rose-900 italic">Lilly&apos;s Nails</h4>
                  <p className="text-xs text-on-surface-variant font-body font-medium uppercase tracking-widest">Open in Google Maps</p>
                </div>
                <a 
                  className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-primary-container transition-all hover:scale-110 shadow-lg shadow-primary/30" 
                  href="https://www.google.com/maps/place/Lillys+Nails+3/@51.6011615,-0.2683433,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-sm font-bold">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
