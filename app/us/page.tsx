import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WorkTeam from "@/components/work-team";
import { Code, Palette, Zap, Target, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos y responsivos con las últimas tecnologías.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description:
      "Diseñamos interfaces intuitivas que mejoran la experiencia del usuario.",
  },
  {
    icon: Zap,
    title: "Optimización",
    description:
      "Optimizamos el rendimiento para que tu sitio sea rápido y eficiente.",
  },
  {
    icon: Target,
    title: "Estrategia Digital",
    description:
      "Desarrollamos estrategias que generan resultados reales para tu negocio.",
  },
];

export default function US() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-sm text-white">
            Sobre Nosotros
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nosotros
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Descubre quiénes somos y qué hacemos para transformar tu negocio
            digital.
          </p>
        </div>
      </section>

      {/* Unified Section: What We Do & Who We Are */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 sm:mb-12">
            <div>
              <Badge
                variant="outline"
                className="mb-3 sm:mb-4 text-xs sm:text-sm"
              >
                ¿Qué hacemos?
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                ¡Digitalizamos tu emprendimiento para que crezcas más!
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Diseñamos páginas web que venden más y te brindamos herramientas
                que automatizan tu negocio y te hacen la vida más fácil.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  Contáctanos
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div>
              <Badge
                variant="secondary"
                className="mb-3 sm:mb-4 text-xs sm:text-sm text-white"
              >
                ¿Quiénes somos?
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Nuestro Equipo
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                Somos un equipo de desarrolladores web y diseñadores que nos
                dedicamos a crear páginas web que venden más y te brindamos
                herramientas que automatizan tu negocio y te hacen la vida más
                fácil.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <WorkTeam />
    </div>
  );
}
