import AppBentoBox from '@/components/AppBentoBox';
import AppTypography from '@/components/AppTypography';
import { FC } from 'react';

type AboutMeCardProps = object;

const AboutMeCard: FC<AboutMeCardProps> = () => {
  return (
    <AppBentoBox className='flex flex-col gap-2 bg-linen p-3 xl:p-4 lg:p-6 h-full lg:h-1/2'>
      <AppTypography as='h2' variant={'heading-sm'}>
        ABOUT ME...
      </AppTypography>
      <AppTypography className='text-neutral-600 text-sm xl:text-base'>
        {`With 1+ year of experience creating clean,
              user-friendly designs that are easy to implement by developers and improve real
              user flows.`}
      </AppTypography>
    </AppBentoBox>
  );
};

export default AboutMeCard;
