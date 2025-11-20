import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/constants/team";
import TeamMemberCard from "./team/team-member-card";

const Equipment = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-4 text-sm text-white">
            Nuestro Equipo
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Conoce a nuestro equipo
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales apasionados que hacen posible cada proyecto exitoso
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              variant="horizontal"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
