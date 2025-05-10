import AppTypography from '@/components/AppTypography';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import Line from '@/components/Line';
import { FC } from 'react';

type LandingSectionProps = object;

const LandingSection: FC<LandingSectionProps> = () => {
  return (
    <div className='px-6 py-12 flex flex-col lg:flex-row gap-10'>
      {/* General About */}
      <div className='space-y-10'>
        {/* Title */}
        <div className='space-y-1'>
          <h3 className='flex flex-row items-center gap-2'>
            <Line aria-label='Hyphen' />
            <AppTypography
              as='span'
              className='uppercase text-primary'
              variant={'heading'}
            >
              ABOUT ME
            </AppTypography>
          </h3>
          <AppTypography as='h2' variant='heading-lg'>
            WHO AM I?
          </AppTypography>
        </div>

        {/* Description */}
        <div className='space-y-2'>
          <AppTypography>
            {`Hello, I'm Jhonna Gines, but you can call me Grace.`}
            <br />
            <br />
            {`I'm a UI/UX designer with almost 2 years of experience crafting intuitive, user-friendly interfaces that strike a perfect balance between aesthetics and functionality. Beyond design, I'm a cat lover and a creative spirit who finds joy in cooking, dancing, drawing, and doing makeup. Calming music plays a big role in my creative process, helping me stay focused and inspired, especially when working on detailed design projects.`}
          </AppTypography>
        </div>

        {/* Follow me */}
        <div className='flex items-center justify-between'>
          <AppTypography className='uppercase' variant='heading'>
            FOLLOW ME
          </AppTypography>
          <div className='flex flex-row gap-4'>
            <a className='size-12 bg-black flex items-center justify-center'>
              <FacebookIcon />
            </a>
            <a className='size-12 bg-black flex items-center justify-center'>
              <InstagramIcon />
            </a>
            <a className='size-12 bg-black flex items-center justify-center'>
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div>
        <AppTypography className='uppercase' variant='heading'>
          CERTIFICATION COURSES
        </AppTypography>
      </div>
    </div>
  );
};

export default LandingSection;
