import React from 'react';

import DragIc from '@assets/icons/drag';
import InfoIc from '@assets/icons/info';

import {
  Wrapper,
  Title,
  TitleWrapper,
  Description,
  Draggable,
  InfoIcWrapper,
  ChartWrapper
} from './styles';

import Tooltip from '@components/Tooltip';
import MetricCount from '@components/MetricsCount';
import Table from '@components/Table';
import { LineChart } from '@components/Chart';

const renderChildren = ({ type, data }: { type: string; data: any }) => {
  switch (type) {
    case 'metric':
      return (
        <MetricCount
          number={data.number}
          data={data.data}
          subtitle={data.subtitle}
          info={data.info}
        />
      );
    case 'table':
      return <Table headers={data.headers} rows={data.rows} />;
    case 'line-chart':
      return (
        <ChartWrapper>
          <LineChart data={data.data} />
        </ChartWrapper>
      );
    default:
      return null;
  }
};

const Card = ({
  title,
  type,
  data,
  description,
  info
}: {
  title: string;
  description?: string;
  info?: string;
  type: string;
  data: any;
}) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title title={title}>{title}</Title>
        {info && (
          <Tooltip
            content="This can be filled by additional, less important information about this graph"
            theme="allium-info"
          >
            <InfoIcWrapper>
              <InfoIc height={12} />
            </InfoIcWrapper>
          </Tooltip>
        )}
        <Draggable>
          <DragIc height={18} />
        </Draggable>
      </TitleWrapper>
      {description && <Description>{description}</Description>}
      {renderChildren({ type, data })}
    </Wrapper>
  );
};

export default Card;
