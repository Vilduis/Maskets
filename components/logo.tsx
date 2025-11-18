import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ className, size = "md", showText = false }: LogoProps) => {
  const sizeClasses = {
    sm: "w-7 h-7 sm:w-8 sm:h-8 text-base sm:text-lg",
    md: "w-9 h-9 sm:w-10 sm:h-10 text-lg sm:text-xl",
    lg: "w-11 h-11 sm:w-12 sm:h-12 text-xl sm:text-2xl",
  };

  const textSizeClasses = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-xl sm:text-2xl",
  };

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105 active:scale-95",
        className
      )}
      aria-label="Maskets - Inicio"
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-lg sm:rounded-xl bg-linear-to-br from-primary via-primary to-secondary p-1.5 sm:p-2 shadow-md sm:shadow-lg transition-all hover:shadow-xl",
          sizeClasses[size]
        )}
      >
        <div className="flex items-center justify-center">
          <span className="font-bold text-primary-foreground leading-none">
            MK
          </span>
        </div>
        {/* Decorative corner accent */}
        <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-secondary opacity-80"></div>
      </div>
      {showText && (
        <span
          className={cn(
            "font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent",
            textSizeClasses[size]
          )}
        >
          Maskets
        </span>
      )}
    </Link>
  );
};

export default Logo;
