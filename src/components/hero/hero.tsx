import type { FC } from "react";
import { HeroData } from "@/data/hero.ts";
import { TextMorph } from "@/components/animations/textMorph";
import { RiseUp } from "@/components/animations/riseUp.tsx";

export const Hero: FC = () => {
  const { firstName, lastName, description, professions } = HeroData;

  const delay = 200;

  return (
    <div>
      <div className='md:max-w-2xl text-center max-w-md mx-auto md:flex justify-between items-center mt-20'>
        <h1 className='text-2xl md:text-4xl font-bold max-md:text-center'>
          {firstName} {lastName}
        </h1>
        <RiseUp delay={delay}>
          <TextMorph
            className='text-md md:text-2xl font-bold text-indigo-400 justify-center'
            words={professions}
          />
        </RiseUp>
      </div>

      <RiseUp delay={delay * 2}>
        <div className='mt-7 px-2 max-sm:text-center mx-auto md:max-w-2xl max-w-md'>
          {description.map((text, index) => (
            <p className='font-medium text-md py-2' key={index}>
              {text}
            </p>
          ))}
        </div>
      </RiseUp>
    </div>
  );
};
