export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      href: "#",
      label: "Facebook",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      href: "#",
      label: "LinkedIn",
    },
    {
      name: "Email",
      icon: "📧",
      href: "mailto:h.m.elnemr@gmail.com",
      label: "h.m.elnemr@gmail.com",
    },
    {
      name: "Phone",
      icon: "📱",
      href: "tel:01117514870",
      label: "01117514870",
    },
  ]

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center items-center gap-8 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="hidden sm:inline font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">© 2025 Axiora. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
