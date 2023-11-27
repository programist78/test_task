'use client';
import { FC, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useAuth } from 'utils/hooks/useAuth';
import { ROUTES } from 'constants/routes';

import { DropDown } from 'ui/components/DropDown';
import { AchiveIcon, TransparentAchiveIcon } from 'components/icons/AchiveIcon';
import { MessageIcon } from 'components/icons/MessageIcon';

import { MoonIcon } from 'components/icons/MoonIcon';

import { ThemeSwitcher } from 'components/common/ThemeSwitcher';

import { UserAvatar } from 'components/common/UserAvatar';

import s from '../../Header.module.scss';
import { KeyIcon } from 'components/icons/KeyIcon';
import { PaymentIcon } from 'components/icons/PaymentIcon';
import { ListIcon } from 'components/icons/ListIcon';
import { StoreIcon } from 'components/icons/StoreIcon';
import { CartIcon } from 'components/icons/CartIcon';
import { ExitIcon } from 'components/icons/ExitIcon';

export const HeaderAuthorizedAvatar: FC = () => {
  const t = useTranslations('Header.Dropdowns');

  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => setIsOpen(true);
  const onMouseLeave = () => setIsOpen(false);

  const accountBox = {
    title: t('account'),
    list: [
      {
        icon: <MessageIcon />,
        title: 'Messages',
        href: ROUTES.PRIVATE.MESSAGES,
      },
      {
        icon: <ListIcon />,
        title: 'Sections',
        href: ROUTES.PUBLIC.CATEGORIES,
      },

      {
        icon: <StoreIcon />,
        title: 'Sellers',
        href: ROUTES.PUBLIC.CATEGORIES,
      },
      {
        icon: <CartIcon />,
        title: 'Buyers',
        href: ROUTES.PUBLIC.CATEGORIES,
      },
      {
        icon: <PaymentIcon />,
        title: 'Payment',
        href: ROUTES.PRIVATE.PAYMENT,
      },

      {
        icon: <AchiveIcon />,
        title: 'Achievement',
        href: ROUTES.PRIVATE.ACHIEVEMENT,
      },
      {
        icon: <KeyIcon />,
        title: 'Security',
        href: ROUTES.PRIVATE.SECURITY,
      },
    ],
  };

  return (
    <div
      className={s.dropdown}
      ref={parentRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <UserAvatar
        avatarURL={''}
        userName={'U'}
        className={s.header_avatar}
        size={48}
      />
      <DropDown
        isOpen={isOpen}
        parent={parentRef}
        className={s.dropdown_container}
      >
        <div className={s.dropdown_box}>
          <span className={s.dropdown_title}>{t('account')}</span>
          <ul className={s.dropdown_list}>
            {accountBox.list.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className={s.dropdown_btn}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.dropdown_box}>
          <span className={s.dropdown_title}>{t('theme')}</span>
          <ul className={s.dropdown_list}>
            <li className={s.dropdown_btn}>
              <MoonIcon />
              <span>{t('dark_mode')}</span>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </DropDown>
    </div>
  );
};
