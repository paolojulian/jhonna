import AppBentoBox from '@/components/AppBentoBox';
import AppTypography from '@/components/AppTypography';
import ArrowUpperRightIcon from '@/components/icons/ArrowUpperRightIcon';
import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type AppProjectCardProps = {
  title: string;
  subtitle: string;
  imageLink: string;
  link?: string;
  className?: string;
};

const AppProjectCard: FC<AppProjectCardProps> = ({
  imageLink,
  title,
  subtitle,
  link,
  className,
}) => {
  const component = (
    <AppBentoBox
      className={cn(
        'aspect-square w-full flex flex-col gap-4 px-6 pt-3 lg:pt-4 relative overflow-hidden group',
        'hover:outline-1 hover:outline-black transition-colors',
        className
      )}
    >
      <div className='z-10 absolute inset-0 p-4'>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <AppTypography variant={'heading-sm'}>{title}</AppTypography>
            <AppTypography
              className='leading-2.5 opacity-40 text-xs'
              variant={'heading-sm'}
            >
              {subtitle}
            </AppTypography>
          </div>
          {link ? (
            <div className='-mr-4 size-[38px] group-hover:bg-black group-hover:text-white transition-colors flex flex-item justify-center items-center rounded-full'>
              <ArrowUpperRightIcon />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
      <Image
        // className='group-hover:scale-[1.01] transition-transform'
        quality={90}
        alt={`Project - ${title}`}
        src={imageLink}
        fill
        objectFit='cover'
        objectPosition='center'
      />
    </AppBentoBox>
  );

  if (link) {
    return <Link href={link}>{component}</Link>;
  }

  return component;
};

export default AppProjectCard;
