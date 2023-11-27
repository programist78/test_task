import { UserAvatar } from 'components/common/UserAvatar';
import React, { FC } from 'react';

import s from './UserInfo.module.scss';

interface IUserInfoProps {
  avatarURL: string;
  userName: string;
  email: string;
}

export const UserInfo: FC<IUserInfoProps> = ({
  avatarURL,
  email,
  userName,
}) => {
  return (
    <div className={s.user}>
      <UserAvatar avatarURL={avatarURL} userName={userName} size={48} />
      <div className={s.user_content}>
        <div className={s.user_name}>{userName}</div>
        <div className={s.user_email}>{email}</div>
      </div>
    </div>
  );
};
