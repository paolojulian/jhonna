import React, { FunctionComponent } from 'react';

export type MailIconProps = {
  // no props
} & React.SVGAttributes<SVGElement>;

const MailIcon: FunctionComponent<MailIconProps> = (props) => {
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
        d='M1.5 8.66992V17.2499C1.5 18.0456 1.81607 18.8086 2.37868 19.3712C2.94129 19.9339 3.70435 20.2499 4.5 20.2499H19.5C20.2956 20.2499 21.0587 19.9339 21.6213 19.3712C22.1839 18.8086 22.5 18.0456 22.5 17.2499V8.66992L13.572 14.1629C13.0992 14.4538 12.5551 14.6078 12 14.6078C11.4449 14.6078 10.9008 14.4538 10.428 14.1629L1.5 8.66992Z'
        fill='#FEE9E1'
      />
      <path
        d='M22.5 6.908V6.75C22.5 5.95435 22.1839 5.19129 21.6213 4.62868C21.0587 4.06607 20.2956 3.75 19.5 3.75H4.5C3.70435 3.75 2.94129 4.06607 2.37868 4.62868C1.81607 5.19129 1.5 5.95435 1.5 6.75V6.908L11.214 12.886C11.4504 13.0314 11.7225 13.1084 12 13.1084C12.2775 13.1084 12.5496 13.0314 12.786 12.886L22.5 6.908Z'
        fill='#FEE9E1'
      />
    </svg>
  );
};

export default MailIcon;
