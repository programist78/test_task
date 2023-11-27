'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { userShema } from 'utils/schemes/user-shema';

import { Button } from 'ui/components/Button';

import { DropdownField } from 'components/common/DropdownField';
import { EnumReportStatus } from 'types/enums';
import s from './ReportDetails.module.scss';

interface IUpdateStatus {
  status: EnumReportStatus;
}

interface IUpdateStatusProps {
  status: EnumReportStatus;
}

export const UpdateStatusForm: FC<IUpdateStatusProps> = ({ status }) => {
  const t = useTranslations('ProfilePage.Report.Details');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateStatus>({
    defaultValues: {
      status,
    },
    resolver: yupResolver(userShema.updateReportStatus),
  });

  const handleUpdateStatus = ({ status }: IUpdateStatus) => {};

  return (
    <form className={s.form} onSubmit={handleSubmit(handleUpdateStatus)}>
      <DropdownField register={register} errors={errors} name="status">
        {Object.values(EnumReportStatus).map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </DropdownField>
      <Button className={s.submit_btn} type="submit">
        {t('update_status_btn')}
      </Button>
    </form>
  );
};
