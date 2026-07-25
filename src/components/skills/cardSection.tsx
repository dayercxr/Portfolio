import type { FC } from "react";
import type { Section } from "@/data/skills.ts";
import { RiseUp } from "@/components/animations/riseUp.tsx";
import { SkillCard } from "@/components/skills/card.tsx";

interface SkillsCardProps {
  selectedSection: Section;
  initialDelay: number;
}

export const SkillsCardSection: FC<SkillsCardProps> = ({
  selectedSection,
  initialDelay
}) => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-2 gap-4 mx-2.5'>
      {selectedSection.technologies.map((technology, index) => (
        <RiseUp delay={initialDelay + (index % 3) * 120}>
          <SkillCard
            key={index}
            icon={technology.icon}
            name={technology.name}
          />
        </RiseUp>
      ))}
    </div>
  );
};
