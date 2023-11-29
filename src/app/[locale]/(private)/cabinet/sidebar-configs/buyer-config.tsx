import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { KeyIcon } from 'components/icons/KeyIcon';
import { FlagIcon } from 'components/icons/FlagIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    { icon: <FlagIcon />, title: 'report', href: ROUTES.PRIVATE.REPORT },
  ],
};
