import Image from "next/image";

export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "/Facebook_Logo_(2019).png",
      href: "https://www.facebook.com/profile.php?id=61581083394506",
      label: "Facebook",
    },
    {
      name: "LinkedIn",
      icon: "/LinkedIn_logo_initials.png",
      href: "https://www.linkedin.com/company/axiorastro/",
      label: "LinkedIn",
    },
    {
      name: "Email",
      icon: "📧",
      href: "mailto:h.m.elnemr@gmail.com",
      label: "h.m.elnemr@gmail.com",
    },
    {
      name: "WhatsApp",
      icon: "/—Pngtree—whatsapp mobile software icon_8704828.png",
      href: "https://wa.me/201501118632/?text=Hello%20I%20am%20interested%20in%20your%20app",
      label: "WhatsApp",
    },
  ];

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
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                {link.name === "Email" ? (
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                ) : (
                  <div className="w-8 h-8 relative group-hover:scale-110 transition-transform">
                    <Image
                      src={link.icon}
                      alt={`${link.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="hidden sm:inline font-medium">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © 2025 Axiora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
