'use client';
import HeroSection from './_components/hero';
import AboutSection from './_components/about';
import ProjectsSection from './_components/projects';
import { ScrollProvider } from '@/_context/ScrollContext';
import Menu from '@/_components/layouts/menu';
import ContactSection from './_components/contact';

export default function Home() {
  return (
    <>
      <ScrollProvider>
        {/* sidenav-web */}
        <header className='hidden md:flex flex-col h-screen top-0 left-0 md:w-sidenav-md lg:w-sidenav-lg xl:w-sidenav-xl 2xl:w-sidenav fixed z-0'>
          <Menu />
        </header>

        {/* sidenav-mobile */}
        <header className='fixed md:hidden flex-col h-screen top-4 right-4 md:w-sidenav-md lg:w-sidenav-lg xl:w-sidenav-xl 2xl:w-sidenav z-50'>
          <Menu variant='mobile' />
        </header>

        <div className='mx-auto flex flex-col relative font-inconsolata h-full md:ml-sidenav-md lg:ml-sidenav-lg xl:ml-sidenav-xl 2xl:ml-sidenav'>
          <HeroSection />

          <AboutSection />

          <ProjectsSection />
        </div>
        <ContactSection />
      </ScrollProvider>
    </>
  );
}
