import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: "vertical" | "horizontal";
}

const TeamMemberCard = ({ member, variant = "vertical" }: TeamMemberCardProps) => {
  if (variant === "horizontal") {
    return (
      <div className="group relative bg-background border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Image */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-28 md:h-28 rounded-lg overflow-hidden bg-muted border-2 border-border group-hover:border-primary transition-colors shrink-0">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={`Foto de ${member.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 96px, 128px"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-primary font-medium">
                {member.role}
              </p>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {member.bio}
            </p>
            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {member.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs sm:text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-3 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border md:pl-6">
            {member.github && (
              <Link
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-primary/10"
                aria-label={`GitHub de ${member.name}`}
              >
                <Github className="w-5 h-5" />
              </Link>
            )}
            {member.linkedin && (
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-primary/10"
                aria-label={`LinkedIn de ${member.name}`}
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            )}
            {member.email && (
              <Link
                href={`mailto:${member.email}`}
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-primary/10"
                aria-label={`Email de ${member.name}`}
              >
                <Mail className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Vertical variant (default)
  return (
    <Card className="group hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="p-5 sm:p-6">
        {/* Avatar */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-muted border-2 border-border group-hover:border-primary transition-colors">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={`Foto de ${member.name}`}
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
  );
};

export default TeamMemberCard;

