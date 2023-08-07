import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

export type AppButtonProps = {
  // no props
} & ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton: FunctionComponent<AppButtonProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className='bg-accent text-black font-medium px-5 py-3 w-full rounded-full'
    ></button>
  );
};

export default AppButton;
