import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import DragIc from '@assets/icons/drag';
import InfoIc from '@assets/icons/info';

import InfoTooltip from '@components/Tooltip';

import {
  Wrapper,
  Title,
  TitleWrapper,
  ChartWrapper,
  Draggable,
  Subtitle,
  Number,
  NumberWrapper,
  InfoIcWrapper
} from '@components/MetricsCount/styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltip: {
      backgroundColor: '#333',
      titleColor: 'rgba(255, 255, 255, .8)',
      bodyColor: 'rgba(255, 255, 255, .8)',
      usePointStyle: true,
      boxPadding: 4,
      cornerRadius: 4,
      padding: {
        left: 12,
        top: 8,
        right: 12,
        bottom: 8
      }
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  layout: {
    autoPadding: false
  }
};

const MetricCount = ({
  number,
  title,
  data,
  subtitle,
  info
}: {
  number: number;
  title: string;
  subtitle?: string;
  data: any;
  info?: string;
}) => (
  <Wrapper>
    <TitleWrapper>
      <Title>{title}</Title>
      <Draggable>
        <DragIc height={16} />
      </Draggable>
    </TitleWrapper>
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
    <ChartWrapper>
      <Line options={options} data={data} />
    </ChartWrapper>
  </Wrapper>
);

export default MetricCount;
