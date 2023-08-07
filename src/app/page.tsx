import Stack from '@/_components/layouts/stack';
import HeroSection from './_components/hero';

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id='about z-10'>
        <div className='bg-white w-full p-12'>
          <Stack className='space-y-8 max-w-screen-lg'>
            <h2 className='font-inconsolata text-6xl font-medium'>about</h2>
            <p className='text-2xl'>
              <span className='text-accent font-bold'>Jhonna</span> is an
              ambitious and dedicated{' '}
              <span className='text-accent font-bold'>UI/UX Designer</span> with
              a strong passion for crafting intuitive and visually appealing
              digital experiences. While she may not have professional work
              experience, She have invested her time and effort in completing
              comprehensive graphic design courses, equipping her with the
              necessary skills and knowledge to excel in this field.
            </p>
          </Stack>
        </div>
      </section>

      <section id='projects'>
        <div className='bg-white w-full p-12'>
          <Stack className='space-y-8 max-w-screen-lg'>
            <h2 className='font-inconsolata text-6xl font-medium'>
              personal projects
            </h2>
            <p className='text-2xl'>
              <span className='text-accent font-bold'>Jhonna</span> is an
              ambitious and dedicated{' '}
              <span className='text-accent font-bold'>UI/UX Designer</span> with
              a strong passion for crafting intuitive and visually appealing
              digital experiences. While she may not have professional work
              experience, She have invested her time and effort in completing
              comprehensive graphic design courses, equipping her with the
              necessary skills and knowledge to excel in this field.
            </p>
            <p className='text-2xl'>
              <span className='text-accent font-bold'>Jhonna</span> is an
              ambitious and dedicated{' '}
              <span className='text-accent font-bold'>UI/UX Designer</span> with
              a strong passion for crafting intuitive and visually appealing
              digital experiences. While she may not have professional work
              experience, She have invested her time and effort in completing
              comprehensive graphic design courses, equipping her with the
              necessary skills and knowledge to excel in this field.
            </p>
          </Stack>
        </div>
      </section>
    </>
  );
}
