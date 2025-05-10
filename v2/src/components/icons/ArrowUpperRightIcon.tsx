import { FC, SVGProps } from 'react';

type ArrowUpperRightIconProps = SVGProps<SVGSVGElement>;

const ArrowUpperRightIcon: FC<ArrowUpperRightIconProps> = ({ ...props }) => {
  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.26668 12.25L3.33334 11.3166L9.73334 4.91665H4.00001V3.58331H12V11.5833H10.6667V5.84998L4.26668 12.25Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default ArrowUpperRightIcon;
