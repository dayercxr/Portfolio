import { type FC, useState } from "react";
import { SkillsData } from "@/data/skills.ts";
import { SkillsCardSection } from "@/components/skills/cardSection";
import { SkillsNavbar } from "@/components/skills/navbar.tsx";
import { RiseUp } from "@/components/animations/riseUp.tsx";

export const Skills: FC = () => {
  const [sectionIndex, setSectionIndex] = useState<number>(0);

  const { title, sections } = SkillsData;

  const initialDelay = 150;

  return (
    <div className='md:max-w-2xl min-h-80 max-w-md mx-auto my-25'>
      <h1 className='text-3xl md:text-4xl max-md:text-center font-bold'>
        {title}
      </h1>
      <RiseUp>
        <SkillsNavbar sections={sections} setSectionIndex={setSectionIndex} />
      </RiseUp>
      <SkillsCardSection
        selectedSection={sections[sectionIndex]}
        initialDelay={initialDelay}
      />
    </div>
  );
};
