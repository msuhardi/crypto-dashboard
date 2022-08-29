import React from 'react';

import DragIc from '@assets/icons/drag';
import InfoIc from '@assets/icons/info';

import Tooltip from '@components/Tooltip';

import {
  Wrapper,
  TitleWrapper,
  Title,
  Draggable,
  TableContainer,
  TableWrapper,
  Th,
  Td,
  Tr,
  Row,
  InfoIcWrapper
} from './styles';

const Table = ({
  headers,
  rows,
  title
}: {
  headers: string[];
  rows: string[][];
  title: string;
}) => {
  return (
    <Wrapper>
      <Row>
        <TitleWrapper>
          <Title>{title}</Title>
          <Tooltip
            content="This can be filled by additional, less important information about this graph"
            theme="allium-info"
          >
            <InfoIcWrapper>
              <InfoIc height={12} />
            </InfoIcWrapper>
          </Tooltip>
        </TitleWrapper>
        <Draggable>
          <DragIc height={16} />
        </Draggable>
      </Row>
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
    </Wrapper>
  );
};

export default Table;
