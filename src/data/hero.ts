interface HeroData {
  firstName: string;
  lastName: string;
  description: string[];
  linkedin: string;
  github: string;
  resume: string;
  professions: string[];
}

export const HeroData: HeroData = {
  firstName: "Dayer",
  lastName: "Cher",
  description: [
    "Hi, I'm Dayer. I'm a Computer Science undergraduate at studying at National University of Singapore (NUS).",
    "I'm eager to apply my growing technical skills. Whether its through contributing to collaborative projects, open-source initiatives or early internship/mentorship opportunities, I enjoy turning abstract concepts into functional software!",
    "During my free time, I'm enjoy spending my weekends climbing in a bouldering gym!"
  ],
  linkedin: "https://www.linkedin.com/in/dayer-cher-9a9a14231/",
  github: "https://github.com/dayercher005",
  resume: "",
  professions: ["Undergraduate", "Software Developer"]
};
