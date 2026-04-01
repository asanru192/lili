import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-50 dark:bg-stone-950 w-full border-t border-stone-200/15 font-body">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
            Lilly&apos;s Nails
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
            Experience the pinnacle of nail artistry in a space designed for tranquility and refinement.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-stone-400 hover:text-primary cursor-pointer transition-colors">share</span>
            <span className="material-symbols-outlined text-stone-400 hover:text-primary cursor-pointer transition-colors">photo_camera</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-headline text-sm font-bold mb-6 text-rose-800 dark:text-rose-200 tracking-widest uppercase">Navigation</h4>
          <ul className="space-y-4">
            <li><Link className="text-sm text-stone-600 dark:text-stone-400 hover:underline decoration-rose-300 underline-offset-4" href="/">Home</Link></li>
            <li><Link className="text-sm text-stone-600 dark:text-stone-400 hover:underline decoration-rose-300 underline-offset-4" href="/services">Services</Link></li>
            <li><Link className="text-sm text-stone-600 dark:text-stone-400 hover:underline decoration-rose-300 underline-offset-4" href="/gallery">Gallery</Link></li>
            <li><Link className="text-sm text-stone-600 dark:text-stone-400 hover:underline decoration-rose-300 underline-offset-4" href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-headline text-sm font-bold mb-6 text-rose-800 dark:text-rose-200 tracking-widest uppercase">Location & Hours</h4>
          <div className="space-y-4 text-sm text-stone-600 dark:text-stone-400">
            <p className="flex items-start space-x-3">
              <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
              <span>
                85 Burnt Oak Broadway,<br />
                Burnt Oak, Edgware<br />
                HA8 5EP, United Kingdom
              </span>
            </p>
            <p className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-primary text-base">call</span>
              <span>020 8952 2187</span>
            </p>
            <div className="pt-2">
              <p className="flex items-center space-x-3 text-xs uppercase tracking-widest font-bold mb-2">
                <span className="material-symbols-outlined text-primary text-base">schedule</span>
                <span>Operating Hours</span>
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs opacity-80">
                <span>Thu - Fri:</span><span>10:00 - 19:00</span>
                <span>Sat:</span><span>09:00 - 18:00</span>
                <span>Mon - Wed:</span><span>By Appointment</span>
                <span>Sun:</span><span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-stone-200/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-stone-500">© 2026 Lilly&apos;s Nails. All rights reserved.</p>
        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Crafted with excellence</span>
      </div>
    </footer>
  );
}
