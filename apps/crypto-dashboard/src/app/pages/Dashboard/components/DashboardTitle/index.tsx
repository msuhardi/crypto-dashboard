import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Tag from '@components/Tag';
import Tool from '@components/Tool';

import InsightIc from '@assets/icons/insight';
import CloseIc from '@assets/icons/close';
import CommentIc from '@assets/icons/comment';
import BookmarkIc from '@assets/icons/bookmark';
import CopyIc from '@assets/icons/copy';
import EditIc from '@assets/icons/edit';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.tertiaryColor};
  display: flex;
  padding: 36px 36px 0 36px;
  color: ${(props) => props.theme.color.fontColor};
  z-index: 100;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  margin-right: 14px;
  font-weight: 400;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Column = styled.div<{ right?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: ${(props) => (props.right ? 'flex-end' : 'flex-start')};
  justify-content: center;
`;

const Spacer = styled.div`
  height: 32px;
`;

const InsightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid #5a5959;
  padding: 0 28px;

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

const InsightsNumber = styled.div`
  display: flex;
  align-items: center;

  & > h1 {
    margin: 8px 0 0 8px;
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
    margin-right: 10px;
  }
`;

const Description = styled.div`
  line-height: 2;
`;

const Breadcrumb = styled.div`
  color: rgb(63, 121, 246);
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
    margin-right: 20px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Insight = ({
  icon,
  number,
  name
}: {
  icon: ReactElement;
  number: number;
  name: string;
}) => (
  <InsightWrapper>
    <span>{name}</span>
    <InsightsNumber>
      {icon}
      <h1>{number}</h1>
    </InsightsNumber>
  </InsightWrapper>
);

const DashboardTitle = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Row marginBottom={20}>
        <Column>
          <Breadcrumb>My Dashboards</Breadcrumb>
        </Column>
        <Tools>
          <Tool
            tooltip="Edit"
            tooltipProps={{
              placement: 'bottom'
            }}
            icon={<EditIc />}
            iconSize={18}
            toolStyles={{
              marginRight: '20px'
            }}
          />
          <Tool
            tooltip="Copy"
            tooltipProps={{
              placement: 'bottom'
            }}
            icon={<CopyIc />}
            iconSize={18}
            toolStyles={{
              marginRight: '20px'
            }}
          />
          <Tool
            tooltip="Bookmark"
            tooltipProps={{
              placement: 'bottom'
            }}
            icon={<BookmarkIc />}
            iconSize={18}
            toolStyles={{
              marginRight: '20px'
            }}
          />
          <Tool
            tooltip="Comments"
            tooltipProps={{
              placement: 'bottom'
            }}
            icon={<CommentIc />}
            iconSize={18}
            toolStyles={{
              marginRight: '20px'
            }}
            hasUpdates
          />
        </Tools>
      </Row>
      <Row marginBottom={32}>
        <Column>
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
          <Description>
            A dashboard made by @hildobby (@hildobby on Twitter) to track NFT
            Stats.
            <br />
            Feel free to reach out through Twitter for any suggestions/questions
            regarding this dashboard.
          </Description>
        </Column>

        <Column right>
          <Insights>
            <Insight
              icon={<InsightIc height={18} />}
              number={10}
              name="New Insights"
            />
            <Insight icon={<CloseIc height={16} />} number={3} name="No Data" />
          </Insights>
        </Column>
      </Row>
      <Row>
        <Column>
          <Tags>
            <Tag title="#NFT" />
            <Tag title="#Ethereum" />
            <Tag title="#Volume" />
          </Tags>
          <Spacer />
        </Column>
      </Row>
    </Wrapper>
  );
};

export default DashboardTitle;
