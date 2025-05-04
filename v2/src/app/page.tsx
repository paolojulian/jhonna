import AppBentoBox from '@/components/AppBentoBox';
import AppProjectCard from '@/components/AppProjectCard';
import AppTypography from '@/components/AppTypography';
import ArrowUpperRightIcon from '@/components/icons/ArrowUpperRightIcon';
import Image from 'next/image';

export default function Home() {
  return (
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
        imageLink='/images/projects/ccc.png'
        subtitle='HEALTHCARE SERVICES'
        title='CITY CARE COMPANIONS'
        link='https://citycarecompanions.co.uk'
      />

      <AppProjectCard
        imageLink='/images/projects/ovk.png'
        subtitle='INSPECTION GUIDELINES'
        title='OVK PLAN'
        link='https://citycarecompanions.co.uk'
      />

      <div className='flex flex-col gap-4 h-full'>
        <AppBentoBox className='flex flex-col gap-2 bg-linen p-6 h-1/2'>
          <AppTypography as='h2' variant={'heading-sm'}>
            ABOUT ME...
          </AppTypography>
          <AppTypography className='text-neutral-600'>
            I am an ambitious and dedicated UI/UX Designer with a strong passion
            for crafting intuitive and visually appealing digital experiences.
          </AppTypography>
        </AppBentoBox>
        <AppBentoBox className='flex-1 px-6 pt-6 space-y-4 bg-peach'>
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
              fill
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        </AppBentoBox>
      </div>

      {/* <!-- Row 3 --> */}
      <AppBentoBox className='aspect-square w-full' />
      <AppBentoBox className='aspect-square w-full' />
      <AppBentoBox className='row-span-2' />
      <AppBentoBox className='aspect-square w-full' />
      <AppBentoBox className='aspect-square w-full' />
    </div>
  );
}
