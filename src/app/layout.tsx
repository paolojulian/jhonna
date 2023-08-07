import classNames from 'classnames';
import './globals.css';
import type { Metadata } from 'next';
import { DM_Mono, Inconsolata, Poppins } from 'next/font/google';
import Menu from '@/_components/layouts/menu';
import ContactSection from './_components/contact';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});
const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: '500',
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'jhonna.',
  description: 'Portfolio website for jhonna.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={classNames(
          `${poppins.variable} font-poppins`,
          `${dmMono.variable} font-dm-mono`,
          `${inconsolata.variable} font-inconsolata`,
          'bg-bg text-black-secondary h-full max-w-screen overflow-x-hidden'
        )}
      >
        {/* sidenav */}
        <header className='hidden md:flex flex-col h-screen top-0 left-0 md:w-sidenav-md lg:w-sidenav-lg xl:w-sidenav-xl 2xl:w-sidenav fixed z-0'>
          <Menu />
        </header>
        <div className='mx-auto flex flex-row relative font-inconsolata h-full md:ml-sidenav-md lg:ml-sidenav-lg xl:ml-sidenav-xl 2xl:ml-sidenav'>
          {/*  */}
          <main className='flex-1'>{children}</main>
        </div>
        <ContactSection />
      </body>
    </html>
  );
}
