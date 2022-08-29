import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.tertiaryColor};
  border-radius: 4px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  flex: 1;
`;

const Title = styled.div``;

const Draggable = styled.div`
  cursor: grab; /* fallback if grab cursor is unsupported */
  opacity: 0.5;
  fill: ${(props) => props.theme.color.iconColor};
`;

const TableContainer = styled.div`
  position: relative;
  overflow-y: scroll;
`;

const TableWrapper = styled.table`
  table-layout: auto;
  border-spacing: 0;
  padding: 0 20px 20px 20px;
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
  border-bottom: 1px solid ${(props) => props.theme.color.borderColor};
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

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 32px;
`;

const InfoIcWrapper = styled.div`
  fill: ${(props) => props.theme.color.iconColor};
  margin-left: 8px;
  cursor: pointer;
`;

export {
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
};
