import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { KeyIcon } from 'components/icons/KeyIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { TransparentAchiveIcon } from 'components/icons/AchiveIcon';
import { DashboardIcon } from 'components/icons/DashboardIcon';
import { StoreIcon } from 'components/icons/StoreIcon';
import { CartIcon } from 'components/icons/CartIcon';
import { PaymentIcon } from 'components/icons/PaymentIcon';
import { FlagIcon } from 'components/icons/FlagIcon';
import { ExitIcon } from 'components/icons/ExitIcon';
import { SectionsIcon } from 'components/icons/SectionsIcon';
import { ManIcon } from 'components/icons/ManIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    {
      icon: <DashboardIcon />,
      title: 'dashboard',
      href: ROUTES.PRIVATE.DASHBOARD,
    },
    { icon: <MessageIcon />, title: 'messages', href: ROUTES.PRIVATE.MESSAGES },
    {
      icon: <SectionsIcon />,
      title: 'sections',
      href: ROUTES.PRIVATE.SECTIONS,
    },
    {
      icon: <StoreIcon />,
      title: 'seller',
      href: ROUTES.PRIVATE.SELLER.TOP_SELLERS,
    },
    {
      icon: <CartIcon />,
      title: 'buyers',
      href: ROUTES.PRIVATE.SELLER.SALES_OFFERS,
    },
    {
      icon: <PaymentIcon />,
      title: 'financial',
      href: ROUTES.PRIVATE.SELLER.FINANCIAL_BALANCE,
    },
    {
      icon: <TransparentAchiveIcon />,
      title: 'achievement',
      href: ROUTES.PRIVATE.ACHIEVEMENT,
    },
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    {
      icon: <FlagIcon />,
      lightIcon: <ManIcon />,
      title: 'report',
      href: ROUTES.PRIVATE.REPORT.INBOX,
    },
    { icon: <ExitIcon />, title: 'logout', href: ROUTES.HOME },
  ],
};
