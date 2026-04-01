import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Lilly's Nails",
  description: "Explore our signature nail treatments, from silk polishes to luxury spa pedicures and bespoke nail art.",
};

export default function ServicesPage() {
  const manicureCollection = [
    {
      title: "Signature Silk Polish",
      description: "A complete revival including organic cuticle care, hand exfoliation with Himalayan salts, and a high-shine finish.",
      price: "$65",
    },
    {
      title: "Gel Sculpting & Color",
      description: "Precision shaping combined with long-lasting premium gel pigment. Includes a stress-relieving hand massage.",
      price: "$85",
    },
    {
      title: "The Atelier Experience",
      description: "Our most luxurious offering. Paraffin wax treatment, collagen mask, and detailed nail restoration.",
      price: "$120",
    },
  ];

  const pedicureCollection = [
    {
      title: "Eucalyptus Soak & Polish",
      description: "Cooling eucalyptus and mint bath followed by meticulous nail care and your choice of polish.",
      price: "$75",
    },
    {
      title: "Rose Quartz Stone Therapy",
      description: "Hot stone massage using rose quartz, floral petal infusion, and intensive callus therapy.",
      price: "$95",
    },
  ];

  const enhancements = [
    {
      icon: "brush",
      title: "Bespoke Nail Art",
      description: "Hand-painted designs, minimalist lines, or intricate patterns.",
      price: "FROM $5 / NAIL",
    },
    {
      icon: "diamond",
      title: "Apres Gel-X Extensions",
      description: "The gold standard in nail extensions for strength and natural feel.",
      price: "$110 FULL SET",
    },
    {
      icon: "palette",
      title: "Chrome & Iridescent Finish",
      description: "High-glaze pearlescent or metallic powders for a futuristic glow.",
      price: "ADD $15",
    },
    {
      icon: "spa",
      title: "Structure Gel Overlay",
      description: "Added strength for natural nails to promote healthy growth.",
      price: "$30 ADD-ON",
    },
  ];

  return (
    <div className="bg-surface text-on-surface">
      <NavBar />
      
      <main className="pt-32 pb-24">
        {/* Editorial Header */}
        <header className="max-w-7xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <span className="block font-label tracking-[0.2em] uppercase text-primary mb-4 text-sm">Artistry & Excellence</span>
              <h1 className="text-6xl md:text-8xl font-headline leading-tight text-on-surface">Our Signature Treatments</h1>
            </div>
            <div className="md:col-span-5 pb-4">
              <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-md">
                Experience a sanctuary of refined aesthetics. Every treatment is a bespoke journey tailored to your unique style and skin needs.
              </p>
            </div>
          </div>
        </header>

        {/* Service Categories */}
        <section className="max-w-7xl mx-auto px-8 space-y-32 font-body">
          {/* Manicure Section */}
          <div className="group">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low">
                <img 
                  alt="Signature Manicure" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAESyyKWdwXyzhUyeelsy_R8fbclYb56x0aiNBmzTDb3iuAxnAEPU2drOMX4PkmBt50MNu3nF0TrbBvGz-kDzZAIqJpbWKmAXx8v5HhmRf1THS-DtUudie5iUc5HdnfVXPYMViTT87HQe7q7yWvhN6Ows5GiUaPpNsscQEZ6_GyoD9zOuDFUqWw6DVqyVERkET1LDJXSt4NSD7gI2NwIdI9Syx4qfQ85xiHe9eetXzrI5Eh1r2gcBqf1JZRivOAlURFCpeC6wMMfHQ"
                />
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex justify-between items-baseline mb-12">
                  <h2 className="text-4xl font-headline text-on-surface">The Manicure Collection</h2>
                  <div className="h-[1px] flex-grow mx-8 bg-outline-variant opacity-20 hidden md:block"></div>
                </div>
                <div className="space-y-12">
                  {manicureCollection.map((service, i) => (
                    <div key={i} className="flex justify-between items-start group/item">
                      <div className="max-w-xl">
                        <h3 className="text-xl font-headline mb-2 text-on-surface">{service.title}</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{service.description}</p>
                        <Link href="/contact" className="text-primary font-label text-xs tracking-widest uppercase border-b border-transparent hover:border-primary transition-all">Enquire Now</Link>
                      </div>
                      <span className="font-headline text-xl text-primary">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pedicure Section */}
          <div className="group">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
              <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low">
                <img 
                  alt="Luxury Pedicure" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFBZIIUA637mSt8ER-mTTEq1hYmeAoAY9o0x3xsveQuaSdlqsFWNz0D66dc6jj3IzP0jx4xgjE5EELARof4Zmp51pJQ2zV07q-t_ewwruN7oc5xjmHINZ_mJ0mLpPOMmaq_D_QeLLlncJSmxAnzVODiYPWrM0JhWWu5Poe3aI5OEakEDzfbwBoeXLmA5YGfrOywppQ_CkX9C-d87VWOmETGKZ7o08QGXkI-FCVnce5O5UnylvsB9_RMZOX4jgpf3LV1xfqGJfOwfs"
                />
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex justify-between items-baseline mb-12">
                  <h2 className="text-4xl font-headline text-on-surface">Therapeutic Pedicures</h2>
                  <div className="h-[1px] flex-grow mx-8 bg-outline-variant opacity-20 hidden md:block"></div>
                </div>
                <div className="space-y-12">
                  {pedicureCollection.map((service, i) => (
                    <div key={i} className="flex justify-between items-start">
                      <div className="max-w-xl">
                        <h3 className="text-xl font-headline mb-2 text-on-surface">{service.title}</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{service.description}</p>
                        <button className="text-primary font-label text-xs tracking-widest uppercase border-b border-transparent hover:border-primary transition-all">Book This Service</button>
                      </div>
                      <span className="font-headline text-xl text-primary">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhancements Grid */}
          <div className="bg-stone-100 dark:bg-stone-900/50 rounded-2xl p-12 md:p-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-headline text-on-surface mb-4">Extensions & Artistry</h2>
                <div className="w-24 h-[2px] bg-primary mx-auto opacity-30"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
                {enhancements.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="material-symbols-outlined text-primary text-3xl shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-headline mb-1">{item.title}</h3>
                      <p className="text-on-surface-variant text-sm mb-3">{item.description}</p>
                      <span className="font-label text-xs text-primary font-bold tracking-widest uppercase">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
