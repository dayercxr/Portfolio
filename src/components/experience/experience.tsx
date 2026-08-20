import type { FC } from "react";
import { ExperienceData } from "@/data/experience.ts";
import { RiseUp } from "@/components/animations/riseUp.tsx";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

export const Experience: FC = () => {
  const { title, experiences } = ExperienceData;

  return (
    <div className='md:max-w-2xl max-w-md max-sm:w-xs mx-auto mt-25 mb-15'>
      <h1 className='text-3xl md:text-4xl max-md:text-center font-bold mb-10'>
        {title}
      </h1>

      <RiseUp delay={150}>
        <ol className='relative border-l border-muted-foreground pl-7.5'>
          {experiences.map((experience) => (
            <li key={experience.organization} className='mb-10 last:mb-0'>
              <span className='absolute -left-1.75 mt-1.5 size-3 rounded-full border-2 border-background bg-sky-500' />
              <p className='text-sm font-mono font-bold text-sky-500'>
                {experience.startDate} - {experience.endDate}
              </p>
              <div className='flex items-center gap-2'>
                <h3 className='mt-1 text-lg font-semibold text-foreground'>
                  {experience.position}
                </h3>
                {experience.status && (
                  <Badge
                    variant='secondary'
                    className='bg-green-950 text-green-300 max-sm:my-1'
                  >
                    <span className='relative flex size-2'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
                      <span className='relative inline-flex size-2 rounded-full bg-green-500'></span>
                    </span>
                    Present
                  </Badge>
                )}
              </div>
              <p className='text-sm text-muted-foreground font-semibold'>
                {experience.organization} • {experience.role}
              </p>
              <ul className='list-disc pb-6.5 mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-foreground'>
                {experience.scope.map((scope) => (
                  <li className='ml-5 pb-1.5 font-medium italic'>{scope}</li>
                ))}
              </ul>

              <div className='flex gap-4'>
                {experience.technologies.map((technology) => (
                  <HoverCard openDelay={10} closeDelay={75}>
                    <HoverCardTrigger asChild>
                      <img
                        className='size-7.5 hover:scale-110 transition'
                        src={technology.icon}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className='font-medium text-sm'>{technology.name}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </RiseUp>
    </div>
  );
};
