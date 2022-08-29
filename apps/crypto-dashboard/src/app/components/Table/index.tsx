import React from 'react';

import { TableContainer, TableWrapper, Th, Td, Tr } from './styles';

const Table = ({ headers, rows }: { headers: string[]; rows: string[][] }) => {
  return (
    <TableContainer>
      <TableWrapper>
        <thead>
          <Tr>
            {headers.map((header, i) => (
              <Th key={`header-${i}`}>{header}</Th>
            ))}
          </Tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <Tr key={`row-${i}`} even={i % 2 === 0}>
              {row.map((cell, j) => (
                <Td key={`cell-${i}-${j}`}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </TableWrapper>
    </TableContainer>
  );
};

export default Table;
