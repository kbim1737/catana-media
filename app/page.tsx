import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MarqueeTicker } from "@/components/marquee-ticker"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { AboutSection } from "@/components/about-section"
import { Testimonials } from "@/components/testimonials"
import { WorkedWith } from "@/components/worked-with"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <PortfolioGrid />
      <WorkedWith />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
