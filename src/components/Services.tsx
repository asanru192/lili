"use client"
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Services() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-between items-end mb-20"
        >
          <div>
            <span className="font-label tracking-[0.2em] uppercase text-xs text-primary mb-4 block">Our Expertise</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface">Curated Treatments</h2>
          </div>
          <a className="font-label tracking-widest uppercase text-xs text-primary hover:underline underline-offset-8 transition-all" href="#">View Full Menu</a>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="group bg-surface-container-lowest p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8 text-primary">
              <span className="material-symbols-outlined">brush</span>
            </div>
            <h3 className="font-headline text-2xl mb-4 text-on-surface">The Signature</h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">Our flagship therapeutic manicure including organic exfoliation and a precision finish.</p>
            <span className="font-label text-xs tracking-widest uppercase text-primary">MANICURE</span>
          </motion.div>

          <motion.div variants={itemVariants} className="group bg-primary text-on-primary p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">diamond</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <h3 className="font-headline text-2xl mb-4">Sculpted Extensions</h3>
            <p className="font-body opacity-90 text-sm leading-relaxed mb-6">Bespoke gel architecture designed to enhance the natural length and strength of your nails.</p>
            <span className="font-label text-xs tracking-widest uppercase">GEL & ACRYLIC</span>
          </motion.div>

          <motion.div variants={itemVariants} className="group bg-surface-container-lowest p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8 text-primary">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <h3 className="font-headline text-2xl mb-4 text-on-surface">Creative Concept</h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">Editorial nail design from minimalist lines to complex hand-painted masterpieces.</p>
            <span className="font-label text-xs tracking-widest uppercase text-primary">NAIL ART</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
