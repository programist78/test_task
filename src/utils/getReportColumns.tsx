import { Column } from 'react-table';

import { TableButton } from 'components/common/Table/button';
import { StatusBlock } from 'components/common/StatusBlock';
import { UserAvatarWithCredentials } from 'components/common/UserAvatar';

interface IGetReportColumns {
  href: string;
}

export const getReportColumns = ({ href }: IGetReportColumns) => {
  const columns: Column<any>[] = [
    {
      Header: 'report_code',
      accessor: (row) => row.report?.code || '!!! Need code',
      disableSortBy: true,
    },
    {
      Header: 'reporter',
      accessor: (row) => row.reporter || '!!! Need reporter',
      Cell: ({ value }) => (
        <UserAvatarWithCredentials
          size={48}
          avatarURL={value.avatarUrl}
          userName={value.name}
          userEmail={value.email}
        />
      ),
      sortType: (rowA, rowB): number =>
        rowA.original.reporter.name.localeCompare(rowB.original.reporter.name),
    },
    {
      Header: 'report_text',
      accessor: (row) => row.report.text || '!!! Need Text',
      disableSortBy: true,
    },
    {
      Header: 'report_date',
      accessor: (row) => row.report.date || '!!! Need Date',
      // sortType: 'datetime',
    },
    {
      Header: 'status',
      accessor: (row) => row.report.status || '!!! Need Status',
      Cell: ({ value }) => <StatusBlock status={value} />,
      disableSortBy: true,
    },

    {
      Header: 'offers',
      accessor: (row) => row.report.code || '!!! Need Code',
      Cell: ({ value }) => <TableButton href={`${href}/${value}`} />,
      disableSortBy: true,
    },
  ];

  return columns;
};
