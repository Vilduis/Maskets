import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types";
import { WhatsApp } from "@/components/icons";

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

const MobileMenu = ({ items, isOpen, onClose, whatsappUrl }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
      <div className="space-y-1 border-t border-border bg-background px-2 pb-4 pt-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-primary rounded-md active:bg-accent/70"
          >
            {item.label}
          </Link>
        ))}
        <div className="pt-3">
          <Button
            asChild
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base"
            onClick={onClose}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <WhatsApp className="w-4 h-4" />
              Contáctanos
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

