import styles from './app-btn.module.css';
import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type States = 'default' | 'loading' | 'success' | 'error';

export type AppButtonProps = {
  state?: States;
  loadingText?: string;
  successText?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton: FunctionComponent<AppButtonProps> = ({
  children,
  state = 'default',
  loadingText = 'loading...',
  successText = 'success!',
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        'text-black font-medium px-5 py-3 w-full rounded-full',
        'transition-colors',
        state === 'success' ? 'bg-green-500' : 'bg-accent',
        state === 'error' ? 'bg-red-400' : 'bg-accent',
        state === 'loading' || state === 'success' ? 'pointer-events-none' : ''
      )}
    >
      {state === 'success' ? (
        <span className=''>{successText}</span>
      ) : state === 'error' ? (
        <span>error</span>
      ) : state === 'loading' ? (
        <span className={styles['dots-animation']}>{loadingText}</span>
      ) : (
        children
      )}
    </button>
  );
};

export default AppButton;
