'use client';

import { PaymentHistory } from 'components/common/PaymentHistory';
import { Section } from 'components/common/profile/Section';
import purchaseProducts from 'constants/mockData';
import { ROUTES } from 'constants/routes';

function Payment() {
  const url = ROUTES.PRIVATE.PAYMENT_DETAILS;

  return (
    <Section>
      <Section.Header>
        <h3>{'Financial'}</h3>
      </Section.Header>
      <Section.Body>
        <PaymentHistory boughtProducts={purchaseProducts} href={url} />
      </Section.Body>
    </Section>
  );
}

export default Payment;
