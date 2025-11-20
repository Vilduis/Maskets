"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left Section - Content */}
        <div className="space-y-5 sm:space-y-6 lg:space-y-8 z-10 text-center lg:text-left">
          <div className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start">
            <Badge
              variant="secondary"
              className="w-fit text-xs sm:text-sm text-white"
            >
              Construimos lo que tu negocio necesita
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Haz crecer tu negocio con un sitio web creado por Maskets
            </h1>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Construimos plataformas que venden, conectan y posicionan.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Nuestro equipo combina diseño, tecnología y estrategia para crear
              productos digitales que generan resultados reales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="text-sm sm:text-base w-full sm:w-auto"
            >
              <Link href="/contact">Comienza ahora</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-sm sm:text-base w-full sm:w-auto"
            >
              <Link
                href="/projects"
                className="flex items-center border border-primary/20 px-4 py-2 justify-center gap-2"
              >
                <ArrowRight className="size-4 sm:size-5" />
                Ver proyectos
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Section - Modern Visual Showcase */}
        {/* Mobile/Tablet: Grid Layout */}
        <div className="lg:hidden mt-8 sm:mt-12">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <Badge variant="default" className="mb-3 text-xs">
                <Sparkles className="size-3" />
                Diseño
              </Badge>
              <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">
                Diseño Moderno
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Interfaces que cautivan y convierten
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <Badge variant="secondary" className="mb-3 text-xs text-white">
                <Zap className="size-3" />
                Velocidad
              </Badge>
              <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">
                Rendimiento
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Velocidad y optimización garantizadas
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <Badge variant="outline" className="mb-3 text-xs">
                <Target className="size-3" />
                Estrategia
              </Badge>
              <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">
                Resultados
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Estrategias que generan crecimiento
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <Badge variant="default" className="mb-3 text-xs">
                <Sparkles className="size-3" />
                Personalizado
              </Badge>
              <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">
                Experiencia
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Soluciones personalizadas para tu negocio
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: Floating Cards Layout */}
        <div className="hidden lg:flex relative h-[500px] xl:h-[600px] items-center justify-center">
          {/* Gradient Background Blob */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-md xl:max-w-lg relative">
              {/* Animated Gradient Blob */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>

              {/* Floating Feature Cards */}
              <div className="relative h-full flex items-center justify-center">
                {/* Card 1 - Top Center */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 xl:w-64 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Badge variant="default" className="mb-3">
                    <Sparkles className="size-3" />
                    Diseño
                  </Badge>
                  <h3 className="font-bold text-foreground mb-2">
                    Diseño Moderno
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Interfaces que cautivan y convierten
                  </p>
                </div>

                {/* Card 2 - Left Center */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-52 xl:w-56 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl delay-75">
                  <Badge variant="secondary" className="mb-3 text-white">
                    <Zap className="size-3" />
                    Velocidad
                  </Badge>
                  <h3 className="font-bold text-foreground mb-2">
                    Rendimiento
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Velocidad y optimización garantizadas
                  </p>
                </div>

                {/* Card 3 - Right Center */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-52 xl:w-56 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl delay-150">
                  <Badge variant="outline" className="mb-3">
                    <Target className="size-3" />
                    Estrategia
                  </Badge>
                  <h3 className="font-bold text-foreground mb-2">Resultados</h3>
                  <p className="text-sm text-muted-foreground">
                    Estrategias que generan crecimiento
                  </p>
                </div>

                {/* Card 4 - Bottom Center */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 xl:w-64 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl delay-200">
                  <Badge variant="default" className="mb-3">
                    <Sparkles className="size-3" />
                    Personalizado
                  </Badge>
                  <h3 className="font-bold text-foreground mb-2">
                    Experiencia
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Soluciones personalizadas para tu negocio
                  </p>
                </div>

                {/* Central Glow Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-linear-to-br from-primary/30 to-secondary/30 blur-2xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
