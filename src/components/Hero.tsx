'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
      <div className="absolute inset-0 -z-20 opacity-10">
        <Image src="/bg_texture.png" alt="Background Texture" fill className="object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div style={{ y: textY, opacity }} className="md:col-span-6 z-10">
          <span className="font-label tracking-[0.2em] uppercase text-xs text-primary mb-6 block">Artistry in Every Detail</span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] mb-8">
             Precision <span className="italic text-primary">Nail Design</span><br />in Edgware.
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
             Expert acrylics, detailed gel extensions, and complete nail care at 85 Burnt Oak Broadway. Walk in or contact us for your aesthetic upgrade today.
          </p>
          <div className="flex items-center space-x-8">
            <Link href="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-md font-label tracking-widest uppercase text-xs hover:bg-primary-container transition-colors duration-300">
              Contact Us
            </Link>
            <a className="font-label tracking-widest uppercase text-xs text-on-surface hover:text-primary transition-colors duration-300 border-b border-outline-variant pb-1" href="tel:02089522187">Call 020 8952 2187</a>
          </div>
        </motion.div>
        
        <div className="md:col-span-6 relative h-[600px] md:h-[800px]">
          <div className="absolute inset-0 bg-primary-fixed-dim/20 rounded-full blur-3xl -z-10 translate-x-20"></div>
          <motion.div style={{ y: imageY }} className="relative w-full h-full">
            <Image 
              src="/hero.png" 
              alt="Flawless manicured hand with gel extensions" 
              fill
              className="object-cover rounded-lg editorial-shadow"
            />
            <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 rounded-lg editorial-shadow hidden lg:block">
              <p className="font-headline italic text-2xl text-primary">Lilly&apos;s Nails</p>
              <p className="font-label tracking-widest text-[10px] uppercase mt-2">Precision Care</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
