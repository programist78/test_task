'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { userShema } from 'utils/schemes/user-shema';

import { SeachForm } from 'components/common/forms/SeacrhForm';

export interface IReportForm {
  report_code?: string;
  date_from?: string;
  date_to?: string;
}

interface SearchFormProps {
  onSearch: (val: IReportForm) => void;
}

export const Form: FC<SearchFormProps> = ({ onSearch }) => {
  const t = useTranslations('ProfilePage.Report');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReportForm>({
    resolver: yupResolver(userShema.reportSearch),
  });

  const search = {
    name: 'report_code',
    label: t('search_label'),
    placeholder: t('search_placeholder'),
  };

  const fields = {
    label: t('date_label'),
    items: [
      {
        name: 'date_from',
        placeholder: t('date_from'),
      },
      {
        name: 'date_to',
        placeholder: t('date_to'),
      },
    ],
  };

  return (
    <SeachForm
      search={search}
      fields={fields}
      withoutFilter={true}
      errors={errors}
      register={register}
      handleSubmit={handleSubmit}
      onSearch={onSearch}
    />
  );
};
