import type { FC } from "react";
import type { Section } from "@/data/skills.ts";
import { ButtonGroup } from "@/components/ui/button-group.tsx";
import { Button } from "@/components/ui/button.tsx";

interface SkillsNavbarProps {
  sections: Section[];
  setSectionIndex: (index: number) => void;
}

export const SkillsNavbar: FC<SkillsNavbarProps> = ({
  sections,
  setSectionIndex
}) => {
  return (
    <div className='flex justify-center mt-7 mb-15'>
      <ButtonGroup>
        {sections.map((section, index) => (
          <Button
            key={index}
            variant='outline'
            size='lg'
            onClick={() => setSectionIndex(index)}
            className='hover:cursor-pointer'
          >
            {section.title}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
