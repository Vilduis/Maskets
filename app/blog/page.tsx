import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export default function Blog() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-3 text-sm text-white">
            Blog
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Nuestro Blog
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Artículos, tips y notas sobre diseño, desarrollo.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Próximamente
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Todavía no hay blogs disponibles. Estará disponible más adelante.
          </p>
        </div>
      </section>
    </div>
  );
}
