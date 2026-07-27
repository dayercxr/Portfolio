import type { FC } from "react";
import { ProjectsData } from "@/data/projects";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from "@/components/ui/hover-card";

export const Projects: FC = () => {
  const { title, projects } = ProjectsData;

  return (
    <>
      <div className='md:max-w-2xl max-w-md max-sm:w-xs mx-auto mt-25 mb-15'>
        <h1 className='text-3xl md:text-4xl max-md:text-center font-bold mb-10 '>
          {title}
        </h1>
      </div>
      <div className='max-lg:grid-cols-3'>
        {projects.map((project) => (
          <Card className='relative mx-auto max-w-sm py-0 bg-neutral-800 overflow-hidden transition-all duration-300 border-none border-amber-50 group hover:bg-neutral-700'>
            <div className='overflow-hidden rounded-t-xl max-h-100'>
              <img
                src={project.image}
                alt='Sprout Preview Image'
                className='rounded-t-lg z-20 aspect-video h-full w-2xl object-cover transition-all duration-300 group-hover:scale-110'
              />
            </div>
            <CardHeader>
              <CardAction className='gap-5'>
                <div className='flex gap-1 items-center'>
                  {project.references.map((reference) => (
                    <HoverCard openDelay={10} closeDelay={75}>
                      <HoverCardTrigger asChild>
                        <a href={reference.link}>
                          <img
                            className='size-8 hover:scale-110 transition'
                            src={reference.icon}
                          />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <p className='font-medium text-xs'>{reference.label}</p>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardAction>
              <CardTitle className='font-bold text-neutral-200 text-2xl max-lg:text-xl'>
                {project.projectName}
              </CardTitle>
              <CardDescription className='text-neutral-400'>
                {project.description}
              </CardDescription>
              <div className='grid w-60 max-w-xs grid-cols-5 gap-y-3 pt-3 pb-5.5'>
                {project.technologies.map((technology) => (
                  <HoverCard openDelay={10} closeDelay={75}>
                    <HoverCardTrigger asChild>
                      <img
                        className='size-7.5 hover:scale-110 transition'
                        src={technology.icon}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className='font-medium text-xs'>{technology.name}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};
