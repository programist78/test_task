'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import s from './ReportInfo.module.scss';
import { ParticipantCard } from '../ParticipantCard';
import { ColumnTemplate } from '../ColumnTemplate';
import { DownloadIcon } from 'components/icons/DownloadIcon';
import { SecondaryButton } from 'ui/components/Button';

interface User {
  name: string;
  email: string;
  avatarURL: string;
  chatHref: string;
}

interface ReportInfo {
  title: string;
  body: Date | string;
}

export interface ReportInfoProps {
  reporter: User;
  suspect: User;
  dataAndTime: string;
  sectionName: string;
  lastUpdate: string;
  description: string;
  attachmentFileName: string;
  className?: string;
  handleReporterBan: () => void;
  handleSuspectBan: () => void;
  handleDownloadAttachment: () => void;
}

export const ReportInfo: FC<ReportInfoProps> = ({
  reporter,
  suspect,
  dataAndTime,
  sectionName,
  lastUpdate,
  description,
  attachmentFileName,
  className,
  handleReporterBan,
  handleSuspectBan,
  handleDownloadAttachment,
}) => {
  const t = useTranslations('ProfilePage.CurrentReport');

  return (
    <div className={className ? className : ''}>
      <div className={s.info_row}>
        <ParticipantCard
          header={t('reporter')}
          banButtonLabel={t('ban_reporter')}
          user={reporter}
          handleParticipantBan={handleReporterBan}
          key={reporter.name}
          chatHref={reporter.chatHref}
        />
        <ParticipantCard
          header={t('suspect')}
          banButtonLabel={t('ban_suspect')}
          user={suspect}
          handleParticipantBan={handleSuspectBan}
          key={suspect.name}
          chatHref={suspect.chatHref}
        />
      </div>
      <div className={s.info_row}>
        <ColumnTemplate headerLabel={t('report_date_and_time')}>
          {dataAndTime}
        </ColumnTemplate>
        <ColumnTemplate headerLabel={t('section')}>
          {sectionName}
        </ColumnTemplate>
        <ColumnTemplate headerLabel={t('last_update')}>
          {lastUpdate}
        </ColumnTemplate>
      </div>
      <div className={s.info_row}>
        <ColumnTemplate headerLabel={t('description')}>
          {description}
        </ColumnTemplate>
      </div>
      <div className={s.info_attachment}>
        <ColumnTemplate headerLabel={t('attachment')}>
          <SecondaryButton
            className={s.info_attachment_btn}
            onClick={handleDownloadAttachment}
          >
            <span>{attachmentFileName}</span>
            <DownloadIcon />
          </SecondaryButton>
        </ColumnTemplate>
      </div>
    </div>
  );
};
