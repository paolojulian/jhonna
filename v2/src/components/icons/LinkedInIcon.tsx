import { FC, SVGAttributes } from 'react';

type LinkedInIconProps = SVGAttributes<SVGSVGElement>;

const LinkedInIcon: FC<LinkedInIconProps> = (props) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_652_147)'>
        <path
          d='M11.6145 0.5C15.218 0.5 15.5 0.782 15.5 4.385V11.6385C15.5 15.2195 15.22 15.5 11.6385 15.5H4.3615C0.78 15.5 0.5 15.2195 0.5 11.6385V4.3615C0.5 0.78 0.78 0.5 4.3615 0.5H11.6145ZM5.3855 12.125V6.023H3.489V12.125H5.3855ZM4.438 5.15C5.0475 5.15 5.543 4.6545 5.543 4.044C5.543 3.4345 5.0475 2.939 4.438 2.939C3.827 2.939 3.332 3.434 3.332 4.044C3.332 4.654 3.8265 5.15 4.438 5.15ZM12.5 12.125V8.7785C12.5 7.1355 12.145 5.8715 10.225 5.8715C9.3025 5.8715 8.684 6.3775 8.431 6.857H8.405V6.023H6.5855V12.125H8.4805V9.106C8.4805 8.31 8.632 7.5395 9.619 7.5395C10.5915 7.5395 10.6045 8.45 10.6045 9.1575V12.125H12.5Z'
          fill='#DFE7FD'
        />
      </g>
      <defs>
        <clipPath id='clip0_652_147'>
          <rect
            width='15'
            height='15'
            fill='white'
            transform='translate(0.5 0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedInIcon;
