import type { FC } from "react";
import { RiseUp } from "@/components/animations/riseUp.tsx";

interface SkillCardProps {
  key: number;
  icon: string;
  name: string;
}

export const SkillCard: FC<SkillCardProps> = ({ key, icon, name }) => {
  return (
    <RiseUp>
      <div
        key={key}
        className='bg-[linear-gradient(340deg,hsla(0,0%,20%,.15),hsla(200,10%,90%,.35))] 
            rounded-2xl items-center gap-2.5 flex sm:p-4 p-2.5'
      >
        <img src={icon} className='size-8' />
        <h1 className='font-semibold md:text-base text-xs'>{name}</h1>
      </div>
    </RiseUp>
  );
};
