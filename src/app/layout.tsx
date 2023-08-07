import classNames from 'classnames';
import './globals.css';
import type { Metadata } from 'next';
import { DM_Mono, Inconsolata, Poppins } from 'next/font/google';
import Menu from '@/_components/layouts/menu';

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
          'bg-bg text-black-secondary h-full'
        )}
      >
        <div className='mx-auto flex flex-row relative font-inconsolata h-full'>
          {/* sidenav */}
          <header className='flex flex-col h-screen sticky top-0 w-sidenav'>
            <Menu />
          </header>
          {/*  */}
          <main className='flex-1'>{children}</main>
        </div>
      </body>
    </html>
  );
}
