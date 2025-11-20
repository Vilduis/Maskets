import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/constants/services";

const ServicesBasic = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Servicios que ofrecemos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones digitales completas para hacer crecer tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-background rounded-lg border border-border p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed">
                  {service.brief}
                </p>
                <p className="text-sm sm:text-base text-primary font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link
              href="/services"
              className="flex items-center justify-center gap-2"
            >
              Ver todos los servicios
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesBasic;
