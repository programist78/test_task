'use client';
import purchaseProducts from 'constants/mockData';
import { PaymentDetails } from 'components/common/payment/PaymentDetails';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { IPurchaseProduct } from 'types/shopTypes';

const Details = () => {
  const t = useTranslations('ProfilePage.Payment.Details');
  const searchParams = useSearchParams();
  const search = searchParams.get('productId');

  const clickedProduct = (): IPurchaseProduct[] => {
    return purchaseProducts.filter((product) => search === product.id);
  };

  const {
    price,
    bankCard,
    acceptedAt,
    status,
    boughtBy,
    soldBy,
    payment: { method, paymentCode },
  } = clickedProduct()[0];

  return (
    <PaymentDetails
      blocks={[
        { name: `${paymentCode}`, title: t('payment_code') },
        { name: `${status}`, title: t('status') },
        { name: `${method}`, title: t('method') },
        { name: `${bankCard}`, title: t('card_number') },
      ]}
      types={[
        { name: `$${price}`, title: t('amount') },
        { name: `${acceptedAt}`, title: t('time_date') },
        {
          name: t('to_product'),
          title: t('product'),
          isLink: true,
          href: 'Running-product',
        },
      ]}
      persons={[
        {
          fullName: boughtBy.userName,
          type: 'Buyer',
          email: boughtBy.email,
        },
        {
          fullName: soldBy.userName,
          type: 'Seller',
          email: soldBy.email,
        },
      ]}
    />
  );
};

export default Details;
