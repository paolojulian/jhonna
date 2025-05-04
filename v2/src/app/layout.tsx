import type { Metadata } from 'next';
import './globals.css';
import NavbarSection from '@/app/_sections/NavbarSection/NavbarSection';
import AppTypography from '@/components/AppTypography';

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
      <body className={`antialiased font-display text-black bg-background`}>
        <section id='navbar' className='z-10 sticky top-0 inset-x-0'>
          <NavbarSection />
        </section>
        <main className='py-4'>{children}</main>
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
