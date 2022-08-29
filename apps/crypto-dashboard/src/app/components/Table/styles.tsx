import styled from 'styled-components';

const TableContainer = styled.div`
  position: relative;
  overflow-y: scroll;
`;

const TableWrapper = styled.table`
  table-layout: auto;
  border-spacing: 0;
  padding: ${(props) => props.theme.gutter.horizontal * 5}px;
  padding-top: 0;
  width: 100%;
  height: 100px;
  position: relative;
  overflow-y: scroll;
`;

const Th = styled.th`
  padding: 14px 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 1.5px;
  text-align: left;
  position: sticky;
  top: 0;
  color: ${(props) => props.theme.color.blue};
  background-color: ${(props) => props.theme.color.tertiaryColor};
`;

const Td = styled.td`
  padding: 14px 18px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  font-size: 0.95em;

  &:last-child {
    border-right: none;
  }
`;

const Tr = styled.tr<{ even?: boolean }>`
  &:last-child > td {
    border-bottom: none;
  }
`;

export { TableContainer, TableWrapper, Th, Td, Tr };
