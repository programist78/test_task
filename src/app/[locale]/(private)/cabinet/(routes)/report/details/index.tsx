import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { BackButton } from 'components/common/profile/BackButton';
import { Section } from 'components/common/profile/Section';

import { EnumReportStatus } from 'types/enums';
import { IReportDetails } from 'types/reportTypes';
import s from './ReportDetails.module.scss';

import ReporterImg from 'assets/images/reporter/Reporter-1.png';
import { DownloadIcon } from 'components/icons/DownloadIcon';
import { MinorButton } from 'ui/components/Button';
import { UpdateStatusForm } from './UpdateStatusForm';
import { UserCard } from 'components/common/report/UserCard';

//! fetch data from server 
const data: IReportDetails = {
  reporter: {
    id: '1',
    userName: 'Bessie Cooper',
    email: 'smallpaul@me.com',
    avatarURL: ReporterImg.src,
  },
  suspect: {
    id: '2',
    avatarURL: ReporterImg.src,
    email: 'smallpaul@me.com',
    userName: 'Nareerat Sakuna',
  },
  id: '2',
  code: '58862',
  section: 'Alternative guidance councilor',
  attachment: 'Screenshot45902.png',
  createdAt: '4 Sep 2023  14:30',
  updatedAt: '4 Sep 2023  15:30',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  status: EnumReportStatus.ANSWERED,
};

export const ReportDetails: FC = () => {
  const t = useTranslations('ProfilePage.Report.Details');

  return (
    <Section>
      <Section.FlexHeader>
        <BackButton />
        <h3>{t('title')}</h3>
      </Section.FlexHeader>
      <Section.Body className={s.details}>
        <div className={s.users}>
          <UserCard user={data.reporter} type="reporter" />
          <UserCard user={data.suspect} type="suspect" />
        </div>
        <div className={s.info}>
          <div className={s.info_item}>
            <div className={s.label}>{t('time_date')}</div>
            <div className={s.text}>{data.createdAt}</div>
          </div>
          <div className={s.info_item}>
            <div className={s.label}>{t('section')}</div>
            <div className={s.text}>{data.section}</div>
          </div>
          <div className={s.info_item}>
            <div className={s.label}>{t('last_update')}</div>
            <div className={s.text}>{data.updatedAt}</div>
          </div>
          <div className={s.info_item}>
            <div className={s.label}>{t('description')}</div>
            <div className={s.text}>{data.description}</div>
          </div>
          <div className={s.info_item}>
            <div className={s.label}>{t('attachment')}</div>
            <MinorButton className={s.attachment_btn}>
              {data.attachment}
              <DownloadIcon />
            </MinorButton>
          </div>
        </div>
        <UpdateStatusForm status={data.status} />
      </Section.Body>
    </Section>
  );
};
