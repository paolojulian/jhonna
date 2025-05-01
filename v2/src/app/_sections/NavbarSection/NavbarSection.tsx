import NavbarSectionMobile from '@/app/_sections/NavbarSection/NavbarSection.mobile';
import { FC } from 'react';

type NavbarSectionProps = object;

const NavbarSection: FC<NavbarSectionProps> = () => {
  return (
    <>
      {/* desktop */}
      <nav className={'hidden lg:flex'}></nav>
      <NavbarSectionMobile />
    </>
  );
};

export default NavbarSection;
