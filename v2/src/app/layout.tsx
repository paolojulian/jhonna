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
      <body className={`antialiased font-display text-black bg-background`}>
        <section id='navbar' className='z-10 sticky top-0 inset-x-0'>
          <NavbarSection />
        </section>
        <main className='py-4'>{children}</main>
      </body>
    </html>
  );
}
