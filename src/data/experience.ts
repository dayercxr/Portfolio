import { Icons } from "@/constants/icons.ts";
import { Technology } from "@/constants/technologies.ts";

interface ExperienceData {
  title: string;
  experience: ExperienceListData;
}

interface ExperienceListData {
  position: string;
  organization: string;
  startDate: string;
  endDate: string;
  scope: string[];
  status: boolean;
}

export const ExperienceData = {
  title: "Experience",
  experiences: [
    {
      position: "Software Developer",
      organization: "RSAF Agile Innovation Digital (RAiD)",
      role: "Internship",
      startDate: "March 2026",
      endDate: "July 2026",
      scope: [
        "Developed and Integrated aerial photogrammetry using React.js and external APIs into frontend architecture to improve cartography visualisation for users.",
        "Streamlined User experience by building custom interactive components and data displays using Material-UI (MUI), leading to improved data interpretability.",
        "Optimised and enhanced application security through shifting middleware and third party API integrations into server-side logic with Express.js.",
        "Engineered a new visualisation tool that handles coordinate transformations by incorporating and implementing geometric and trigonometric calculations into core functionality."
      ],
      technologies: [
        { name: Technology.REACT, icon: Icons.REACT },
        { name: Technology.MUI, icon: Icons.MUI },
        { name: Technology.EXPRESS, icon: Icons.EXPRESS },
        { name: Technology.NODEJS, icon: Icons.NODEJS }
      ],
      status: false
    }
  ]
};
