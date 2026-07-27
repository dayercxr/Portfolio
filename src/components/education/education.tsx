import type { FC } from "react";
import { EducationData } from "@/data/education.ts";
import { Badge } from "@/components/ui/badge";
import { RiseUp } from "@/components/animations/riseUp.tsx";

export const Education: FC = () => {
  const { title, educations } = EducationData;

  const delay = 150;

  return (
    <div className='md:max-w-2xl max-w-md max-sm:w-xs mx-auto mt-25 mb-15'>
      <h1 className='text-3xl md:text-4xl max-md:text-center font-bold mb-10'>
        {title}
      </h1>

      <RiseUp delay={delay}>
        <ol className='relative border-l border-muted-foreground pl-6'>
          {educations.map((education) => (
            <li key={education.school} className='mb-10 last:mb-0'>
              <span className='absolute -left-1.75 mt-1.5 size-3 rounded-full border-2 border-background bg-sky-500' />
              <p className='text-sm font-mono font-bold text-sky-500'>
                {education.startDate} - {education.endDate}
              </p>
              <div className='flex items-center gap-2'>
                <h3 className='mt-1 text-lg font-semibold text-foreground'>
                  {education.course}
                </h3>
                {education.status && (
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
              <p className='text-sm font-semibold text-muted-foreground'>
                {education.school}
              </p>
            </li>
          ))}
        </ol>
      </RiseUp>
    </div>
  );
};
