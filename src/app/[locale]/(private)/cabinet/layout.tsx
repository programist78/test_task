import { ReactNode } from 'react';
import { Container } from 'ui/components/Container';
import { Header } from 'components/header';
import { ProfileSidebar } from './components/ProfileSidebar';
import { buyerConfig } from './sidebar-configs/buyer-config';
import s from './Cabinet.module.scss';
import { user } from 'constants/mockData';

export interface ISidebarConfig {
  items: {
    icon: ReactNode;
    title: string;
    href: string;
  }[];
  footerContent?: ReactNode;
}

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  let currentConfig: ISidebarConfig = buyerConfig;

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
