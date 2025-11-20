import { Button } from "@/components/ui/button";
import { WhatsApp } from "@/components/icons";

interface ContactButtonProps {
  whatsappUrl: string;
  className?: string;
  variant?: "desktop" | "mobile";
}

const ContactButton = ({
  whatsappUrl,
  className,
  variant = "desktop",
}: ContactButtonProps) => {
  const isMobile = variant === "mobile";

  return (
    <Button
      asChild
      size={isMobile ? "default" : "sm"}
      className={
        className ||
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all text-sm lg:text-base"
      }
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center ${isMobile ? "justify-center" : ""} gap-2`}
        aria-label="Contactar por WhatsApp"
      >
        <WhatsApp className="w-4 h-4" />
        Contáctanos
      </a>
    </Button>
  );
};

export default ContactButton;

