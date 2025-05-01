'use client';
import Row from '@/_components/layouts/row';
import Link from 'next/link';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Stack from './stack';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import LinkedInIcon from '../icons/linkedin-icon';
import MailIcon from '../icons/mail-icon';
import PhoneIcon from '../icons/phone-icon';
import MenuIcon from '../icons/menu-icon';
import CloseIcon from '../icons/close-icon';
import { useScroll } from '@/_context/ScrollContext';

type Variants = 'web' | 'mobile';

export type MenuProps = {
  variant?: Variants;
};

const WebLink: FunctionComponent<
  React.ComponentProps<typeof Link> & { isActive: boolean; name: string }
> = ({ isActive, name, ...props }) => {
  return (
    <li
      className={classNames(
        'w-full flex flex-col justify-center items-start py-1 font-medium text-lg',
        'group transition',
        'border-b',
        isActive
          ? 'border-accent text-accent'
          : 'border-transparent hover:text-accent hover:border-accent'
      )}
    >
      <Link {...props} className='w-full flex-1'>
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
        'w-full flex flex-col justify-center items-start py-1 text-lg',
        'group transition',
        'border-b',
        isActive
          ? 'border-accent text-accent'
          : 'border-transparent text-bg-secondary'
      )}
    >
      <Link {...props} className='w-full flex-1'>
        {name}
      </Link>
    </li>
  );
};

const Menu: FunctionComponent<MenuProps> = ({ variant = 'web' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-overflow')
    } else {
      document.body.classList.remove('no-overflow')
    }
  }, [isOpen])

  const { activeSection } = useScroll();

  return (
    <>
      <Stack
        className={classNames(
          'flex-1 md:p-nav-md lg:p-nav-lg xl:p-nav-xl 2xl:p-nav',
          'hidden md:flex'
        )}
      >
        <div className='h-[50px] w-[50px] bg-black flex flex-row justify-center items-center rounded-full select-none'>
          <p className='font-dm-mono text-bg text-2xl'>j</p>
        </div>

        <nav className='flex-1 flex flex-col justify-center'>
          <ul className='flex flex-col space-y-5'>
            <WebLink
              href={'#hero'}
              name='home'
              isActive={activeSection === 'hero'}
            />
            <WebLink
              href={'#about'}
              name='about'
              isActive={activeSection === 'about'}
            />
            <WebLink
              href={'#portfolio'}
              name='portfolio'
              isActive={activeSection === 'portfolio'}
            />
            <WebLink
              href={'#contact'}
              name='get in touch'
              isActive={activeSection === 'contact'}
            />
          </ul>
        </nav>

        <Row className='space-x-4'>
          <div className='flex flex-col justify-center items-center w-[40px] h-[40px] bg-black-secondary rounded-full'>
            <Link
              href='https://www.linkedin.com/in/jhonna-mae-gines-06a8861a6/'
              target='_blank'
            >
              <LinkedInIcon className='w-5 h-5' />
            </Link>
          </div>
          <div className='flex flex-col justify-center items-center w-[40px] h-[40px] bg-black-secondary rounded-full'>
            <Link href='mailto:jhonnagines@gmail.com'>
              <MailIcon className='w-5 h-5' />
            </Link>
          </div>
          <div className='flex flex-col justify-center items-center w-[40px] h-[40px] bg-black-secondary rounded-full'>
            <Link href='tel:09979713468'>
              <PhoneIcon className='w-5 h-5' />
            </Link>
          </div>
        </Row>
      </Stack>

      {variant === 'mobile' ? (
        <>
          <div>
            <button
              className='rounded-full bg-black w-12 h-12 flex justify-center items-center'
              onClick={handleToggleMenu}
            >
              <MenuIcon />
            </button>
          </div>
          <Stack
            className={classNames(
              'fixed inset-0 transition-opacity z-50',
              isOpen
                ? 'pointer-events-auto opacity-1'
                : 'pointer-events-none opacity-0'
            )}
          >
            <div
              className='blur-md bg-black/40 absolute inset-0'
              onClick={handleToggleMenu}
            ></div>

            <nav
              className={classNames(
                'flex-1 flex items-end flex-col w-4/5 absolute right-0 top-0 bottom-0 bg-black p-4 transition-transform',
                isOpen ? 'translate-x-0' : 'translate-x-full'
              )}
            >
              <button
                className='rounded-full bg-bg w-12 h-12 flex justify-center items-center'
                onClick={handleToggleMenu}
              >
                <CloseIcon className='stroke-black' />
              </button>
              <ul
                className='w-full text-right flex flex-col justify-center space-y-5 flex-1 py-12 px-4'
                onClick={handleToggleMenu}
              >
                <MobileLink
                  href={'#hero'}
                  name='home'
                  isActive={activeSection === 'hero'}
                />
                <MobileLink
                  href={'#about'}
                  name='about'
                  isActive={activeSection === 'about'}
                />
                <MobileLink
                  href={'#portfolio'}
                  name='portfolio'
                  isActive={activeSection === 'portfolio'}
                />
                <MobileLink
                  href={'#contact'}
                  name='get in touch'
                  isActive={activeSection === 'contact'}
                />
              </ul>
              <Row className='space-x-4 justify-end'>
                <div className='flex flex-col justify-center items-center w-[40px] h-[40px] bg-transparent rounded-full'>
                  <Link
                    href='https://www.linkedin.com/in/jhonna-mae-gines-06a8861a6/'
                    target='_blank'
                  >
                    <LinkedInIcon className='w-5 h-5' />
                  </Link>
                </div>
                <div className='flex flex-col justify-center items-center w-[40px] h-[40px] bg-transparent rounded-full'>
                  <Link href='mailto:jhonnagines@gmail.com'>
                    <MailIcon className='w-5 h-5' />
                  </Link>
                </div>
                <div className='flex flex-col justify-center items-center w-[40px] h-[40px] bg-transparent rounded-full'>
                  <Link href='tel:09979713468'>
                    <PhoneIcon className='w-5 h-5' />
                  </Link>
                </div>
              </Row>
            </nav>
          </Stack>
        </>
      ) : null}
    </>
  );
};

export default Menu;
