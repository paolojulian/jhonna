import CVCard from '@/app/_sections/CVCard';
import AppBentoBox from '@/components/AppBentoBox';
import AppProjectCard from '@/components/AppProjectCard';
import AppTypography from '@/components/AppTypography';
import ContactCard from '@/components/ContactCard';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-3 auto-rows-[1fr] gap-4 container'>
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

        {/* <!-- Row 2 --> */}
        <AppProjectCard
          imageLink='/images/projects/sce.png'
          subtitle='BEAUTY PRODUCTS AND SERVICES'
          title='SKIN CARE ESSENTIALS'
          link='/projects/sce'
        />

        <AppProjectCard
          imageLink='/images/projects/ovk.png'
          subtitle='INSPECTION GUIDELINES'
          title='OVK PLAN'
          link='/projects/ovk'
        />

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

        {/* <!-- Row 3 --> */}
        <AppProjectCard
          imageLink='/images/projects/ccc.png'
          subtitle='HEALTHCARE SERVICES'
          title='CITY CARE COMPANIONS'
          link='/projects/ccc'
        />

        <AppProjectCard
          imageLink='/images/projects/beauty.png'
          subtitle='PERSONAL PROJECT'
          title='BEAUTY PRODUCTS'
          link='/projects/beauty'
        />

        <ContactCard />

        <AppProjectCard
          imageLink='/images/projects/applete.png'
          subtitle='SPORTS EVENT BOOKING'
          title='APPLETE'
          link='/projects/applete'
        />

        <AppProjectCard
          imageLink='/images/projects/hotel-booking.png'
          subtitle='BOOKING & RESERVATION'
          title='HOTEL BOOKING APP'
          link='/projects/hotel-booking'
        />
      </div>
    </>
  );
}
