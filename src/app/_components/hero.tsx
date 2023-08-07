'use client';
import DotGrid from '@/_components/common/dot-grid';
import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent, useEffect, useRef } from 'react';

export type HeroSectionProps = {
  // no props
};

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const professionRef = useRef<HTMLParagraphElement>(null);
  const viewCvRef = useRef<HTMLButtonElement>(null);

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
        className='flex flex-row min-h-screen justify-center items-center'
      >
        <Stack className='items-center flex-1'>
          <h1
            ref={logoRef}
            className='font-dm-mono font-medium text-[200px] leading-[200px] tracking-[-20px] -z-10'
          >
            jhonn<span className='tracking-[-40px]'>a</span>.
          </h1>
          <p ref={professionRef} className='font-poppins text-2xl -z-10'>
            UI UX Designer
          </p>
        </Stack>
        <Stack className='w-sidenav h-screen justify-end items-end p-[50px]'>
          <button
            ref={viewCvRef}
            className='rounded-full bg-black w-fit px-8 py-2 text-bg text-2xl'
          >
            view cv
          </button>
        </Stack>
      </section>
    </>
  );
};

export default HeroSection;
