'use client';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Table } from 'components/common/Table';
import { Section } from 'components/common/profile/Section';
import { IReport } from 'types/reportTypes';
import { getReportColumns } from 'utils/getReportColumns';
import { Form, IReportForm } from './Form';

import s from './Report.module.scss';

import { EnumReportStatus } from 'types/enums';

import ReporterImg from 'assets/images/reporter/Reporter-1.png';
import { usePathname } from 'next/navigation';

//! fetch data from server
const reports: IReport[] = [
  {
    id: '2',
    code: '58862',
    reporter: {
      id: '1',
      userName: 'Be Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.ANSWERED,
  },
  {
    id: '1',
    code: '58862',
    reporter: {
      id: '2',
      userName: 'Bl Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.ANSWERED,
  },
  {
    id: '3',
    code: '58862',
    reporter: {
      id: '3',
      userName: 'Ac Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.CLOSED,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      id: '4',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '5',
    code: '58862',
    reporter: {
      id: '5',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '6',
    code: '58862',
    reporter: {
      id: '6',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '7',
    code: '58862',
    reporter: {
      id: '7',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '8',
    code: '58862',
    reporter: {
      id: '8',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '9',
    code: '58862',
    reporter: {
      id: '9',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '10',
    code: '58862',
    reporter: {
      id: '10',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '11',
    code: '58862',
    reporter: {
      id: '11',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '12',
    code: '58862',
    reporter: {
      id: '12',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '13',
    code: '58862',
    reporter: {
      id: '13',
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
];

export const Report: FC = () => {
  const pathname = usePathname();
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
          columns={getReportColumns({ href: pathname })}
          translateFn={tableTranslate}
          wrapperClassName={s.report_tableWrapper}
        />
      ) : (
        <div className={s.report_noResults}>{t('Table.no_results')}</div>
      )}
    </Section>
  );
};
