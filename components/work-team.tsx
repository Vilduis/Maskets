import { teamMembers } from "@/constants/team";
import TeamMemberCard from "./team/team-member-card";

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
            <TeamMemberCard
              key={member.id}
              member={member}
              variant="vertical"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTeam;
