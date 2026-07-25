export const Technology = {
  BETTER_AUTH: "Better Auth",
  DOCKER: "Docker",
  DJANGO: "Django",
  DRIZZLE: "Drizzle",
  ELECTRON: "Electron",
  EXPRESS: "Express.js",
  FASTAPI: "FastAPI",
  JAVA: "Java",
  JAVASCRIPT: "Javascript",
  MUI: "Material UI",
  NEXTJS: "Next.js",
  NODEJS: "Node.js",
  POSTGRESQL: "PostgreSQL",
  PRISMA: "Prisma",
  PYTHON: "Python",
  REACT: "React",
  REACT_QUERY: "React Query",
  SPRING: "Spring",
  TAILWIND: "Tailwind",
  TYPESCRIPT: "Typescript"
} as const;

export type TechnologyTypes = (typeof Technology)[keyof typeof Technology];
