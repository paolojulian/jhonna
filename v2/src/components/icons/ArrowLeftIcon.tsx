import { FC, SVGProps } from 'react';

type ArrowLeftIconProps = SVGProps<SVGSVGElement>;

const ArrowLeftIcon: FC<ArrowLeftIconProps> = ({ ...props }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M23.0002 11H6.00024V7.639C6.00024 6.944 5.14824 6.595 4.65024 7.087L0.232238 11.448C-0.0767617 11.753 -0.0767617 12.247 0.232238 12.552L4.65024 16.913C5.14824 17.405 6.00024 17.056 6.00024 16.361V13H23.0002C23.5532 13 24.0002 12.552 24.0002 12C24.0002 11.448 23.5532 11 23.0002 11Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default ArrowLeftIcon;
