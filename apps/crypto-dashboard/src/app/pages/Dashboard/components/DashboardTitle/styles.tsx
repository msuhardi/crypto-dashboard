import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.tertiaryColor};
  display: flex;
  padding: ${(props) => props.theme.gutter.vertical * 9}px;
  padding-bottom: 0;
  color: ${(props) => props.theme.font.color};
  z-index: 2;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.75em;
  font-weight: 400;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.gutter.vertical * 3}px;
`;

const Column = styled.div<{ right?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: ${(props) => (props.right ? 'flex-end' : 'flex-start')};
  justify-content: center;
`;

const Spacer = styled.div`
  height: ${(props) => props.theme.gutter.vertical * 7}px;
`;

const InsightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid #5a5959;
  padding: 0 ${(props) => props.theme.gutter.horizontal * 7}px;

  &:first-child {
    border: none;
  }

  & > span {
    opacity: 0.7;
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
  }
`;

const InsightNumber = styled.div`
  display: flex;
  align-items: center;

  & > h1 {
    margin: ${(props) =>
      `${props.theme.gutter.horizontal * 2}px 0 0 ${
        props.theme.gutter.horizontal * 2
      }px`};
    line-height: 1;
    font-weight: 300;
    font-size: 3em;
  }
`;

const Insights = styled.div`
  display: flex;
`;

const Tags = styled.div`
  display: flex;

  & > div {
    margin-right: ${(props) => props.theme.gutter.horizontal * 2.5}px;
  }
`;

const Description = styled.div`
  line-height: 2;
`;

const Breadcrumb = styled.div`
  color: ${(props) => props.theme.color.blue};
  font-weight: 600;
`;

const Row = styled.div<{ marginBottom?: number }>`
  display: flex;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`;

const Tools = styled.div`
  display: flex;
  fill: white;
  align-items: center;

  & > svg {
    margin-right: ${(props) => props.theme.gutter.horizontal * 5}px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export {
  Wrapper,
  Title,
  TitleWrapper,
  Column,
  Spacer,
  InsightWrapper,
  InsightNumber,
  Insights,
  Tags,
  Description,
  Breadcrumb,
  Row,
  Tools
};
