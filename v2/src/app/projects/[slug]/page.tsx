import AppTypography from '@/components/AppTypography';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container flex flex-col gap-10 pb-10'>
      <Link href='/' className='flex flex-row items-center gap-2 group text-red-500'>
        <ArrowLeftIcon className='pb-1 group-hover:-translate-x-2 transition-transform' />
        <AppTypography>Back</AppTypography>
      </Link>

      <div>
        <AppTypography as='h1' variant='heading-lg'>
          SKIN CARE ESSENTIALS
        </AppTypography>
        <AppTypography
          as='h2'
          variant='heading-lg'
          className='text-neutral-400 uppercase'
        >
          HAIR STUDIO, AESTHETIC CLINIC & clinical services
        </AppTypography>
      </div>

      <AppTypography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </AppTypography>

      <AppTypography variant='heading-sm'>
        London, United Kingdom @
        <a
          href='https://skincareessentials.co.uk'
          className='text-blue-500'
          target='_blank'
        >
          https://skincareessentials.co.uk
        </a>
      </AppTypography>

      <div className='grid grid-cols-3 gap-4'>
        <div className='aspect-square relative rounded-2xl overflow-hidden shadow-2xl'>
          <Image alt='SCE 1' src='/images/projects/sce/sce-1.png' fill />
        </div>
        <div className='aspect-square relative rounded-2xl overflow-hidden shadow-2xl'>
          <Image alt='SCE 1' src='/images/projects/sce/sce-2.png' fill />
        </div>
        <div className='aspect-square relative rounded-2xl overflow-hidden shadow-2xl'>
          <Image alt='SCE 1' src='/images/projects/sce/sce-3.png' fill />
        </div>
      </div>
    </div>
  );
}
