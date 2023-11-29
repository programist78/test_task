import { CellProps, Column } from 'react-table';

import { IReport } from 'types/reportTypes';

import { UserInfo } from 'components/common/report/UserInfo';
import { StatusBlock } from 'components/common/StatusBlock';
import { TableButton } from 'components/common/Table/button';

interface IGetReportColumns {
  href: string;
}

export const getReportColumns = ({ href }: IGetReportColumns) => {
  const columns: Column<IReport>[] = [
    {
      Header: 'report_code',
      accessor: (row) => row.code || '!!! Need code',
      disableSortBy: true,
    },
    {
      Header: 'reporter',
      accessor: (row) => row.reporter.userName,
      Cell: ({ row }: CellProps<IReport>) => {
        const { reporter } = row.original;

        return (
          <UserInfo
            avatarURL={reporter.avatarURL}
            email={reporter.email}
            userName={reporter.userName}
          />
        );
      },
      sortType: (rowA, rowB, columnId, desc) => {
        const userNameA = rowA.original.reporter.userName.toLowerCase();
        const userNameB = rowB.original.reporter.userName.toLowerCase();

        if (userNameA > userNameB) return 1;

        if (userNameB > userNameA) return -1;

        return 0;
      },
    },
    {
      Header: 'text',
      accessor: (row) => row.text,
      disableSortBy: true,
    },
    {
      Header: 'time_date',
      accessor: (row) => row.createdAt || '!!! Need Date',
      // sortType: 'datetime'
    },
    {
      Header: 'status',
      accessor: 'status',
      Cell: ({ value }) => <StatusBlock status={value} />,
      disableSortBy: true,
    },
    {
      Header: 'offers',
      Cell: ({ row }: CellProps<IReport>) => {
        const originalItem = row.original;

        // return <TableButton href={`${href}?reportId=${originalItem.id}`} />;
        return <TableButton href={`${href}/${originalItem.id}`} />;
      },
    },
  ];

  return columns;
};
