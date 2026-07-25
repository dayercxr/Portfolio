import { Technology } from "@/constants/technologies.ts";
import { type TechnologyData } from "@/data/skills";
import { Icons, type IconTypes } from "@/constants/icons.ts";
import { Images } from "@/constants/images";

interface ProjectData {
  projectName: string;
  description: string;
  image: string;
  technologies: TechnologyData[];
  references: ReferenceData[];
}

interface ReferenceData {
  link: string;
  icon: IconTypes;
}

interface ProjectsData {
  title: string;
  projects: ProjectData[];
}

export const ProjectsData = {
  title: "Projects",
  projects: [
    {
      projectName: "Sprout",
      description: "Light-weight web application for Cryptocurrency Analysis.",
      image: Images.SPROUT_PREVIEW,
      technologies: [
        { name: Technology.REACT, icon: Icons.REACT },
        { name: Technology.NEXTJS, icon: Icons.NEXTJS },
        { name: Technology.BETTER_AUTH, icon: Icons.BETTER_AUTH },
        { name: Technology.POSTGRESQL, icon: Icons.POSTGRESQL },
        { name: Technology.DRIZZLE, icon: Icons.DRIZZLE },
        { name: Technology.MUI, icon: Icons.MUI }
      ],
      references: [
        {
          link: "https://github.com/dayercher005/Sprout",
          icon: Icons.GITHUB,
          label: "Repository"
        },
        {
          link: "https://sprout-jade.vercel.app",
          icon: Icons.EXTERNAL_LINK,
          label: "Live Preview"
        }
      ],
      status: "In Progress"
    }
  ]
};
