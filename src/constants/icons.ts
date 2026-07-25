import BetterAuth from "@/assets/icons/better-auth.svg";
import Docker from "@/assets/icons/docker.svg";
import Django from "@/assets/icons/django.svg";
import Drizzle from "@/assets/icons/drizzle.png";
import Electron from "@/assets/icons/electron.svg";
import Express from "@/assets/icons/express.svg";
import ExternalLink from "@/assets/logos/external_link.svg";
import FastAPI from "@/assets/icons/fastapi.svg";
import Java from "@/assets/icons/java.svg";
import Javascript from "@/assets/icons/javascript.svg";
import MUI from "@/assets/icons/mui.svg";
import NextJS from "@/assets/icons/nextjs.svg";
import NodeJS from "@/assets/icons/nodejs.svg";
import PostgreSQL from "@/assets/icons/postgresql.svg";
import Prisma from "@/assets/icons/prisma.svg";
import Python from "@/assets/icons/python.svg";
import RAiD from "@/assets/logos/raid.svg";
import React from "@/assets/icons/react.svg";
import ReactQuery from "@/assets/icons/react_query.svg";
import Spring from "@/assets/icons/spring.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import Typescript from "@/assets/icons/typescript.svg";
import NUS from "@/assets/logos/nus.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Github from "@/assets/icons/github.svg";

export const Icons = {
  BETTER_AUTH: BetterAuth,
  DOCKER: Docker,
  DJANGO: Django,
  DRIZZLE: Drizzle,
  ELECTRON: Electron,
  EXPRESS: Express,
  EXTERNAL_LINK: ExternalLink,
  FASTAPI: FastAPI,
  JAVA: Java,
  JAVASCRIPT: Javascript,
  MUI: MUI,
  NEXTJS: NextJS,
  NODEJS: NodeJS,
  POSTGRESQL: PostgreSQL,
  PRISMA: Prisma,
  PYTHON: Python,
  RAID: RAiD,
  REACT: React,
  REACT_QUERY: ReactQuery,
  SPRING: Spring,
  TAILWIND: Tailwind,
  TYPESCRIPT: Typescript,
  NUS: NUS,
  LINKEDIN: Linkedin,
  GITHUB: Github
} as const;

export type IconTypes = (typeof Icons)[keyof typeof Icons];
