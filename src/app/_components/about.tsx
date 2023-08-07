import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';

export type AboutSectionProps = {
  // no props
};

const AboutSection: FunctionComponent<AboutSectionProps> = (props) => {
  return (
    <section id='about'>
      <div className='bg-white w-full p-4 md:p-12'>
        <Stack className='space-y-8 max-w-screen-lg'>
          <h2 className='font-inconsolata text-3xl md:text-6xl font-semibold'>
            about
          </h2>
          <p className='text-lg md:text-2xl'>
            <span className='text-accent font-bold'>Jhonna</span> is an
            ambitious and dedicated{' '}
            <span className='text-accent font-bold'>UI/UX Designer</span> with a
            strong passion for crafting intuitive and visually appealing digital
            experiences. While she may not have professional work experience,
            She have invested her time and effort in completing comprehensive
            graphic design courses, equipping her with the necessary skills and
            knowledge to excel in this field.
          </p>
        </Stack>
      </div>
    </section>
  );
};

export default AboutSection;
