import AppBentoBox from '@/components/AppBentoBox';
import cn from '@/utils/cn';
import Image from 'next/image';
import { FC } from 'react';

type TaglineCardProps = {
  className?: string;
};

const TaglineCard: FC<TaglineCardProps> = ({ className }) => {
  return (
    <AppBentoBox className={cn('relative bg-honeydew', className)}>
      <Image
        alt='Jhonna'
        src='/images/ui-ux-designer.png'
        className='object-left lg:object-center object-cover'
        fill
      />
    </AppBentoBox>
  );
};

export default TaglineCard;
