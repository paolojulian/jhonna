import AppProjectCard from '@/components/AppProjectCard';

export default function ProjectsPage() {
  return (
    <div className='grid grid-cols-3 auto-rows-[1fr] gap-4 container'>
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
  );
}
