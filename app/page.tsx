import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { ComingSoonBanner } from "@/components/coming-soon-banner"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-black">
      <Header />
      <HeroSection />
      <ScreenshotsSection />
      <ComingSoonBanner />
      <Footer />
    </main>
  )
}
