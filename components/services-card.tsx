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
      <CardContent className="p-6 sm:p-8">
        {/* Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {title}
        </h3>

        {/* Features List */}
        <ul className="space-y-3 sm:space-y-4 mb-6">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              <span className="text-primary shrink-0 mt-1.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Highlight */}
        {highlight && (
          <div className="pt-4 border-t border-border">
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
