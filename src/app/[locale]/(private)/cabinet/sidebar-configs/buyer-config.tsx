import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';
import { KeyIcon } from 'components/icons/KeyIcon';
import { PaymentIcon } from 'components/icons/PaymentIcon';
import { AchiveIcon } from 'components/icons/AchiveIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { ExitIcon } from 'components/icons/ExitIcon';
import { ListIcon } from 'components/icons/ListIcon';
import { CartIcon } from 'components/icons/CartIcon';
import { StoreIcon } from 'components/icons/StoreIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    { icon: <MessageIcon />, title: 'messages', href: ROUTES.PRIVATE.MESSAGES },
    {
      icon: <ListIcon />,
      title: 'sections',
      href: ROUTES.PUBLIC.CATEGORIES,
    },

    {
      icon: <StoreIcon />,
      title: 'sellers',
      href: ROUTES.PUBLIC.CATEGORIES,
    },
    {
      icon: <CartIcon />,
      title: 'buyers',
      href: ROUTES.PUBLIC.CATEGORIES,
    },
    { icon: <PaymentIcon />, title: 'payment', href: ROUTES.PRIVATE.PAYMENT },

    {
      icon: <AchiveIcon />,
      title: 'achievement',
      href: ROUTES.PRIVATE.ACHIEVEMENT,
    },
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    {
      icon: <ExitIcon />,
      title: 'logout',
      href: ROUTES.PUBLIC.CATEGORIES,
    },
  ],
};
