import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type SectionHeadingProps = {
  // no props
} & HtmlHTMLAttributes<HTMLHeadingElement>;

const SectionHeading: FunctionComponent<SectionHeadingProps> = ({
  ...props
}) => {
  return (
    <h2
      className='font-inconsolata text-4xl md:text-6xl font-bold'
      {...props}
    ></h2>
  );
};

export default SectionHeading;
