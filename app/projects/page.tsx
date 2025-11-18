"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma de tienda en línea con carrito de compras, pagos seguros y panel de administración completo.",
    image: "/modern-ecommerce-platform-interface-design.jpg",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "Dashboard analítico con gráficos en tiempo real, gestión de usuarios y reportes automáticos personalizables.",
    image: "/analytics-dashboard.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    demoUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/example/dashboard",
  },
  {
    id: 3,
    title: "Mobile App",
    description:
      "Aplicación móvil nativa con autenticación, notificaciones push y sincronización en tiempo real.",
    image: "/modern-mobile-app-interface.png",
    tags: ["React Native", "Firebase", "Redux"],
    demoUrl: "https://example.com/mobile",
    githubUrl: "https://github.com/example/mobile",
  },
  {
    id: 4,
    title: "AI Chatbot",
    description:
      "Chatbot inteligente con procesamiento de lenguaje natural y capacidad de aprendizaje automático avanzado.",
    image: "/ai-chatbot-conversation-interface.jpg",
    tags: ["Python", "OpenAI", "WebSocket"],
    demoUrl: "https://example.com/chatbot",
    githubUrl: "https://github.com/example/chatbot",
  },
  {
    id: 5,
    title: "Content Management System",
    description:
      "Sistema de gestión de contenidos profesional con editor visual, versionado y colaboración en tiempo real.",
    image: "/cms-content-management-system-interface.jpg",
    tags: ["Vue.js", "Laravel", "MySQL"],
    demoUrl: "https://example.com/cms",
    githubUrl: "https://github.com/example/cms",
  },
  {
    id: 6,
    title: "Design System",
    description:
      "Sistema de diseño completo con componentes reutilizables, documentación y guías de uso para equipos.",
    image: "/design-system-component-library.png",
    tags: ["Storybook", "React", "Figma"],
    demoUrl: "https://example.com/design-system",
    githubUrl: "https://github.com/example/design-system",
  },
  {
    id: 7,
    title: "E-Learning Platform",
    description:
      "Plataforma educativa con cursos en línea, evaluaciones interactivas y seguimiento de progreso estudiantil.",
    image: "/e-learning-platform.jpg",
    tags: ["Next.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com/elearning",
    githubUrl: "https://github.com/example/elearning",
  },
  {
    id: 8,
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con colaboración en equipo, notificaciones y análisis de productividad.",
    image: "/task-management-app.png",
    tags: ["React", "Node.js", "Socket.io"],
    demoUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/example/tasks",
  },
  {
    id: 9,
    title: "Real Estate Platform",
    description:
      "Plataforma inmobiliaria con búsqueda avanzada, tours virtuales y gestión de propiedades.",
    image: "/real-estate-platform.jpg",
    tags: ["Vue.js", "PostgreSQL", "Mapbox"],
    demoUrl: "https://example.com/realestate",
    githubUrl: "https://github.com/example/realestate",
  },
  {
    id: 10,
    title: "Healthcare Management",
    description:
      "Sistema de gestión hospitalaria con historiales médicos, citas y telemedicina integrada.",
    image: "/healthcare-management.jpg",
    tags: ["React", "Python", "PostgreSQL"],
    demoUrl: "https://example.com/healthcare",
    githubUrl: "https://github.com/example/healthcare",
  },
  {
    id: 11,
    title: "Social Media Analytics",
    description:
      "Herramienta de análisis de redes sociales con métricas en tiempo real y reportes personalizados.",
    image: "/social-media-analytics.png",
    tags: ["Next.js", "TypeScript", "Redis"],
    demoUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/example/analytics",
  },
  {
    id: 12,
    title: "Food Delivery App",
    description:
      "Aplicación de delivery de comida con seguimiento en tiempo real, pagos y sistema de reseñas.",
    image: "/food-delivery-app.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
    demoUrl: "https://example.com/food",
    githubUrl: "https://github.com/example/food",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Proyectos Realizados
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre nuestro portafolio de proyectos exitosos, desde plataformas
            digitales hasta aplicaciones innovadoras.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      handlePageChange(currentPage - 1);
                    }
                  }}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                }
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      handlePageChange(currentPage + 1);
                    }
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
}
