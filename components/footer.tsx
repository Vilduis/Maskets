import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Logo from "@/components/logo";
import { footerLinks, socialLinks } from "@/constants/footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted/30 border-t border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-5">
            <Logo size="lg" showText={true} />
            <p className="text-sm sm:text-base text-muted-foreground max-w-xs sm:max-w-sm leading-relaxed">
              Construimos plataformas digitales que venden, conectan y
              posicionan tu negocio en el mundo digital.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-background border border-border text-muted-foreground transition-all hover:text-primary hover:border-primary hover:bg-primary/5 hover:scale-110 active:scale-95"
                    aria-label={social.label}
                  >
                    <Icon className="size-4 sm:size-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Empresa Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-foreground">
              Empresa
            </h3>
            <nav className="flex flex-col space-y-2.5 sm:space-y-3">
              {footerLinks.empresa.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm sm:text-base text-muted-foreground transition-colors hover:text-primary inline-block w-fit active:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Servicios Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-foreground">
              Servicios
            </h3>
            <nav className="flex flex-col space-y-2.5 sm:space-y-3">
              {footerLinks.servicios.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm sm:text-base text-muted-foreground transition-colors hover:text-primary inline-block w-fit active:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-foreground">
              Contacto
            </h3>
            <div className="flex flex-col space-y-2.5 sm:space-y-3">
              <a
                href="mailto:contacto@maskets.com"
                className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-sm sm:text-base text-muted-foreground transition-colors hover:text-primary group"
              >
                <Mail className="size-4 sm:size-5 text-primary group-hover:scale-110 transition-transform shrink-0 mt-0.5 sm:mt-0" />
                <span className="break-all sm:break-normal">
                  contacto@maskets.com
                </span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base text-muted-foreground transition-colors hover:text-primary group"
              >
                <Phone className="size-4 sm:size-5 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <span className="whitespace-nowrap">+1 (234) 567-890</span>
              </a>
              <div className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                <MapPin className="size-4 sm:size-5 text-primary mt-0.5 shrink-0" />
                <span>Ciudad, País</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-border" />

      {/* Copyright Section */}
      <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 md:py-8">
        <div className="flex items-center justify-center">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center leading-relaxed">
            {`© ${currentYear} `}
            <Link
              href="/"
              className="font-semibold text-primary hover:text-secondary transition-colors"
            >
              Maskets
            </Link>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
