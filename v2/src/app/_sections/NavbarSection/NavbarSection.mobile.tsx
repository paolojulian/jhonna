'use client';
import LogoIcon from '@/components/icons/LogoIcon';
import MenuIcon from '@/components/icons/MenuIcon';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC, useState } from 'react';

const LazyLoadedMenu = dynamic(() => import('./NavbarSectionMenu.mobile'), {
  ssr: false,
});

type NavbarSectionMobileProps = object;

const NavbarSectionMobile: FC<NavbarSectionMobileProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav
        className={
          'flex lg:hidden bg-black h-[80px] items-center justify-between px-6 z-0'
        }
      >
        <Link href='/'>
          <LogoIcon />
        </Link>
        <button onClick={handleOpen}>
          <MenuIcon />
        </button>
      </nav>
      <LazyLoadedMenu onClose={handleClose} isOpen={isOpen} />
    </>
  );
};

export default NavbarSectionMobile;
