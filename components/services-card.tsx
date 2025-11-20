import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServicesCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  highlight?: string;
}

const ServicesCard = ({
  icon: Icon,
  title,
  features,
  highlight,
}: ServicesCardProps) => {
  return (
    <Card className="h-full hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="p-5 sm:p-6">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
          {title}
        </h3>

        {/* Features List */}
        <ul
          className="space-y-2 sm:space-y-2.5 mb-4"
          aria-label={`Características de ${title}`}
        >
          {features.map((feature, index) => (
            <li
              key={`${title}-${index}`}
              className="flex items-start gap-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              <span className="text-primary shrink-0 mt-1.5" aria-hidden="true">
                •
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Highlight */}
        {highlight && (
          <div className="pt-3 border-t border-border">
            <p className="text-xs sm:text-sm font-medium text-primary">
              {highlight}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
