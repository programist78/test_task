import { UserAvatar } from 'components/common/UserAvatar';
import React, { FC } from 'react';

import s from './Report.module.scss';

interface IReporterInfoProps {
  avatarURL: string;
  userName: string;
  email: string;
}

export const ReporterInfo: FC<IReporterInfoProps> = ({avatarURL, email, userName}) => {
  return (
    <div className={s.reporterInfo}>
      <UserAvatar
        avatarURL={avatarURL}
        userName={userName}
        size={48}
      />
      <div className={s.reporterInfo_content}>
        <div className={s.reporterInfo_name}>{userName}</div>
        <div className={s.reporterInfo_email}>{email}</div>
      </div>
    </div>
  );
};
