import Row from '@/_components/layouts/row';
import Stack from '@/_components/layouts/stack';
import IntersectProvider, {
  IntersectContext,
} from '@/_context/IntersectContext';
import classNames from 'classnames';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

type Variants = 'left' | 'right';

export type ProjectItemProps = {
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
  variant?: Variants;
};

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  imageUrl,
  title,
  description,
  link = '',
  variant = 'left',
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div
      className={classNames(
        'flex flex-col w-full items-center group',
        variant === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse',
        !!link ? 'cursor-pointer' : 'pointer-events-none'
      )}
      onClick={handleClick}
    >
      <IntersectProvider>
        <IntersectContext.Consumer>
          {({ isInView }) => (
            <div
              className={classNames(
                'w-full lg:w-[400px] h-[300px] md:h-[400px] relative shadow-sm border border-bg overflow-hidden',
                'transition-transform duration-700',
                variant === 'left' ? 'mb-4 lg:mr-8' : 'mb-3 lg:ml-8',
                isInView ? 'translate-y-0' : 'translate-y-full'
              )}
            >
              {/* overlay */}
              <div className='absolute inset-0 bg-accent/30 z-20 -translate-x-full group-hover:translate-x-0 transition-transform'></div>

              {/* image */}
              <Image
                layout='fill'
                src={imageUrl}
                alt={title}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          )}
        </IntersectContext.Consumer>
      </IntersectProvider>

      <IntersectProvider>
        <IntersectContext.Consumer>
          {({ isInView }) => (
            <Stack
              className={classNames(
                'h-full justify-center flex-1 space-y-2',
                variant === 'left' ? 'text-left' : 'lg:text-right',
                'transition-transform duration-1000',
                isInView ? 'translate-y-0' : 'translate-y-full'
              )}
            >
              <h3 className='text-xl md:text-3xl font-medium'>{title}</h3>
              <p className='text-base md:text-lg line-clamp-7 text-black-light'>
                {description}
              </p>
              {link ? (
                <Row className='pt-4 items-center space-x-2 text-accent font-bold text-lg'>
                  <p>SEE MORE </p>
                  <span className='translate-x-0 group-hover:translate-x-4 transition-transform'>
                    &gt;
                  </span>
                </Row>
              ) : (
                <p className='pt-4 font-bold text-black text-opacity-60'>
                  in the works
                </p>
              )}
            </Stack>
          )}
        </IntersectContext.Consumer>
      </IntersectProvider>
    </div>
  );
};

export default ProjectItem;
