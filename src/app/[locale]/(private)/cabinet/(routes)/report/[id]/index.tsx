'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import s from './CurrentReport.module.scss';

import { Section } from 'components/common/profile/Section';
import { BackButton } from 'components/common/profile/BackButton';
import { useForm } from 'react-hook-form';
import { UpdateForm } from 'components/common/forms/UpdateForm';
import { ReportInfo, ReportInfoProps } from '../../../components/ReportInfo';
interface IDetailsForm {
  answered_status: string;
}

export const CurrentReport: FC = () => {
  const t = useTranslations('ProfilePage.CurrentReport');
  const [reportInfoProps, setReportInfoProps] = useState<
    ReportInfoProps | undefined
  >();

  //set report info from query

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm<IDetailsForm>();

  const handleUpdateForm = () => {};
  const handleReporterBan = () => {};
  const handleSuspectBan = () => {};
  const handleDownloadAttachment = () => {};

  return (
    <Section>
      <Section.FlexHeader>
        <BackButton />
        <h3>{t('title')}</h3>
      </Section.FlexHeader>
      <Section.Body className={s.body}>
        {reportInfoProps && <ReportInfo {...reportInfoProps} />}
      </Section.Body>
      <div className={s.formWrapper}>
        <UpdateForm
          onUpdate={handleUpdateForm}
          fields={[{ name: 'answered', placeholder: t('answered') }]}
          submitLabel={t('update_status')}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
    </Section>
  );
};
