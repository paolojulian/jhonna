import AppBentoBox from '@/components/AppBentoBox';
import AppTypography from '@/components/AppTypography';
import ArrowUpperRightIcon from '@/components/icons/ArrowUpperRightIcon';
import cn from '@/utils/cn';
import Image from 'next/image';
import { FC } from 'react';

type CVCardProps = object;

const CVCard: FC<CVCardProps> = () => {
  return (
    <a
      href='/assets/Jhonna.pdf'
      className='flex-1'
      download='Jhonna Mae Gines.pdf'
    >
      <AppBentoBox
        // className='flex-1 px-6 pt-6 space-y-4 bg-peach'
        className={cn(
          'w-full h-full flex-1 flex flex-col gap-4 relative overflow-hidden group',
          'px-3 lg:px-6 pt-3 lg:pt-4',
          'hover:outline-1 hover:outline-black transition-colors',
          'bg-peach'
        )}
      >
        <div className='flex flex-row justify-between items-center'>
          <div>
            <AppTypography as='h2' variant={'heading-sm'}>
              CURRICULUM VITAE
            </AppTypography>
          </div>
          <ArrowUpperRightIcon />
        </div>
        <div className='relative h-full w-full'>
          <Image
            alt='Jhonna'
            src='/images/cv.png'
            className='object-left lg:object-center object-cover'
            fill
          />
        </div>
      </AppBentoBox>
    </a>
  );
};

export default CVCard;
