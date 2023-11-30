import { FC, ReactNode } from 'react';

import s from './ColumnTemplate.module.scss';

interface ColumnTemplateProps {
  headerLabel: string;
  className?: string;
  children: ReactNode;
}

export const ColumnTemplate: FC<ColumnTemplateProps> = ({
  headerLabel,
  className,
  children,
}) => {
  return (
    <div className={`${s.card} ${className ? className : ''}`.trim()}>
      <div className={s.card_header}>{headerLabel}</div>
      <div className={s.card_body}>{children}</div>
    </div>
  );
};
