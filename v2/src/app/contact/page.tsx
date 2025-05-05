import AppBentoBox from '@/components/AppBentoBox';
import ContactCard from '@/components/ContactCard';

export default function ContactPage() {
  return (
    <div className='grid grid-cols-3 auto-rows-[1fr] gap-4 container'>
      <AppBentoBox className='row-span-2 relative bg-neutral-100'></AppBentoBox>
      <ContactCard />
      <AppBentoBox className='row-span-2 relative bg-neutral-100'></AppBentoBox>
    </div>
  );
}
