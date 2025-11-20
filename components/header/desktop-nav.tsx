import Link from "next/link";
import { NavItem } from "@/types";

interface DesktopNavProps {
  items: NavItem[];
}

const DesktopNav = ({ items }: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2" aria-label="Navegación principal">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-3 py-2 text-sm lg:text-base font-medium text-foreground transition-colors hover:text-primary hover:bg-accent/50 rounded-md whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;

