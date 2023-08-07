import SectionHeading from '@/_components/common/section-heading';
import Stack from '@/_components/layouts/stack';
import IntersectProvider, {
  IntersectContext,
} from '@/_context/IntersectContext';
import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type AboutSectionProps = {
  // no props
};

const AboutSection: FunctionComponent<AboutSectionProps> = (props) => {
  return (
    <section id='about'>
      <div className='bg-white w-full p-4 md:p-12'>
        <Stack className='space-y-8 max-w-screen-lg'>
          <SectionHeading>about</SectionHeading>
          <IntersectProvider threshold={0.5} rootMargin='-120px'>
            <IntersectContext.Consumer>
              {({ isInView }) => (
                <p
                  className={classNames(
                    'text-lg md:text-2xl pb-40 transition-transform duration-500 ease-fadeIn',
                    isInView
                      ? 'translate-y-0 opacity-1'
                      : 'translate-y-60 opacity-0'
                  )}
                >
                  <span className='text-accent font-bold'>Jhonna</span> is an
                  ambitious and dedicated{' '}
                  <span className='text-accent font-bold'>UI/UX Designer</span>{' '}
                  with a strong passion for crafting intuitive and visually
                  appealing digital experiences. While she may not have
                  professional work experience, She have invested her time and
                  effort in completing comprehensive graphic design courses,
                  equipping her with the necessary skills and knowledge to excel
                  in this field.
                </p>
              )}
            </IntersectContext.Consumer>
          </IntersectProvider>
        </Stack>
      </div>
    </section>
  );
};

export default AboutSection;
