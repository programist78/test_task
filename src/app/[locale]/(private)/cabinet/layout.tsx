import { ReactNode, useState } from 'react';
import { EnumRoles } from 'types/enums';

import { Container } from 'ui/components/Container';
import { Header } from 'components/header';
import { ProfileSidebar } from './components/ProfileSidebar';

import { buyerConfig } from './sidebar-configs/buyer-config';

import s from './Cabinet.module.scss';
import { IUser } from 'types/userTypes';

export interface ISidebarConfig {
  items: {
    icon: ReactNode;
    lightIcon?: ReactNode;
    title: string;
    href: string;
  }[];
  footerContent?: ReactNode;
}

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const [user, setUser] = useState<IUser>();
  let currentConfig: ISidebarConfig = buyerConfig;

  //set user from query

  return (
    <>
      <Header />
      <main className={s.profile}>
        <Container>
          <div className={s.profile_wrapper}>
            <ProfileSidebar config={currentConfig} user={user} />
            {children}
          </div>
        </Container>
      </main>
    </>
  );
}
