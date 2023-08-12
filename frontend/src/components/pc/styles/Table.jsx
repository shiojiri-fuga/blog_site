import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border-right: 1px solid #ddd;
  width: 50%;
  &:last-child {
    border-right: none;
  }
`;

const formatAge = (minAge, maxAge) => {
  if (maxAge === null) {
    return `${minAge}歳以上`;
  } else {
    return `${minAge}~${maxAge}`;
  }
};

const formatRange = (minValue, maxValue, unit) => {
  if (maxValue === null) {
    return `約${minValue}${unit}`;
  } else {
    return `${minValue}~${maxValue}${unit}`;
  }
};

const BoardGameInfoTable = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <tbody>
            <TableRow>
              <TableCell>タイトル:</TableCell>
              <TableCell>{data.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>対象年齢:</TableCell>
              <TableCell>{formatAge(data.min_age, data.max_age)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>対象人数:</TableCell>
              <TableCell>{data.players}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>プレイ時間:</TableCell>
              <TableCell>{formatRange(data.min_play_time, data.max_play_time, '分')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>デザイナー:</TableCell>
              <TableCell>{data.designer}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>参考販売価格:</TableCell>
              <TableCell>{data.price}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ジャンル:</TableCell>
              <TableCell>{data.genre}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>販売元:</TableCell>
              <TableCell>{data.publisher}</TableCell>
            </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default BoardGameInfoTable;