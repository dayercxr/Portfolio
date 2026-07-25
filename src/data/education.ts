interface EducationListData {
  title: string;
  educations: EducationData[];
}

interface EducationData {
  school: string;
  course: string;
  startDate: string;
  endDate: string;
  status: boolean;
}

export const EducationData: EducationListData = {
  title: "Education",
  educations: [
    {
      school: "National University of Singapore (NUS)",
      course: "Bachelor of Computing, Computer Science",
      startDate: "July 2026",
      endDate: "July 2030",
      status: true
    },
    {
      school: "Dunman High School",
      course: "Singapore-Cambridge GCE A-Level",
      startDate: "February 2022",
      endDate: "November 2023",
      status: false
    }
  ]
};
