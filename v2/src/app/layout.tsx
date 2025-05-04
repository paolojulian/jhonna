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
        <main>{children}</main>
        <footer className='text-center py-10'>
          <AppTypography className='text-neutral-500'>
            Portfolio of Jhonna Mae Gines &mdash; &copy; 2025. All rights
            reserved.
          </AppTypography>
        </footer>
      </body>
    </html>
  );
}
