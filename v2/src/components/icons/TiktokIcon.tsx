import { FC, SVGAttributes } from 'react';

type FacebookIconProps = SVGAttributes<SVGSVGElement>;

const FacebookIcon: FC<FacebookIconProps> = (props) => {
  return (
    <svg
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_607_767)'>
        <path
          d='M20.5 10.561C20.5 15.5519 16.8383 19.6894 12.0583 20.4402V13.471H14.3825L14.825 10.5877H12.0583V8.71687C12.0583 7.9277 12.445 7.15937 13.6833 7.15937H14.9408V4.70437C14.9408 4.70437 13.7992 4.50937 12.7083 4.50937C10.43 4.50937 8.94167 5.8902 8.94167 8.38937V10.5869H6.40917V13.4702H8.94167V20.4394C4.1625 19.6877 0.5 15.551 0.5 10.561C0.5 5.03854 4.9775 0.561035 10.5 0.561035C16.0225 0.561035 20.5 5.0377 20.5 10.561Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_607_767'>
          <rect
            width='20'
            height='20'
            fill='white'
            transform='translate(0.5 0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
