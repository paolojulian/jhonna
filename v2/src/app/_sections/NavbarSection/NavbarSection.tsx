import AppTypography from '@/components/AppTypography';
import cn from '@/utils/cn';
import Link from 'next/link';
import { FC } from 'react';

type NavbarSectionProps = object;

const NavbarSection: FC<NavbarSectionProps> = () => {
  return (
    <>
      {/* desktop */}
      <nav className='py-10 mx-auto w-fit z-20'>
        <div className='rounded-full bg-neutral-100 p-2 flex flex-row'>
          <NavbarLink title='Home' href='/' isActive />
          <NavbarLink title='Projects' href='#projects' isActive={false} />
          <NavbarLink title='About' href='#about' isActive={false} />
          <NavbarLink title='Contact' href='#contact' isActive={false} />
        </div>
      </nav>
      {/* <NavbarSectionMobile /> */}
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
