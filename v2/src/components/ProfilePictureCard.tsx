import AppBentoBox from '@/components/AppBentoBox';
import Image from 'next/image';
import { FC } from 'react';

type ProfilePictureCardProps = object;

const ProfilePictureCard: FC<ProfilePictureCardProps> = () => {
  return (
    <AppBentoBox className='aspect-square w-full relative bg-linen'>
      <Image
        alt='Jhonna'
        src='/images/grace.png'
        fill
        objectPosition='center'
      />
    </AppBentoBox>
  );
};

export default ProfilePictureCard;
