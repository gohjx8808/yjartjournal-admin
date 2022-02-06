import {
  chakra,
  Icon,
  Skeleton,
  Table, Tbody, Td, Th, Thead, Tr,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Column, useSortBy, useTable } from 'react-table';
import { caseInsensitiveSort, dateSort } from '../../../helper';
import { getUserList } from '../src/usersApis';

const UserList = () => {
  const { data, isLoading } = useQuery('get', getUserList, {
    select: (d) => {
      const list = d.val();
      const processedList:any[] = [];
      Object.keys(list).map((key) => {
        const user = { ...list[key], uid: key };
        processedList.push(user);
        return null;
      });
      return processedList;
    },
  });

  const tableData = useMemo(
    () => data || [],
    [data],
  );

  const columns:Column<user.UserData>[] = useMemo(() => [
    {
      Header: 'UID',
      accessor: 'uid',
      disableSortBy: true,
    },
    {
      Header: 'Email',
      accessor: 'email',
      sortType: (prev:any, curr:any, columnId:string) => caseInsensitiveSort(prev, curr, columnId),
    },
    {
      Header: 'Name',
      accessor: 'fullName',
      sortType: (prev:any, curr:any, columnId:string) => caseInsensitiveSort(prev, curr, columnId),
    },
    {
      Header: 'Gender',
      accessor: 'gender',
      Cell: ({ value }) => (value === 'M' ? 'Male' : 'Female'),
      disableSortBy: true,
    },
    {
      Header: 'Date of Birth',
      accessor: 'dob',
      Cell: ({ value }) => dayjs(value).format('DD MMM YYYY'),
      sortType: (prev:any, curr:any, columnId:string) => dateSort(prev, curr, columnId),
    },
    {
      Header: 'Phone Number',
      accessor: 'phoneNumber',
      disableSortBy: true,
    },
  ], []);

  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = useTable(
    {
      columns,
      data: tableData,
    },
    useSortBy,
  );

  console.log(data);

  return (
    <Skeleton isLoaded={!isLoading}>
      <Table {...getTableProps}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // @ts-ignore
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <chakra.span pl="4">
                    {/* @ts-ignore */}
                    {column.isSorted && (
                      // @ts-ignore
                      column.isSortedDesc ? (
                        <Icon as={FaCaretDown} aria-label="sorted descending" />
                      ) : (
                        <Icon as={FaCaretUp} aria-label="sorted ascending" />
                      )
                    )}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Skeleton>
  );
};

export default UserList;
