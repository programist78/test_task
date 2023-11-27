import { ChatIcon } from 'components/icons/ChatIcon';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Button } from 'ui/components/Button';
import { UserInfo } from '../UserInfo';

import s from './UserCard.module.scss';

interface UserCardProps {
  user: {
    avatarURL: string;
    email: string;
    userName: string;
  };
  type: 'reporter' | 'suspect';
}

export const UserCard: FC<UserCardProps> = ({ user, type }) => {
  const { avatarURL, email, userName } = user;
  const t = useTranslations('ProfilePage.Report.Details');
  const translatedTitle = type === 'reporter' ? t('reporter') : t('suspect');
  const translatedBanBtn =
    type === 'reporter' ? t('ban_reporter_btn') : t('ban_suspect_btn');
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{translatedTitle}</div>
      <div className={s.content}>
        <UserInfo avatarURL={avatarURL} email={email} userName={userName} />
        <Button className={s.ban_btn}>{translatedBanBtn}</Button>
        <Button className={s.chat_btn}>
          <ChatIcon />
        </Button>
      </div>
    </div>
  );
};
