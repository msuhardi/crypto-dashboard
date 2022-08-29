import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.tertiaryColor};
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  cursor: grab;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  padding: ${(props) => props.theme.gutter.horizontal * 8}px;
  padding-bottom: 0;
  margin-bottom: ${(props) => props.theme.gutter.vertical * 4}px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.div`
  text-align: left;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  text-transform: none;
  letter-spacing: normal;
  text-align: left;
  line-height: 1.75;
  padding: 0 ${(props) => props.theme.gutter.horizontal * 8}px;
`;

const Draggable = styled.div`
  opacity: 0.5;
  fill: ${(props) => props.theme.icon.color};
  margin-left: ${(props) => props.theme.gutter.horizontal * 7}px;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const InfoIcWrapper = styled.div`
  fill: ${(props) => props.theme.icon.color};
  margin-left: ${(props) => props.theme.gutter.horizontal * 2}px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ChartWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: ${(props) => props.theme.gutter.vertical * 8}px;
`;

export {
  Wrapper,
  Title,
  TitleWrapper,
  Description,
  Draggable,
  InfoIcWrapper,
  ChartWrapper
};
