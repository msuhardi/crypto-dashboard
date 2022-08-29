import React from 'react';

import InfoIc from '@assets/icons/info';

import InfoTooltip from '@components/Tooltip';
import Card from '@components/Card';
import { LineChart } from '@components/Chart';

import {
  ChartWrapper,
  Subtitle,
  Number,
  NumberWrapper,
  InfoIcWrapper,
  Copy
} from '@components/MetricsCount/styles';

const MetricCount = ({
  number,
  data,
  subtitle,
  info
}: {
  number: number;
  subtitle?: string;
  data: any;
  info?: string;
}) => (
  <>
    <Copy>
      <NumberWrapper>
        <Number>{number}</Number>
        {info && (
          <InfoTooltip content={info} theme="allium-info">
            <InfoIcWrapper>
              <InfoIc height={12} />
            </InfoIcWrapper>
          </InfoTooltip>
        )}
      </NumberWrapper>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Copy>
    <ChartWrapper>
      <LineChart data={data} />
    </ChartWrapper>
  </>
);

export default MetricCount;
