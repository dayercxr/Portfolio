import { type TechnologyTypes, Technology } from "@/constants/technologies.ts";
import { type IconTypes, Icons } from "@/constants/icons.ts";

interface SkillsData {
  title: string;
  sections: Section[];
}

export interface Section {
  title: string;
  technologies: TechnologyData[];
}

export interface TechnologyData {
  name: TechnologyTypes;
  icon: IconTypes;
}

export const SkillsData: SkillsData = {
  title: "Skills",
  sections: [
    {
      title: "Frontend",
      technologies: [
        { name: Technology.REACT, icon: Icons.REACT },
        { name: Technology.TAILWIND, icon: Icons.TAILWIND },
        { name: Technology.REACT_QUERY, icon: Icons.REACT_QUERY },
        { name: Technology.NEXTJS, icon: Icons.NEXTJS },
        { name: Technology.ELECTRON, icon: Icons.ELECTRON }
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: Technology.NODEJS, icon: Icons.NODEJS },
        { name: Technology.EXPRESS, icon: Icons.EXPRESS },
        { name: Technology.DJANGO, icon: Icons.DJANGO },
        { name: Technology.FASTAPI, icon: Icons.FASTAPI },
        { name: Technology.POSTGRESQL, icon: Icons.POSTGRESQL },
        { name: Technology.PRISMA, icon: Icons.PRISMA },
        { name: Technology.DRIZZLE, icon: Icons.DRIZZLE },
        { name: Technology.DOCKER, icon: Icons.DOCKER }
      ]
    },
    {
      title: "Languages",
      technologies: [
        { name: Technology.JAVASCRIPT, icon: Icons.JAVASCRIPT },
        { name: Technology.TYPESCRIPT, icon: Icons.TYPESCRIPT },
        { name: Technology.PYTHON, icon: Icons.PYTHON },
        { name: Technology.JAVA, icon: Icons.JAVA }
      ]
    }
  ]
};
