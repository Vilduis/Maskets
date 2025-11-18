import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Martínez",
    role: "Desarrollador Full Stack",
    image: "/team-member-1.jpg",
    bio: "Especialista en React, Next.js y Node.js con más de 5 años de experiencia creando aplicaciones escalables.",
    skills: ["React", "Next.js", "Node.js", "TypeScript"],
    github: "https://github.com/alex",
    linkedin: "https://linkedin.com/in/alex",
    email: "alex@maskets.com",
  },
  {
    id: 2,
    name: "Sofia Rodríguez",
    role: "Diseñadora UX/UI",
    image: "/team-member-2.jpg",
    bio: "Apasionada por crear experiencias de usuario excepcionales y diseños que convierten visitantes en clientes.",
    skills: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
    github: "https://github.com/sofia",
    linkedin: "https://linkedin.com/in/sofia",
    email: "sofia@maskets.com",
  },
  {
    id: 3,
    name: "Carlos López",
    role: "Desarrollador Backend",
    image: "/team-member-3.jpg",
    bio: "Experto en arquitectura de sistemas, bases de datos y APIs robustas que soportan millones de usuarios.",
    skills: ["Python", "PostgreSQL", "AWS", "Docker"],
    github: "https://github.com/carlos",
    linkedin: "https://linkedin.com/in/carlos",
    email: "carlos@maskets.com",
  },
];

const WorkTeam = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a los profesionales que hacen posible cada proyecto exitoso
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-5 sm:p-6">
                {/* Avatar */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-muted border-2 border-border group-hover:border-primary transition-colors">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80px, 96px"
                  />
                </div>

                {/* Name & Role */}
                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-muted-foreground text-center mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-3 sm:mb-4">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border">
                  {member.github && (
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors p-1 rounded-md hover:bg-accent/50"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  )}
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors p-1 rounded-md hover:bg-accent/50"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  )}
                  {member.email && (
                    <Link
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-secondary transition-colors p-1 rounded-md hover:bg-accent/50"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTeam;
