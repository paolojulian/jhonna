'use client';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import Stack from './stack';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

type Variants = 'default' | 'light';

export type MenuProps = {
  variant?: Variants;
  fixed?: boolean;
};

const WebLink: FunctionComponent<
  React.ComponentProps<typeof Link> & { isActive: boolean; name: string }
> = ({ isActive, name, ...props }) => {
  return (
    <li
      className={classNames(
        'w-full flex flex-col justify-center items-start py-1 font-medium text-lg',
        'group',
        'border-b',
        isActive ? 'border-accent text-accent' : 'border-transparent'
      )}
    >
      <Link {...props} className='w-full flex-1'>
        {name}
      </Link>
      <div
        className={classNames(
          !isActive
            ? 'w-0 group-hover:w-full transition-all h-[1.5px] bg-bg-secondary'
            : ''
        )}
      ></div>
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
    <Stack className='flex-1 md:p-nav-md lg:p-nav-lg xl:p-nav-xl 2xl:p-nav'>
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
        <div className='w-[40px] h-[40px] bg-black-secondary rounded-full'></div>
        <div className='w-[40px] h-[40px] bg-black-secondary rounded-full'></div>
        <div className='w-[40px] h-[40px] bg-black-secondary rounded-full'></div>
      </Row>
    </Stack>
  );
};

export default Menu;
