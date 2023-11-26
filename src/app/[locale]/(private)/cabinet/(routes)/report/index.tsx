'use client';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Table } from 'components/common/Table';
import { Section } from 'components/common/profile/Section';
import { IReport } from 'types/reportTypes';
import { getReportColumns } from 'utils/getReportColumns';
import { Form, IReportForm } from './Form';

import s from './Report.module.scss';

interface ReportProps {
  isTwoFactorEnabled?: boolean;
  reports: IReport[];
  href: string;
}

export const Report: FC<ReportProps> = ({ reports, href }) => {
  const [filteredReports, setFilteredReports] = useState(reports);
  const t = useTranslations('ProfilePage.Report');
  const tableTranslate = useTranslations('ProfilePage.Report.Table');

  const handleSearch = ({ report_code }: IReportForm) => {
    let searchReports = reports;

    if (report_code) {
      searchReports = reports?.filter((report) =>
        report.code.toLowerCase().includes(report_code.toLowerCase().trim())
      );
    }

    setFilteredReports(searchReports);
  };

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        <Form onSearch={handleSearch} />
      </Section.Body>
      {filteredReports.length ? (
        <Table
          data={filteredReports}
          columns={getReportColumns({ href })}
          translateFn={tableTranslate}
          wrapperClassName={s.report_tableWrapper}
        />
      ) : (
        <div className={s.report_noResults}>{t('Table.no_results')}</div>
      )}
    </Section>
  );
};
