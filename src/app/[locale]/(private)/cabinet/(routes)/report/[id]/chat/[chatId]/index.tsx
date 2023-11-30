'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import s from './CurrentChat.module.scss';

import { Section } from 'components/common/profile/Section';
import { BackButton } from 'components/common/profile/BackButton';
import { useParams } from 'next/navigation';
import { SecondaryButton } from 'ui/components/Button';
import {
  IReportUser,
  ReportChat,
} from 'app/[locale]/(private)/cabinet/components/ReportChat';

interface IDetailsForm {
  answered_status: string;
}

export const CurrentChat: FC = () => {
  const t = useTranslations('ProfilePage.Chat');
  const [user, setUser] = useState<IReportUser | undefined>();

  const params = useParams();

  const handleSelectChat = () => {};
  const handleCloseReport = () => {};

  return (
    <Section>
      <Section.FlexHeader>
        <BackButton />
        <h3>{'Nareerat Sakuna'}</h3>
        <SecondaryButton onClick={handleCloseReport} className={s.chat_button}>
          <span>{t('close_report')}</span>
        </SecondaryButton>
      </Section.FlexHeader>
      <Section.Body>{user && <ReportChat user={user} />}</Section.Body>
    </Section>
  );
};
