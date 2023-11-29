'use client';
import { ChatIcon } from 'components/icons/ChatIcon';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { IReportUser } from 'types/reportTypes';
import { Button, LinkButton } from 'ui/components/Button';
import { UserInfo } from '../UserInfo';

import { usePathname } from 'next/navigation';
import s from './UserCard.module.scss';

interface UserCardProps {
  user: IReportUser;
  type: 'reporter' | 'suspect';
}

export const UserCard: FC<UserCardProps> = ({ user, type }) => {
  const { avatarURL, email, userName } = user;

  const pathname = usePathname();
  const t = useTranslations('ProfilePage.Report.Details');

  const translatedTitle = type === 'reporter' ? t('reporter') : t('suspect');
  const translatedBanBtn =
    type === 'reporter' ? t('ban_reporter_btn') : t('ban_suspect_btn');

  const handleBanClick = () => {};

  return (
    <div className={s.wrapper}>
      <div className={s.title}>{translatedTitle}</div>
      <div className={s.content}>
        <UserInfo avatarURL={avatarURL} email={email} userName={userName} />
        <Button className={s.ban_btn} onClick={handleBanClick}>
          {translatedBanBtn}
        </Button>
        <LinkButton className={s.chat_btn} href={`${pathname}/${user.id}`}>
          <ChatIcon />
        </LinkButton>
      </div>
    </div>
  );
};
