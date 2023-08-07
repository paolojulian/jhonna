import React, { FunctionComponent } from 'react';

export type MenuIconProps = {
  // no props
} & React.SVGAttributes<SVGElement>;

const MenuIcon: FunctionComponent<MenuIconProps> = (props) => {
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
        d='M4 6H20M4 12H20M13 18H20'
        stroke='#FEE9E1'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default MenuIcon;
