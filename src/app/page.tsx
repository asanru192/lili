import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}
