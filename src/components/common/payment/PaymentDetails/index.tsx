import { FC } from 'react';
import { useTranslations } from 'next-intl';

import {
  IOrderDetailBlock,
  IOrderDetailType,
  IOrderPersonsInfo,
  OrderDetailBlocks,
  OrderDetailTypes,
  OrderPersonsInfo,
} from 'components/common/OrdertDetail';
import { BackButton } from 'components/common/profile/BackButton';
import { Section } from 'components/common/profile/Section';

import s from './PaymentDetails.module.scss';

interface PaymentDetailsProps {
  blocks: (IOrderDetailBlock | null)[];
  types: (IOrderDetailType | null)[];
  persons: (IOrderPersonsInfo | null)[];
}

export const PaymentDetails: FC<PaymentDetailsProps> = ({
  blocks,
  types,
  persons,
}) => {
  const t = useTranslations('ProfilePage.Payment.Details');

  return (
    <Section>
      <Section.FlexHeader>
        <BackButton />
        <h3>{t('title')}</h3>
      </Section.FlexHeader>
      <Section.Body className={s.details}>
        <OrderPersonsInfo persons={persons} />
        <OrderDetailBlocks listClassName={s.blocks} blocks={blocks} />
        <OrderDetailTypes listClassName={s.types} types={types} />
      </Section.Body>
    </Section>
  );
};
