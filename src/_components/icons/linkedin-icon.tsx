import React, { FunctionComponent } from 'react';

export type LinkedInIconProps = {
  // no props
} & React.SVGAttributes<SVGElement>;

const LinkedInIcon: FunctionComponent<LinkedInIconProps> = (props) => {
  return (
    <svg
      width='22'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22.2254 0.000167795H1.77465C1.54476 -0.00300571 1.3165 0.0388643 1.1029 0.123387C0.889292 0.207909 0.694531 0.333428 0.529735 0.492775C0.36494 0.652123 0.233338 0.842177 0.142445 1.05208C0.0515522 1.26199 0.00314897 1.48764 0 1.71614V22.2839C0.00314897 22.5124 0.0515522 22.738 0.142445 22.9479C0.233338 23.1578 0.36494 23.3479 0.529735 23.5072C0.694531 23.6666 0.889292 23.7921 1.1029 23.8766C1.3165 23.9611 1.54476 24.003 1.77465 23.9998H22.2254C22.4552 24.003 22.6835 23.9611 22.8971 23.8766C23.1107 23.7921 23.3055 23.6666 23.4703 23.5072C23.6351 23.3479 23.7667 23.1578 23.8576 22.9479C23.9484 22.738 23.9969 22.5124 24 22.2839V1.71614C23.9969 1.48764 23.9484 1.26199 23.8576 1.05208C23.7667 0.842177 23.6351 0.652123 23.4703 0.492775C23.3055 0.333428 23.1107 0.207909 22.8971 0.123387C22.6835 0.0388643 22.4552 -0.00300571 22.2254 0.000167795ZM7.27968 20.0879H3.65795V9.28804H7.27968V20.0879ZM5.46881 7.77606C5.22149 7.77606 4.9766 7.72764 4.74811 7.63356C4.51961 7.53949 4.312 7.4016 4.13712 7.22777C3.96224 7.05394 3.82352 6.84758 3.72887 6.62046C3.63423 6.39334 3.58551 6.14992 3.58551 5.90408C3.58551 5.65825 3.63423 5.41483 3.72887 5.18771C3.82352 4.96059 3.96224 4.75423 4.13712 4.5804C4.312 4.40657 4.51961 4.26868 4.74811 4.17461C4.9766 4.08053 5.22149 4.03211 5.46881 4.03211C5.73404 4.00221 6.00263 4.02834 6.25699 4.10877C6.51136 4.1892 6.74576 4.32213 6.94486 4.49886C7.14395 4.67558 7.30325 4.89211 7.41232 5.13427C7.52139 5.37643 7.57777 5.63876 7.57777 5.90408C7.57777 6.16941 7.52139 6.43173 7.41232 6.6739C7.30325 6.91606 7.14395 7.13259 6.94486 7.30931C6.74576 7.48604 6.51136 7.61897 6.25699 7.6994C6.00263 7.77983 5.73404 7.80596 5.46881 7.77606ZM20.3421 20.0879H16.7203V14.292C16.7203 12.84 16.2012 11.892 14.8853 11.892C14.4781 11.895 14.0815 12.0219 13.7491 12.2558C13.4167 12.4897 13.1644 12.8192 13.0262 13.2C12.9317 13.482 12.8907 13.7791 12.9054 14.076V20.0759H9.2837C9.2837 20.0759 9.2837 10.26 9.2837 9.27604H12.9054V10.8C13.2344 10.2326 13.713 9.76505 14.2895 9.44788C14.866 9.1307 15.5186 8.97586 16.1771 9.00004C18.5915 9.00004 20.3421 10.548 20.3421 13.872V20.0879Z'
        fill='#FEE9E1'
      />
    </svg>
  );
};

export default LinkedInIcon;
