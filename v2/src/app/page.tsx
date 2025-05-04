import AppBentoBox from '@/components/AppBentoBox';

export default function Home() {
  return (
    <div className='grid grid-cols-3 gap-4 container'>
      {/* <!-- Row 1 --> */}
      <AppBentoBox className='aspect-square w-full' />
      <AppBentoBox className='col-span-2' />

      {/* <!-- Row 2 --> */}
      <AppBentoBox className='aspect-square w-full' />
      <AppBentoBox className='aspect-square w-full' />
      <div className='grid grid-cols-1 gap-4'>
        <AppBentoBox />
        <AppBentoBox />
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
