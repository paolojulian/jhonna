import cn from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import React, {
  forwardRef,
  ReactElement,
  ReactNode,
  ButtonHTMLAttributes,
} from 'react';

const buttonVariants = cva(
  'rounded-full transition duration-200 active:scale-95',
  {
    variants: {
      color: {
        blue: 'bg-deep-cove text-white',
        'blue-outlined': 'border border-deep-cove text-deep-cove',
        gold: 'bg-reno-sand-500 text-white',
        'gold-outlined': 'border border-reno-sand-500 text-reno-sand-500',
        black: 'bg-black text-white',
        'black-outlined': 'border border-black text-black',
        green: 'bg-holly text-white',
        'green-outlined': 'border border-holly text-holly',
        gray: 'bg-gray-300 hover:bg-gray-400',
        white: 'bg-white hover:bg-reno-sand-200',
      },
      size: {
        sm: 'size-9 lg:size-10',
        md: 'size-10 lg:size-11',
        lg: 'size-11 lg:size-12',
      },
    },
    defaultVariants: {
      color: 'blue',
      size: 'md',
    },
  },
);

type AppIconButtonProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const AppIconButton = forwardRef<HTMLButtonElement, AppIconButtonProps>(
  ({ children, color, size, className, ...props }, ref): ReactElement => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          'flex justify-center items-center',
          buttonVariants({ color, size }),
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

AppIconButton.displayName = 'AppIconButton';

export default AppIconButton;
