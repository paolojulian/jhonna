'use client';
import DotGrid from '@/_components/common/dot-grid';
import Stack from '@/_components/layouts/stack';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent, useEffect, useRef } from 'react';

export type HeroSectionProps = {
  // no props
};

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const professionRef = useRef<HTMLParagraphElement>(null);
  const viewCvRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY;
      const logo = logoRef.current;
      const profession = professionRef.current;
      const viewCv = viewCvRef.current;

      if (logo) {
        logo.style.transform = `translateY(${scroll * 0.8}px)`;
      }

      if (profession) {
        const opacity = 1 - Math.min(scroll / 200, 1);
        profession.style.transform = `translateY(${scroll * 0.7}px)`;
        profession.style.opacity = opacity.toFixed(2);
      }

      if (viewCv) {
        const opacity = 1 - Math.min(scroll / 100, 1);
        viewCv.style.transform = `translateY(${scroll * 0.7}px)`;
        viewCv.style.opacity = opacity.toFixed(2);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <div className='fixed w-3/5 h-screen right-0 top-24 -z-20 overflow-hidden pointer-events-none'>
        <DotGrid gridGap={30} dotColor={'#11182720'} />
      </div>

      <section
        id='hero'
        className='flex flex-row min-h-screen justify-center items-center w-full'
      >
        <Stack className='items-center flex-1 select-none'>
          <h1
            ref={logoRef}
            className={classNames(
              'font-dm-mono font-medium -z-10',
              'xl:text-[200px] xl:leading-[200px] xl:tracking-[-20px]',
              'lg:text-[150px] lg:leading-[150px] lg:tracking-[-20px]',
              'md:text-[150px] md:leading-[150px] md:tracking-[-20px]',
              'text-[110px] leading-[110px] tracking-[-10px]'
              // '2xl:text-[200px] 2xl:leading-[200px] 2xl:tracking-[-20px]',
              // 'xl:text-[150px] xl:leading-[150px] xl:tracking-[-20px]',
            )}
          >
            jhonn<span className='tracking-[-30px] md:tracking-[-40px]'>a</span>
            .
          </h1>
          <p ref={professionRef} className='font-poppins text-2xl -z-10'>
            UI UX Designer
          </p>
        </Stack>
        <Stack className='fixed lg:static lg:flex right-0 top-0 lg:w-sidenav-lg xl:w-sidenav-lg 2xl:w-sidenav h-screen justify-end items-end p-4 lg:p-nav-lg xl:p-nav-xl 2xl:p-nav'>
          <Link
            ref={viewCvRef}
            href='/assets/Jhonna.pdf'
            role='button'
            target='_blank'
            className='rounded-full bg-black w-fit px-8 py-2 text-bg xl:text-xl 2xl:text-2xl'
          >
            view cv
          </Link>
        </Stack>
      </section>
    </>
  );
};

export default HeroSection;
