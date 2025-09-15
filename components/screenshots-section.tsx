import { Card } from "@/components/ui/card"

export function ScreenshotsSection() {
  const screenshots = [
    {
      title: "Dashboard Overview",
      description: "Get insights at a glance with our intuitive dashboard",
      image: "/modern-data-dashboard-with-charts-and-graphs.jpg",
    },
    {
      title: "Advanced Analytics",
      description: "Dive deep into your data with powerful analysis tools",
      image: "/advanced-analytics-interface-with-data-visualizati.jpg",
    },
    {
      title: "Real-time Reports",
      description: "Generate beautiful reports in real-time",
      image: "/professional-data-reports-and-charts-interface.jpg",
    },
  ]

  return (
    <section id="screenshots" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">A Sneak Peek at Axiora</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto text-balance">
            Experience the future of data analysis with our intuitive interface and powerful features
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={screenshot.image || "/placeholder.svg"}
                  alt={screenshot.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{screenshot.title}</h3>
                <p className="text-muted-foreground">{screenshot.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden max-w-4xl mx-auto">
            <div className="aspect-video relative overflow-hidden">
              <img
                src="/video-preview-of-data-analysis-software-interface.jpg"
                alt="Axiora Demo Video"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-glow">
                  <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-card-foreground mb-2">See Axiora in Action</h3>
              <p className="text-muted-foreground">
                Watch our demo to see how Axiora transforms complex data into actionable insights
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
