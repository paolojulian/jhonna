import AppBentoBox from '@/components/AppBentoBox';
import ContactCard from '@/components/ContactCard';

export default function ContactPage() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 container'>
      <AppBentoBox className='hidden md:block row-span-2 relative bg-neutral-100'></AppBentoBox>
      <ContactCard className='col-span-3' />
      <AppBentoBox className='hidden md:block row-span-2 relative bg-neutral-100'></AppBentoBox>
    </div>
  );
}
