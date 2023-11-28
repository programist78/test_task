'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { userShema } from 'utils/schemes/user-shema';

import { Button } from 'ui/components/Button';

import { FieldBox } from 'components/common/fieldBox';
import s from './Chat.module.scss';
import { SendIcon } from 'components/icons/SendIcon';

interface ISendMessage {
  content: string;
}

export const SendMessageForm: FC = () => {
  const t = useTranslations('ProfilePage.Report.Chat');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendMessage>({
    resolver: yupResolver(userShema.sendMessage),
  });

  const handleUpdateStatus = ({ content }: ISendMessage) => {};

  return (
    <form className={s.form} onSubmit={handleSubmit(handleUpdateStatus)}>
      <FieldBox
        className={s.field}
        errors={errors}
        register={register}
        name="content"
        placeholder={t('message_placeholder')}
      />
      <Button className={s.send_btn} type="submit">
        {t('send_btn')}
        <SendIcon />
      </Button>
    </form>
  );
};
