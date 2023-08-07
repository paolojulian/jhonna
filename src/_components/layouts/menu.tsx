'use client';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import HamburgerMenuIcon from '../icons/hamburger-menu';
import Stack from './stack';
import classNames from 'classnames';
import CloseIcon from '../icons/close-icon';
import { usePathname } from 'next/navigation';

type Variants = 'default' | 'light';

export type MenuProps = {
  variant?: Variants;
  fixed?: boolean;
};

const colorVariants: Record<Variants, string> = {
  default: 'bg-slate-900 text-slate-400',
  light: 'bg-main text-slate-600',
};

const borderVariants: Record<Variants, string> = {
  default: '',
  light: 'border-l border-slate-400',
};

const WebLink: FunctionComponent<
  React.ComponentProps<typeof Link> & { isActive: boolean; name: string }
> = ({ isActive, name, ...props }) => {
  return (
    <li
      className={classNames(
        'w-[250px] flex flex-row justify-start items-center py-1 pr-5 font-medium text-lg',
        'font-poppins',
        'border-b',
        isActive ? 'border-accent text-accent' : 'border-transparent'
      )}
    >
      <Link {...props} className='w-full'>
        {name}
      </Link>
    </li>
  );
};

const MobileLink: FunctionComponent<
  React.ComponentProps<typeof Link> & { isActive: boolean; name: string }
> = ({ isActive, name, ...props }) => {
  return (
    <li
      className={classNames(
        'py-2',
        'border-b',
        isActive
          ? 'text-red-400 border-red-400'
          : 'text-slate-400 border-transparent'
      )}
    >
      <Link {...props}>{name}</Link>
    </li>
  );
};

const Menu: FunctionComponent<MenuProps> = ({
  variant = 'default',
  fixed = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const pathname = usePathname();

  return (
    <Stack className='flex-1 p-[50px]'>
      <div className='h-[50px] w-[50px] bg-black flex flex-row justify-center items-center rounded-full'>
        <p className='font-dm-mono'>j</p>
      </div>

      <nav className='flex-1 flex flex-col justify-center'>
        <ul className='flex flex-col space-y-5'>
          <WebLink href={'#hero'} name='home' isActive />
          <WebLink href={'#about'} name='about' isActive={false} />
          <WebLink href={'#portfolio'} name='portfolio' isActive={false} />
          <WebLink href={'#contact'} name='get in touch' isActive={false} />
        </ul>
      </nav>

      <Row className='space-x-4'>
        <div className='w-[50px] h-[50px] bg-black-secondary rounded-full'></div>
        <div className='w-[50px] h-[50px] bg-black-secondary rounded-full'></div>
        <div className='w-[50px] h-[50px] bg-black-secondary rounded-full'></div>
      </Row>
    </Stack>
  );
};

export default Menu;
