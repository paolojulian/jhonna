import SectionHeading from '@/_components/common/section-heading';
import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

export type ProjectsSectionProps = {
  // no props
};

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = (props) => {
  return (
    <section id='portfolio'>
      <div className='bg-white w-full p-4 md:p-12 pb-32'>
        <Stack className='space-y-12 max-w-screen-lg'>
          <SectionHeading>personal projects</SectionHeading>

          <Stack className='space-y-24'>
            <div className='flex flex-col lg:flex-row w-full items-center space-y-4 lg:space-y-0 lg:space-x-8'>
              <div className='w-full lg:w-[400px] h-[300px] md:h-[400px] relative shadow-sm border border-bg'>
                <Image
                  layout='fill'
                  src={'/assets/hotel-booking.png'}
                  alt={'Hotel Booking and Reservation'}
                  objectFit='cover'
                />
              </div>

              <Stack className='h-full justify-center flex-1 space-y-2'>
                <h3 className='text-xl md:text-3xl font-medium'>
                  Hotel Booking and Reservation
                </h3>
                <p className='text-base md:text-lg line-clamp-7 text-black-light'>
                  Hotel Booking and Reservation - A hotel reservation and
                  booking application is a mobile app that allows users to
                  search for and book hotel rooms, as well as manage their
                  reservations and view hotel information.
                </p>
                <p className='pt-4 font-bold text-accent'>SEE MORE &gt;</p>
              </Stack>
            </div>

            <div className='flex flex-col-reverse lg:flex-row w-full items-center lg:space-x-8'>
              <Stack className='h-full justify-center flex-1 space-y-2 lg:text-right mt-4 lg:mt-0'>
                <h3 className='text-xl md:text-3xl font-medium'>
                  Landing Page and Blogsite
                </h3>
                <p className='text-base md:text-lg line-clamp-7 text-black-light'>
                  The Automotive Repair Shop&rsquo;s Landing Page and Dynamic
                  Blogsite offer a comprehensive online platform designed to
                  engage customers, showcase services, and provide valuable
                  automotive insights. Powered by a Headless CMS, this
                  integrated solution ensures seamless content management,
                  captivating design, and user-friendly navigation, creating a
                  compelling web presence for the repair shop.
                </p>
                <p className='pt-4 font-bold text-accent'>SEE MORE &gt;</p>
              </Stack>
              <div className='w-full lg:w-[400px] h-[300px] md:h-[400px] relative shadow-sm border border-bg'>
                <Image
                  layout='fill'
                  src={'/assets/landing.png'}
                  alt={'Landing Page and Blogsite'}
                  objectFit='cover'
                />
              </div>
            </div>
          </Stack>
        </Stack>
      </div>
    </section>
  );
};

export default ProjectsSection;
