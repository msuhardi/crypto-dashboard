import styled from 'styled-components';

const Number = styled.div`
  font-size: 3em;
  font-weight: 400;
  z-index: 1;
  line-height: 0.85;
`;

const ChartWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
`;

const Subtitle = styled.div`
  margin: ${(props) => props.theme.gutter.horizontal * 8}px;
  margin-top: ${(props) => props.theme.gutter.vertical * 3}px;
  font-size: 0.95em;
`;

const NumberWrapper = styled.div`
  display: flex;
  margin-left: ${(props) => props.theme.gutter.horizontal * 8}px;
  margin-top: ${(props) => props.theme.gutter.vertical * 4}px;
`;

const InfoIcWrapper = styled.div`
  fill: ${(props) => props.theme.icon.color};
  margin-left: ${(props) => props.theme.gutter.horizontal * 2}px;
  cursor: pointer;
  height: fit-content;
  position: relative;
`;

const Copy = styled.div`
  z-index: 1;
`;

export { ChartWrapper, Subtitle, Number, NumberWrapper, InfoIcWrapper, Copy };
