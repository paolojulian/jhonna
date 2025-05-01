import { FC, SVGAttributes } from 'react';

type MenuIconProps = SVGAttributes<SVGSVGElement>;

const MenuIcon: FC<MenuIconProps> = (props) => {
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
        d='M22.9565 10.9565H1.04346C0.467168 10.9565 0 11.4237 0 12C0 12.5763 0.467168 13.0435 1.04346 13.0435H22.9565C23.5328 13.0435 24 12.5763 24 12C24 11.4237 23.5328 10.9565 22.9565 10.9565Z'
        fill='white'
      />
      <path
        d='M1.04346 5.73927H22.9565C23.5328 5.73927 24 5.2721 24 4.6958C24 4.11951 23.5328 3.65234 22.9565 3.65234H1.04346C0.467168 3.65234 0 4.11951 0 4.6958C0 5.2721 0.467168 5.73927 1.04346 5.73927Z'
        fill='white'
      />
      <path
        d='M22.9565 18.2612H1.04346C0.467168 18.2612 0 18.7284 0 19.3047C0 19.881 0.467168 20.3482 1.04346 20.3482H22.9565C23.5328 20.3482 24 19.881 24 19.3047C24 18.7284 23.5328 18.2612 22.9565 18.2612Z'
        fill='white'
      />
    </svg>
  );
};

export default MenuIcon;
