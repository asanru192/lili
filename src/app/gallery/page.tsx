import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Lilly's Nails",
  description: "A curated collection of our finest nail transformations and the serene environment of our boutique atelier in Edgware.",
};

export default function GalleryPage() {
  return (
    <div className="bg-surface text-on-surface">
      <NavBar />
      
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto font-body">
        {/* Header Section */}
        <header className="mb-24 text-center md:text-left">
          <span className="font-label text-xs tracking-[0.2em] uppercase text-primary mb-4 block">Artistry in Motion</span>
          <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-8 max-w-3xl leading-tight">Our Recent Work</h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            A curated selection of our finest nail transformations and the serene environment of our boutique atelier. Each design is a bespoke creation tailored to the unique essence of our clients.
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Featured Large Tile */}
          <div className="md:col-span-8 group relative overflow-visible">
            <div className="aspect-[16/10] overflow-hidden rounded-lg bg-surface-container-low shadow-sm">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT2I82kSyMppMPJOQ_2UBgqoWutvaJCFPZcA2z7dVeGtnePgfU_3RVS6Oy73GXDr2473fxLBIH4NV1KZZo9ekgbrv0VpFtcSN-0CGGChejR-zz-5naS5Xq-_C9WMwfE0VjKnvcZJRrEkZ7TPLrjqDkvDWU2zuF_WYTHEUzp0ySbUZ2IFoL4Nw1jMRk1H12B-48qDX8RXf-5OmV-EZiI7akVQBRtCwViMRmsJT0dMlF-2fi3ZnJZ6oPlIMsfx3MI_KgvCPcF7JgSnA"
                alt="Rose Gold Chrome Nails"
              />
            </div>
            <div className="absolute -bottom-12 -right-4 md:right-8 bg-surface-container-lowest p-8 rounded-lg shadow-xl max-w-sm border border-stone-100 z-10 transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="font-headline text-2xl mb-2">The Rose Gold Collective</h3>
              <p className="text-xs text-on-surface-variant font-label tracking-[0.2em] mb-4 uppercase">CHROME & SCULPTURE</p>
              <button className="inline-flex items-center text-primary font-bold text-xs tracking-widest uppercase hover:underline">
                Book This Look <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4 mt-12 md:mt-0 flex flex-col justify-end space-y-12">
            {/* Interior Shot */}
            <div className="group relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-surface-container-low">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAL1YjD2Xu5DdDTCZWkH67XvxrBmD8QhKZWCZWVk8fQcE1xJjvvvRq5wyZX4smjwUYxSZGv6OLlznaMyqX9VukdoVN1EOC6-0J4FOAGHSbVpb0Rvs4MBCYMyOV5A4hVaXIog_oNfuBOJp0GCuBvUu1ukBY8-6DegOfbFUZ3H2NGABX9pT6bli_R2ybLGOSk05T6HttOooeT69J7lHfgwZ_1KBeCjVbCuG0_37Cs32vlJ1OaPP9-FXxhcPnKXOzF4SsLvPulOQZDF8"
                  alt="Salon Interior"
                />
              </div>
              <p className="mt-4 font-headline text-xl">The Atelier</p>
            </div>
          </div>

          {/* Asymmetric Row 1 */}
          <div className="md:col-span-4 group relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface-container-low">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Ew0M6RQZMRz15CVI95kGCXb3CMBew3dDY-E7rfzOgC_P8c35TvKFd__5RIotT1yk9MqDyiqhxzSq1ziwNBFPhAzKlgT_yv866iXUzomLNWg12nNxxeK2HP69u5SYysEGtzj7ea7nZrGoSXc4ncyrOjcsPaMd7sWBTQFuGNyZ5AiU85Qknr3wwiQUQsCCqXeOwWP0q6DMOuo8WvLrW_hbDVoQxjgjkYdV7CrAu1BR9mm0TXEodW-64WiFQQ085ju3woaO25NH4pM"
                alt="Classic French Manicure"
              />
            </div>
            <div className="mt-4">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary">Refined Classic</span>
              <p className="font-headline text-xl">Silk French</p>
            </div>
          </div>

          <div className="md:col-span-4 group relative mt-0 md:mt-24">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface-container-low">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnBPmVVaTXJty0vdyoPA-OD1CSaD7AT43xruhTZ5R6vRMHuB09G5pXc9-mVAKG1BCz19xq_fiESKpKhZ8FTBN1QDSKDuuM1f43G4a3N5PfEJWTpTbueimWjcLWzGH8KNp7Mx1jdqUazzUnVeOIGjTwVJJGHczypDiQSJvjJuU-3vlaZDPWhc0kr9auuT3xegTAapW7sTRJoIqNAo7g2o56xEX8-Mgm3hfKmnzNg5oRxdFjs8C9V4gDVevHIJUgC5RPDA4hzLw3RWM"
                alt="Bespoke Hand-Painted Art"
              />
            </div>
            <div className="mt-4">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary">Hand Painted</span>
              <p className="font-headline text-xl">Floral Motif</p>
            </div>
          </div>

          <div className="md:col-span-4 group relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface-container-low">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXkpidlPccmu1JGtimQ7mWfssn8M3ZxzBkpNbR6ntZh3qimQzD_ILpSqYG_fyoXP33e1jvRUPnQ4jmB1UdS6v0DfX6_C5q9KobzvS3HBC1wJ3W6af6KgmWlf2l0yUp4KjydoCnZ4NY6yV-EctzymBN9RZjQ4XGruNNUdGaZ0kGDqty5uWJKoBXqxUOxcKCo3GZwx4dkkMPjlDejWY-byqkGU-lNjEPmL9JQRJjmXt9H6lcch4jHCZtnSUznf1mPfnF60qHjApaFe8"
                alt="Emerald Green Gel Finish"
              />
            </div>
            <div className="mt-4">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary">Seasonal Depth</span>
              <p className="font-headline text-xl">Glossy Emerald</p>
            </div>
          </div>

          {/* Statement Block */}
          <div className="md:col-span-12 py-24 bg-stone-100 rounded-2xl px-8 md:px-24 text-center my-12 border border-stone-200/50">
            <h2 className="font-headline text-4xl mb-6 italic text-rose-900 leading-tight">Can&apos;t find your perfect look?</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Our master technicians specialize in translating your vision into wearable art. Bring an inspiration photo or let us design something entirely unique for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-4 bg-primary text-on-primary rounded-lg font-label tracking-widest uppercase text-xs hover:bg-primary-container transition-all shadow-lg shadow-primary/20">Consult Our Artists</button>
              <button className="px-10 py-4 border border-on-surface/10 text-on-surface rounded-lg font-label tracking-widest uppercase text-xs hover:bg-white/50 transition-all">View All Services</button>
            </div>
          </div>

          {/* Bottom Bento Section */}
          <div className="md:col-span-6 group relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-surface-container-low">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWqQlhjYK4IH2xYw2WOfarQ8kNHjMPdCWDxU4xOdHGeWuOxwU4-HHAzI42pusX1u28u4MaKs0D50ZnU0WyZMkCEq0QfhtEK6KghbPHZOGr7xxp1el8BxtdFfnQa-U9kCrmvv7tZ82J68-usp7vAu9LBChX2fOWSCRNQ6WwQ-aEkpPy4srFQ1V9UXVHOhd4RKMdpaiTwucLitMr0zQpuWPqET-sU0CAWSCyyGt4eydeNlNCg6Jrt729g48RIsrLku2rHopxkJ9fyzE"
                alt="Nail Palette Display"
              />
            </div>
            <div className="mt-6">
              <p className="font-label text-[10px] tracking-widest uppercase text-primary mb-1">Curated Materials</p>
              <p className="font-headline text-2xl">The Palette</p>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col justify-end">
            <div className="group relative">
               <div className="aspect-[16/9] overflow-hidden rounded-lg bg-surface-container-low">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Sv_FBWANQVOmS6CWHx2nxP02Gkc_khowHF42pjStxiQmKKzg976AjjK0kIHuTkPoDsv1JpZ64OlYIPJZFAF9e0JI-xXnSwdSjkcPGIrnW2ddLIkCx0tzixZomkUbWF7GusbXz5q5-zPDLkULiDgplBwQe2SDhhulYSbkMsY6lxMGNEhfhJIdu3SYXFKD4WjbXehdecPsoeIZlJWRD9oZtDChFBkGio6lZWRyrQ57-H4WEHIzNreJ68sAc62pbEjFeHzzxv8r1so"
                  alt="Manicure Service focus"
                />
              </div>
              <div className="mt-6">
                <p className="font-label text-[10px] tracking-widest uppercase text-primary mb-1">Signature Experience</p>
                <p className="font-headline text-2xl">Lilly&apos;s Spa Manicure</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
