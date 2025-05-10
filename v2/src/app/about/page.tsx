import CVCard from '@/app/_sections/CVCard';
import AboutMeCard from '@/components/AboutMeCard';
import AppBentoBox from '@/components/AppBentoBox';
import ProfilePictureCard from '@/components/ProfilePictureCard';
import TaglineCard from '@/components/TaglineCard';

export default function AboutPage() {
  return (
    <>
      {/* Desktop */}
      <div className='hidden lg:grid grid-cols-3 auto-rows-[1fr] gap-4 container'>
        {/* <!-- Row 1 --> */}
        <ProfilePictureCard />
        <TaglineCard className='col-span-2' />
        <AppBentoBox className='col-span-2 relative bg-neutral-100'></AppBentoBox>
        <div className='flex flex-col gap-4 h-full'>
          <AboutMeCard />
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
