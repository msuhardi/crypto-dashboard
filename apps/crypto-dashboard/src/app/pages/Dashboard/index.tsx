import React from 'react';
import styled from 'styled-components';
import { onChangeThemeFn } from '@types';
import { faker } from '@faker-js/faker';

import GridLayout from '@components/GridLayout';
import NavigationBar from '@components/NavigationBar';
import Table from '@components/Table';
import Chart from '@components/LineChart';
import SideNavigation from '@components/Sidebar';
import MetricCount from '@components/MetricsCount';
import Tabs from '@components/Tabs';

import { Wrapper, DashboardWrapper } from './styles';

import DashboardTitle from './components/DashboardTitle';

const TABS = [
  { title: 'Overview', info: 'This is an overview tab' },
  { title: 'Trending Projects' },
  { title: 'Trading Volume' },
  { title: 'Buyers & Sellers' }
];

const Column = styled.div<{ flex?: number; scrollable?: boolean }>`
  flex: ${(props) => (props.flex ? props.flex : 'unset')};
  overflow-y: ${(props) => (props.scrollable ? 'scroll' : 'hidden')};
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data1 = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(53, 162, 235, 0.3)',
      backgroundColor: 'rgba(53, 162, 235, 0.3)',
      tension: 0.25
    }
  ]
};

const data2 = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(235, 196, 53, 0.3)',
      backgroundColor: 'rgba(235, 196, 53, 0.3)',
      tension: 0.25
    }
  ]
};

const data3 = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(111, 53, 235, 0.4)',
      backgroundColor: 'rgba(111, 53, 235, 0.4)',
      tension: 0.25
    }
  ]
};

const Dashboard = ({ onChangeTheme }: { onChangeTheme: onChangeThemeFn }) => {
  return (
    <Wrapper>
      <NavigationBar onChangeTheme={onChangeTheme} />
      <DashboardWrapper>
        <Column>
          <SideNavigation />
        </Column>

        <Column flex={1} scrollable>
          <DashboardTitle title="NFT Market Overview" />
          <Tabs tabs={TABS} />
          <GridLayout margin={32}>
            <div
              key="metric-1"
              data-grid={{ x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 2 }}
            >
              <MetricCount
                data={data1}
                number={24.32}
                subtitle="in millions of ETH"
                title="Total NFT Secondary Sales Volume"
              />
            </div>
            <div
              key="metric-2"
              data-grid={{ x: 1, y: 0, w: 1, h: 2, minW: 1, minH: 2 }}
            >
              <MetricCount
                data={data2}
                number={36.23}
                subtitle="in millions"
                title="Total NFT Trades Count"
                info="The graph below is interactive"
              />
            </div>
            <div
              key="metric-3"
              data-grid={{ x: 2, y: 0, w: 1, h: 2, minW: 1, minH: 2 }}
            >
              <MetricCount
                data={data3}
                number={3888}
                subtitle="in millions"
                title="100+ ETH Volume Collection"
              />
            </div>
            <div
              key="table-1"
              data-grid={{ x: 0, y: 2, w: 2, h: 3, minW: 2, minH: 3 }}
            >
              <Table
                title="NFTs Ranked by Traded Volume"
                headers={[
                  'Rank',
                  'Project Name',
                  'Total Volume (ETH)',
                  'Total Volume ($)',
                  '1W Volume (ETH)',
                  '1D Volume (ETH)'
                ]}
                rows={[
                  [
                    '1',
                    'Meebits',
                    '3,142,739',
                    '$9,017,052,524.78',
                    '298',
                    '10.4'
                  ],
                  [
                    '2',
                    'Terraforms',
                    '2,287,756',
                    '$6,386,397,864.55',
                    '14,353',
                    '2,001.39'
                  ],
                  [
                    '3',
                    'CryptoPunks',
                    '900,765',
                    '$2,428,952,794.037',
                    '2,245',
                    '132.5'
                  ],
                  [
                    '4',
                    'Meebits',
                    '3,142,739',
                    '$9,017,052,524.78',
                    '298',
                    '10.4'
                  ],
                  [
                    '5',
                    'Terraforms',
                    '2,287,756',
                    '$6,386,397,864.55',
                    '14,353',
                    '2,001.39'
                  ],
                  [
                    '6',
                    'CryptoPunks',
                    '900,765',
                    '$2,428,952,794.037',
                    '2,245',
                    '132.5'
                  ],
                  [
                    '7',
                    'Meebits',
                    '3,142,739',
                    '$9,017,052,524.78',
                    '298',
                    '10.4'
                  ],
                  [
                    '8',
                    'Meebits',
                    '3,142,739',
                    '$9,017,052,524.78',
                    '298',
                    '10.4'
                  ],
                  [
                    '9',
                    'Terraforms',
                    '2,287,756',
                    '$6,386,397,864.55',
                    '14,353',
                    '2,001.39'
                  ],
                  [
                    '10',
                    'CryptoPunks',
                    '900,765',
                    '$2,428,952,794.037',
                    '2,245',
                    '132.5'
                  ]
                ]}
              />
            </div>
            <div key="chart-1" data-grid={{ x: 2, y: 2, w: 2, h: 3 }}>
              <Chart />
            </div>
          </GridLayout>
        </Column>
      </DashboardWrapper>
    </Wrapper>
  );
};

export default Dashboard;
