import { FC } from 'react';
import { EnumPaymentStatus } from 'types/enums';
import { EnumReportStatus } from 'types/enums';

import s from './StatusBlock.module.scss';

const statuses = {
  [EnumPaymentStatus.PENDING]: 'status_pending',
  [EnumPaymentStatus.SUCCEEDED]: 'status_succeeded',
  [EnumPaymentStatus.CANCELED]: 'status_canceled',
  [EnumPaymentStatus.FAILED]: 'status_failed',

  [EnumReportStatus.ANSWERED]: 'status_answered',
  [EnumReportStatus.CLOSED]: 'status_closed',
  [EnumReportStatus.WAITING]: 'status_waiting',
};

type Status = EnumPaymentStatus | EnumReportStatus;
interface StatusBlockProps {
  status: Status;
}

export const StatusBlock: FC<StatusBlockProps> = ({ status }) => {
  return (
    <div className={`${s.status} ${s[statuses[status]]}`}>
      <span>{status}</span>
    </div>
  );
};
