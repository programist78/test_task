import { IReport } from 'types/reportTypes';
import { Report } from '.';
import { EnumReportStatus } from 'types/enums';
import { ROUTES } from 'constants/routes';

import ReporterImg from 'assets/images/reporter/Reporter-1.png';

const reports: IReport[] = [
  {
    id: '2',
    code: '58862',
    reporter: {
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
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
  {
    id: '4',
    code: '58862',
    reporter: {
      userName: 'Cody Fisher',
      email: 'michael.mitc@example.com',
      avatarURL: ReporterImg.src,
    },
    createdAt: '05/06/20, 11:30',
    text: 'Penny Drop Report',
    status: EnumReportStatus.WAITING,
  },
];

export default async function ReportPage() {
  return (
    <Report
      isTwoFactorEnabled={false}
      reports={reports}
      href={ROUTES.PRIVATE.REPORT}
    />
  );
}
