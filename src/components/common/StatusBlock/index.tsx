import { FC } from 'react';
import { EnumPaymentStatus, EnumReportStatus } from 'types/enums';

import s from './StatusBlock.module.scss';

const statuses = {
  [EnumPaymentStatus.PENDING]: 'status_pending',
  [EnumPaymentStatus.SUCCEEDED]: 'status_succeeded',
  [EnumPaymentStatus.CANCELED]: 'status_canceled',
  [EnumPaymentStatus.FAILED]: 'status_failed',
  [EnumReportStatus.ANSWERED]: 'status_succeeded',
  [EnumReportStatus.WAITING]: 'status_pending',
  [EnumReportStatus.CLOSED]: 'status_canceled',
};

interface StatusBlockProps {
  status: EnumPaymentStatus | EnumReportStatus;
}

export const StatusBlock: FC<StatusBlockProps> = ({ status }) => {
  return (
    <div
      className={`${s.status} ${s[statuses[status as keyof typeof statuses]]}`}
    >
      <span>{status}</span>
    </div>
  );
};
