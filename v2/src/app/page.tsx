import CVCard from '@/app/_sections/CVCard';
import AboutMeCard from '@/components/AboutMeCard';
import AppProjectCard from '@/components/AppProjectCard';
import ContactCard from '@/components/ContactCard';
import ProfilePictureCard from '@/components/ProfilePictureCard';
import TaglineCard from '@/components/TaglineCard';
import cn from '@/utils/cn';

const projectCards = [
  {
    imageLink: '/images/projects/sce.png',
    subtitle: 'BEAUTY PRODUCTS AND SERVICES',
    title: 'SKIN CARE ESSENTIALS',
    link: '/projects/sce',
  },
  {
    imageLink: '/images/projects/ovk.png',
    subtitle: 'INSPECTION GUIDELINES',
    title: 'OVK PLAN',
    link: '/projects/ovk',
  },
  {
    imageLink: '/images/projects/ccc.png',
    subtitle: 'HEALTHCARE SERVICES',
    title: 'CITY CARE COMPANIONS',
    link: '/projects/ccc',
  },
  {
    imageLink: '/images/projects/beauty.png',
    subtitle: 'PERSONAL PROJECT',
    title: 'BEAUTY PRODUCTS',
    link: '/projects/beauty',
  },
  {
    imageLink: '/images/projects/applete.png',
    subtitle: 'SPORTS EVENT BOOKING',
    title: 'APPLETE',
    link: '/projects/applete',
  },
  {
    imageLink: '/images/projects/hotel-booking.png',
    subtitle: 'BOOKING & RESERVATION',
    title: 'HOTEL BOOKING APP',
    link: '/projects/hotel-booking',
  },
];

export default function Home() {
  return (
    <>
      {/* Desktop */}
      <div
        className={cn('hidden lg:grid', 'grid-cols-3', 'gap-4', 'container')}
      >
        {/* <!-- Row 1 --> */}
        <ProfilePictureCard />
        <TaglineCard className='col-span-2' />

        {/* <!-- Row 2 --> */}
        <AppProjectCard {...projectCards[0]} />
        <AppProjectCard {...projectCards[1]} />

        <div className='flex flex-col gap-4 h-full'>
          <AboutMeCard />
          <CVCard />
        </div>

        {/* <!-- Row 3 --> */}
        <AppProjectCard {...projectCards[2]} />
        <AppProjectCard {...projectCards[3]} />

        <ContactCard />

        <AppProjectCard {...projectCards[4]} />
        <AppProjectCard {...projectCards[5]} />
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
          <div className={'grid grid-cols-2 gap-3'}>
            {projectCards.map((projectCard) => (
              <AppProjectCard
                key={projectCard.title}
                {...projectCard}
                className='min-w-[40vw] snap-start shrink-0'
              />
            ))}
          </div>
          <ContactCard />
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
        <div className='mt-3 w-screen'>
          <div
            className={cn(
              'flex flex-row overflow-x-auto gap-3',
              'no-scroll scroll-smooth px-3 scroll-px-3 snap-x snap-mandatory'
            )}
            style={{
              scrollPaddingInline: '2rem',
            }}
          >
            {projectCards.map((projectCard) => (
              <AppProjectCard
                key={projectCard.title}
                {...projectCard}
                className='min-w-[75vw] md:min-w-[60vw] snap-start shrink-0'
              />
            ))}
          </div>
        </div>
        <div className='mt-3 container'>
          <ContactCard />
        </div>
      </div>
    </>
  );
}
