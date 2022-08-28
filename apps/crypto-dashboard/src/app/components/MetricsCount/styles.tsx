import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.tertiaryColor};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  cursor: grab;
`;

const TitleWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 0.85em;
  flex: 1;
  line-height: 1.75;
  z-index: 1;
  pointer-events: none;
`;

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
`;

const Draggable = styled.div`
  opacity: 0.5;
  z-index: 2;
  fill: ${(props) => props.theme.color.iconColor};
`;

const Subtitle = styled.div`
  margin: 10px 32px 32px 32px;
  font-weight: 300;
  font-size: 0.95em;
`;

const NumberWrapper = styled.div`
  display: flex;
  margin-left: 32px;
`;

const InfoIcWrapper = styled.div`
  fill: ${(props) => props.theme.color.iconColor};
  margin-left: 8px;
  cursor: pointer;
  height: fit-content;
  position: relative;
`;

export {
  Wrapper,
  Title,
  TitleWrapper,
  ChartWrapper,
  Draggable,
  Subtitle,
  Number,
  NumberWrapper,
  InfoIcWrapper
};
