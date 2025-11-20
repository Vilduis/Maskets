"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { navItems } from "@/constants/navigation";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import DesktopNav from "./header/desktop-nav";
import MobileMenu from "./header/mobile-menu";
import ContactButton from "./header/contact-button";

const Header = () => {
  const { isOpen, toggle, close } = useMobileMenu();
  const { generateWhatsAppUrl } = useWhatsApp();
  const whatsappUrl = generateWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center min-w-0 shrink-0">
            <Logo size="md" showText={true} />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav items={navItems} />

          {/* Desktop CTA Button */}
          <div className="hidden md:flex md:items-center ml-4">
            <ContactButton whatsappUrl={whatsappUrl} variant="desktop" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden ml-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              className="text-foreground hover:bg-accent h-9 w-9"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu
          items={navItems}
          isOpen={isOpen}
          onClose={close}
          whatsappUrl={whatsappUrl}
        />
      </div>
    </header>
  );
};

export default Header;
