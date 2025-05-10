import CVCard from '@/app/_sections/CVCard';
import AboutMeCard from '@/components/AboutMeCard';
import AppBentoBox from '@/components/AppBentoBox';
import AppTypography from '@/components/AppTypography';
import ProfilePictureCard from '@/components/ProfilePictureCard';
import TaglineCard from '@/components/TaglineCard';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* Desktop */}
      <div className='hidden lg:grid grid-cols-3 auto-rows-[1fr] gap-4 container'>
        {/* <!-- Row 1 --> */}
        <AppBentoBox className='aspect-square w-full relative bg-linen'>
          <Image
            alt='Jhonna'
            src='/images/grace.png'
            fill
            objectPosition='center'
          />
        </AppBentoBox>
        <AppBentoBox className='col-span-2 relative bg-honeydew'>
          <Image
            alt='Jhonna'
            src='/images/ui-ux-designer.png'
            fill
            objectPosition='center'
          />
        </AppBentoBox>
        <AppBentoBox className='col-span-2 relative bg-neutral-100'></AppBentoBox>
        <div className='flex flex-col gap-4 h-full'>
          <AppBentoBox className='flex flex-col gap-2 bg-linen p-6 h-1/2'>
            <AppTypography as='h2' variant={'heading-sm'}>
              ABOUT ME...
            </AppTypography>
            <AppTypography className='text-neutral-600'>
              I am an ambitious and dedicated UI/UX Designer with a strong
              passion for crafting intuitive and visually appealing digital
              experiences.
            </AppTypography>
          </AppBentoBox>
          <CVCard />
        </div>
      </div>

      {/* Tablet */}
      <div className='hidden md:block lg:hidden'>
        <div className='grid grid-cols-1 gap-3 container'>
          <div className='grid grid-cols-3 gap-3'>
            <ProfilePictureCard />
            <TaglineCard className='col-span-2' />
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <AboutMeCard />
            <CVCard />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='block md:hidden'>
        <div className='grid grid-cols-1 gap-3 container'>
          <div className='grid grid-cols-2 gap-3'>
            <ProfilePictureCard />
            <TaglineCard className='col-span-1' />
          </div>

          <div className='flex flex-col gap-3'>
            <AboutMeCard />
            <CVCard />
          </div>
        </div>
      </div>
    </>
  );
}
