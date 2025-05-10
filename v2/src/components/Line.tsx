import { FC, SVGAttributes } from 'react';

type LineProps = SVGAttributes<SVGSVGElement>;

const Line: FC<LineProps> = (props) => {
  return (
    <svg
      width='48'
      height='4'
      viewBox='0 0 48 4'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M0 2L48 2' stroke='#FF6C6C' strokeWidth='3' />
    </svg>
  );
};

export default Line;
