import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-primary/15 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Axiora – Data Analysis Made Simple
        </h1>

        <p className="text-xl md:text-2xl text-secondary mb-12 text-balance max-w-2xl mx-auto">
          We're building the future of insights. Stay tuned!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl animate-glow"
            disabled
          >
            Download (Coming Soon)
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
          >
            Notify Me
          </Button>
        </div>

        {/* Data visualization elements */}
        <div className="mt-16 grid grid-cols-3 gap-8 opacity-30">
          <div className="h-24 bg-gradient-to-t from-primary/20 to-transparent rounded-t-lg"></div>
          <div className="h-32 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg"></div>
          <div className="h-20 bg-gradient-to-t from-primary/25 to-transparent rounded-t-lg"></div>
        </div>
      </div>
    </section>
  )
}
