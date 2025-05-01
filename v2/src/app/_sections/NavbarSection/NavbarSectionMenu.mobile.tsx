import AppNavbarMobileMenuItem from '@/app/_sections/NavbarSection/NavbarSectionItem.mobile';
import AppIconButton from '@/components/AppIconButton';
import CrossIcon from '@/components/icons/CrossIcon';
import { Routes } from '@/config/routes.contants';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import ReactDOM from 'react-dom';

type NavbarSectionMenuMobileProps = {
  onClose: () => void;
  isOpen: boolean;
};

const NavbarSectionMenuMobile: FC<NavbarSectionMenuMobileProps> = ({
  onClose,
  isOpen,
}) => {
  const pathname = usePathname();

  return ReactDOM.createPortal(
    <div
      aria-expanded={isOpen ? 'true' : 'false'}
      className={classNames('fixed inset-0 z-50', {
        'pointer-events-none': !isOpen,
        'pointer-events-auto': isOpen,
      })}
    >
      <div
        onClick={onClose}
        className={classNames(
          'absolute inset-0 -z-10 bg-black/20',
          'ease-in-out transition duration-400',
          {
            'opacity-0': !isOpen,
            'opacity-100': isOpen,
          }
        )}
      ></div>

      <div
        className={classNames(
          'h-full mr-auto w-full p-4',
          'bg-white',
          'transition-transform duration-100 ease-in-out',
          {
            'translate-y-full': !isOpen,
            'translate-y-0': isOpen,
          }
        )}
      >
        <div className='flex h-full flex-col py-10'>
          <nav className='flex flex-1 flex-col justify-center gap-6 text-center'>
            <AppNavbarMobileMenuItem
              onClick={onClose}
              shouldShow={isOpen}
              isActive={pathname === Routes.home()}
              href={Routes.home()}
              title='Home'
            />
            <AppNavbarMobileMenuItem
              onClick={onClose}
              shouldShow={isOpen}
              isActive={pathname === Routes.about()}
              href={Routes.about()}
              title='About'
            />
            <AppNavbarMobileMenuItem
              onClick={onClose}
              shouldShow={isOpen}
              isActive={pathname === Routes.services()}
              href={Routes.services()}
              title='Services'
            />
            <AppNavbarMobileMenuItem
              onClick={onClose}
              shouldShow={isOpen}
              isActive={pathname === Routes.projects()}
              href={Routes.projects()}
              title='Projects'
            />
            <AppNavbarMobileMenuItem
              onClick={onClose}
              shouldShow={isOpen}
              isActive={pathname === Routes.contact()}
              href={Routes.contact()}
              title='Get in Touch'
            />
          </nav>
          <AppIconButton
            color='gold-outlined'
            size={'lg'}
            onClick={onClose}
            className='self-center'
          >
            <CrossIcon className={classNames('size-6')} />
          </AppIconButton>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default NavbarSectionMenuMobile;
