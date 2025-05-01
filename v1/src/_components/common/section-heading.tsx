import IntersectProvider, {
  IntersectContext,
} from '@/_context/IntersectContext';
import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type SectionHeadingProps = {
  // no props
} & HtmlHTMLAttributes<HTMLHeadingElement>;

const SectionHeading: FunctionComponent<SectionHeadingProps> = ({
  ...props
}) => {
  return (
    <IntersectProvider threshold={0.5} rootMargin='-120px'>
      <IntersectContext.Consumer>
        {({ isInView }) => (
          <div
            className={classNames(
              'transition-transform duration-700 ease-fadeIn',
              isInView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-32'
            )}
          >
            <h2
              className='font-inconsolata text-4xl md:text-6xl font-bold'
              {...props}
            ></h2>
          </div>
        )}
      </IntersectContext.Consumer>
    </IntersectProvider>
  );
};

export default SectionHeading;
