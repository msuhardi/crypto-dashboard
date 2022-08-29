import React, { ReactElement } from 'react';

import Tag from '@components/Tag';
import Tool from '@components/Tool';

import InsightIc from '@assets/icons/insight';
import CloseIc from '@assets/icons/close';
import CommentIc from '@assets/icons/comment';
import BookmarkIc from '@assets/icons/bookmark';
import CopyIc from '@assets/icons/copy';
import EditIc from '@assets/icons/edit';

import {
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
} from './styles';

const TOOLS = [
  {
    icon: EditIc,
    tooltip: 'Edit',
    hasUpdates: false
  },
  {
    icon: CopyIc,
    tooltip: 'Copy',
    hasUpdates: false
  },
  {
    icon: BookmarkIc,
    tooltip: 'Bookmark',
    hasUpdates: false
  },
  {
    icon: CommentIc,
    tooltip: 'Comment',
    hasUpdates: true
  }
];

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
    <InsightNumber>
      {icon}
      <h1>{number}</h1>
    </InsightNumber>
  </InsightWrapper>
);

const DashboardTitle = ({
  title,
  description,
  tags
}: {
  title: string;
  description?: string;
  tags?: string[];
}) => {
  return (
    <Wrapper>
      <Row marginBottom={20}>
        <Column>
          <Breadcrumb>My Dashboards</Breadcrumb>
        </Column>
        <Tools>
          {TOOLS.map((tool, i) => (
            <Tool
              key={`tool-${i}`}
              tooltip={tool.tooltip}
              tooltipProps={{
                placement: 'bottom'
              }}
              icon={React.createElement(tool.icon)}
              iconSize={18}
              toolStyles={{
                marginRight: '20px'
              }}
              hasUpdates={tool.hasUpdates}
            />
          ))}
        </Tools>
      </Row>
      <Row marginBottom={32}>
        <Column>
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
          <Description>{description}</Description>
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
            {tags &&
              tags.map((tag) => <Tag key={`tag-${tag}`} title={`#${tag}`} />)}
          </Tags>
          <Spacer />
        </Column>
      </Row>
    </Wrapper>
  );
};

export default DashboardTitle;
