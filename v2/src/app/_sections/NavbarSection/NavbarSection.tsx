'use client';
import AppTypography from '@/components/AppTypography';
import { Routes } from '@/config/routes.contants';
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

type NavbarSectionProps = object;

const NavbarSection: FC<NavbarSectionProps> = () => {
  const pathname = usePathname();

  return (
    <>
      {/* desktop */}
      <nav
        className={cn('py-6 lg:py-10', 'mx-auto w-fit z-20', 'hidden lg:block')}
      >
        <div className='rounded-full bg-neutral-100 p-2 flex flex-row'>
          <NavbarLink
            title='Home'
            href={Routes.home()}
            isActive={pathname === Routes.home()}
          />
          <NavbarLink
            title='Projects'
            href={Routes.projects()}
            isActive={pathname === Routes.projects()}
          />
          <NavbarLink
            title='About'
            href={Routes.about()}
            isActive={pathname === Routes.about()}
          />
          <NavbarLink
            title='Contact'
            href={Routes.contact()}
            isActive={pathname === Routes.contact()}
          />
        </div>
      </nav>

      {/* mobile */}
      <div className='block lg:hidden fixed inset-x-0 bottom-0 p-4 z-20'>
        <nav className={cn('mx-auto w-fit shadow-2xl rounded-full')}>
          <div className='rounded-full bg-neutral-100 p-2 flex flex-row'>
            <NavbarLink
              title='Home'
              href={Routes.home()}
              isActive={pathname === Routes.home()}
            />
            <NavbarLink
              title='Projects'
              href={Routes.projects()}
              isActive={pathname === Routes.projects()}
            />
            <NavbarLink
              title='About'
              href={Routes.about()}
              isActive={pathname === Routes.about()}
            />
            <NavbarLink
              title='Contact'
              href={Routes.contact()}
              isActive={pathname === Routes.contact()}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

type NavbarLinkProps = {
  isActive: boolean;
  title: string;
  href: string;
};

const NavbarLink: FC<NavbarLinkProps> = ({ isActive, title, href }) => {
  return (
    <Link
      href={href}
      className={cn('px-3 py-1 pt-1.5 rounded-full', 'transition-opacity', {
        'bg-[#fff]': isActive,
        'hover:opacity-50': !isActive,
        'text-peacoat/70': !isActive,
      })}
    >
      <AppTypography>{title}</AppTypography>
    </Link>
  );
};

export default NavbarSection;
