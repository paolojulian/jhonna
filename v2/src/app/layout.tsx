import AppTypography from '@/components/AppTypography';
import type { Metadata } from 'next';
import './globals.css';
import NavbarSection from '@/app/_sections/NavbarSection/NavbarSection';

export const metadata: Metadata = {
  title: "Jhonna's Portfolio",
  description: 'Portfolio of Jhonna Gines',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased font-helvetica text-black bg-background`}>
        <NavbarSection />
        <main className='mt-3 lg:mt-0'>{children}</main>
        <footer className='text-center py-10 pb-20 lg:pb-10'>
          <AppTypography className='text-neutral-500 mx-auto max-w-[300px] lg:max-w-none'>
            Portfolio of Jhonna Mae Gines &mdash; &copy; 2025. All rights
            reserved.
          </AppTypography>
        </footer>
      </body>
    </html>
  );
}
