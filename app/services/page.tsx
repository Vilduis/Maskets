import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ServicesCard from "@/components/services-card";
import { Boxes, ShoppingBag, FileCode, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Boxes,
    title: "Sistemas",
    features: [
      "Automatización de procesos",
      "Gestión de datos y usuarios",
      "Paneles de control personalizados",
      "Flujos de trabajo eficientes",
      "Integraciones simples",
    ],
    highlight: "Website & Mobile App",
  },
  {
    icon: ShoppingBag,
    title: "Tiendas online",
    features: [
      "Diseño fácil de navegar",
      "Catálogo y carrito funcional",
      "Métodos de pago integrados",
      "Seguimiento de pedidos",
      "Admin de productos y stock",
    ],
    highlight: "Web + Mobile Ready",
  },
  {
    icon: FileCode,
    title: "Páginas web",
    features: [
      "Diseño responsive",
      "Optimización SEO básica",
      "Integración con formularios",
      "Contenido editable",
      "Navegación clara y directa",
      "Hosting y dominio",
    ],
    highlight: "Web profesional + adaptable",
  },
];

export default function Services() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-sm text-white">
            Nuestros Servicios
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Servicios que ofrecemos
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluciones digitales completas para hacer crecer tu negocio en línea
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service) => (
              <ServicesCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                features={service.features}
                highlight={service.highlight}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            ¡Comienza a digitalizar tu negocio!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
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
