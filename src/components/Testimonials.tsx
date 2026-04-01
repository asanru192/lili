export default function Testimonials() {
  return (
    <section className="py-32 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="text-center mb-20">
          <span className="font-label tracking-[0.2em] uppercase text-xs text-primary-fixed-dim mb-4 block">Trusted by the Edgware Community</span>
          <h2 className="font-headline text-4xl md:text-5xl">The Client Experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative p-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <span className="material-symbols-outlined text-primary-fixed-dim text-4xl absolute -top-4 -left-4 bg-stone-900 px-2">format_quote</span>
            <p className="font-headline text-2xl italic leading-relaxed mb-8">
              &quot;The attention to detail on my gel extensions is unmatched. The technicians are meticulous, clean, and highly professional.&quot;
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-primary-fixed-dim">person</span>
              </div>
              <div>
                <p className="font-label text-sm uppercase tracking-wider">Sarah M.</p>
                <p className="font-body text-xs opacity-50">Local guide</p>
              </div>
            </div>
          </div>
          
          <div className="relative p-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 mt-12 md:mt-24">
            <span className="material-symbols-outlined text-primary-fixed-dim text-4xl absolute -top-4 -left-4 bg-stone-900 px-2">format_quote</span>
            <p className="font-headline text-2xl italic leading-relaxed mb-8">
              &quot;Best manicure I&apos;ve found in North London. Quick service without sacrificing quality, and the dip powder lasts for weeks.&quot;
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-fixed-dim/20 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-primary-fixed-dim">person</span>
              </div>
              <div>
                <p className="font-label text-sm uppercase tracking-wider">Emma T.</p>
                <p className="font-body text-xs opacity-50">Edgware Resident</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
