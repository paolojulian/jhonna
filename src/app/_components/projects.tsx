import SectionHeading from '@/_components/common/section-heading';
import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import ProjectItem from './projects/project-item';
import IntersectProvider, {
  IntersectContext,
} from '@/_context/IntersectContext';
import classNames from 'classnames';

export type ProjectsSectionProps = {
  // no props
};

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = (props) => {
  return (
    <section id='portfolio'>
      <div className='bg-white w-full p-4 md:p-12 pb-32'>
        <Stack className='space-y-12 max-w-screen-lg pb-60'>
          <SectionHeading>personal projects</SectionHeading>

          <Stack className='space-y-24'>
            <ProjectItem
              imageUrl='/assets/hotel-booking.png'
              title='Hotel Booking and Reservation'
              description='Hotel Booking and Reservation - A hotel reservation and
                  booking application is a mobile app that allows users to
                  search for and book hotel rooms, as well as manage their
                  reservations and view hotel information.'
              link={
                'https://www.figma.com/file/Os5RYokIkkoUAsxOYhimuk/Hotel-Booking-and-Reservation?type=design&node-id=1034%3A5332&mode=design&t=DHkXAfTJP2xrlini-1'
              }
            />

            <ProjectItem
              variant='right'
              imageUrl='/assets/landing.png'
              title='Landing Page and Blogsite'
              description={`
                  The Automotive Repair Shop's Landing Page and Dynamic
                  Blogsite offer a comprehensive online platform designed to
                  engage customers, showcase services, and provide valuable
                  automotive insights. Powered by a Headless CMS, this
                  integrated solution ensures seamless content management,
                  captivating design, and user-friendly navigation, creating a
                  compelling web presence for the repair shop.
              `}
            />
          </Stack>
        </Stack>
      </div>
    </section>
  );
};

export default ProjectsSection;
