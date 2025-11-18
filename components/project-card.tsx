import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay on hover - usando primary de Maskets */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 z-10" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags - usando Badge de shadcn/ui con secondary de Maskets */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-medium text-white"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links - usando Button de shadcn/ui */}
        <div className="flex gap-3">
          {demoUrl && (
            <Button
              asChild
              variant="default"
              size="sm"
              className="flex-1 hover:shadow-md hover:shadow-primary/20"
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Demo
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Código
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
