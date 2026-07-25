import type { FC } from "react";
import { NavbarData } from "@/data/navbar.ts";
import { Button } from "@/components/ui/button.tsx";
import { Icons } from "@/constants/icons.ts";

export const Navbar: FC = () => {
  const { title, github, linkedin, resumePath, resumeName } = NavbarData;

  return (
    <div className='sm:flex justify-between my-6 mx-auto md:max-w-2xl max-w-sm'>
      <h1 className='md:text-3xl text-center text-lg font-semibold my-5'>
        {title}
      </h1>

      <div className='flex items-center justify-center gap-2.5'>
        <Button
          className='border-none bg-zinc-600 hover:cursor-pointer'
          variant='outline'
          size='icon'
        >
          <a target='_blank' href={github}>
            <img src={Icons.GITHUB} />
          </a>
        </Button>
        <Button
          className='border-none bg-zinc-600 hover:cursor-pointer'
          variant='outline'
          size='icon'
        >
          <a target='_blank' href={linkedin}>
            <img src={Icons.LINKEDIN} />
          </a>
        </Button>
        <Button variant='outline' size='lg' className='hover:cursor-pointer'>
          <a href={resumePath} download={resumeName}>
            Resume
          </a>
        </Button>
      </div>
    </div>
  );
};
