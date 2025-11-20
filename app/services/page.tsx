import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ServicesCard from "@/components/services-card";
import {
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Code,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/constants/services";

export default function Services() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-3 text-sm text-white">
            Nuestros Servicios
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Servicios que ofrecemos
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluciones digitales completas para hacer crecer tu negocio en línea
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {services.map((service) => (
              <ServicesCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                features={service.features || []}
                highlight={service.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-10 text-center">
            Proceso de Trabajo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Paso 1 - Consulta */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4 relative">
                <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold flex items-center justify-center shadow-md">
                  1
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                Consulta
              </h3>
            </div>

            {/* Paso 2 - Estrategia */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center mb-4 relative">
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary text-secondary-foreground text-sm sm:text-base font-bold flex items-center justify-center shadow-md">
                  2
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                Estrategia
              </h3>
            </div>

            {/* Paso 3 - Desarrollo */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-4 relative">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent text-accent-foreground text-sm sm:text-base font-bold flex items-center justify-center shadow-md">
                  3
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                Desarrollo
              </h3>
            </div>

            {/* Paso 4 - Lanzamiento */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4 relative">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-bold flex items-center justify-center shadow-md">
                  4
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                Lanzamiento
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            ¡Comienza a digitalizar tu negocio!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-5 sm:mb-6 leading-relaxed">
            Aquí es donde tu idea toma forma. Creamos tu sitio web personalizado
            para que tu negocio se destaque en la web.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2"
            >
              Trabajemos juntos
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
