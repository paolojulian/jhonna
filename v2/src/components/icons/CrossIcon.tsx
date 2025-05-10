import { FC, SVGProps } from 'react';

type CrossIconProps = SVGProps<SVGSVGElement>;

const CrossIcon: FC<CrossIconProps> = ({ ...props }) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 30L30 10M10 10L30 30'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CrossIcon;
