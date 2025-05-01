import Link from 'next/link';
import { FC } from 'react';
import classNames from 'classnames';
import AppTypography from '@/components/AppTypography';

type AppNavbarMobileMenuItemProps = {
  onClick?: () => void;
  href: string;
  title: string;
  isActive: boolean;
  shouldShow: boolean;
};

const AppNavbarMobileMenuItem: FC<AppNavbarMobileMenuItemProps> = ({
  onClick,
  href,
  title,
  isActive,
  shouldShow,
}) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={classNames(
        'transition duration-300 ease-in-out',
        [
          'first:delay-[50ms]',
          '[&:nth-child(1)]:delay-[100ms]',
          '[&:nth-child(2)]:delay-[150ms]',
          '[&:nth-child(3)]:delay-[200ms]',
          '[&:nth-child(4)]:delay-[250ms]',
          '[&:nth-child(5)]:delay-[300ms]',
        ],
        {
          'opacity-0 translate-y-[50px]': !shouldShow,
          'opacity-100 translate-y-0': shouldShow,
        }
      )}
    >
      <AppTypography
        variant={'heading'}
        className={classNames({
          'text-reno-sand-500': isActive,
          'text-black': !isActive,
        })}
      >
        {title}
      </AppTypography>
    </Link>
  );
};

export default AppNavbarMobileMenuItem;
