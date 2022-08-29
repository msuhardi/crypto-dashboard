import React from 'react';
import styled from 'styled-components';

import { onChangeThemeFn } from '@types';

import GridLayout from '@components/GridLayout';
import NavigationBar from '@components/NavigationBar';
import SideNavigation from '@components/Sidebar';
import Card from '@components/Card';
import Tabs from '@components/Tabs';

import { Wrapper, DashboardWrapper } from './styles';

import DashboardTitle from './components/DashboardTitle';

import { dashboard, data } from './data';

const Column = styled.div<{ flex?: number; scrollable?: boolean }>`
  flex: ${(props) => (props.flex ? props.flex : 'unset')};
  overflow-y: ${(props) => (props.scrollable ? 'scroll' : 'hidden')};
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Dashboard = ({
  onChangeTheme,
  theme
}: {
  onChangeTheme: onChangeThemeFn;
  theme: string;
}) => {
  return (
    <Wrapper>
      <NavigationBar theme={theme} onChangeTheme={onChangeTheme} />
      <DashboardWrapper>
        <Column>
          <SideNavigation />
        </Column>

        <Column flex={1} scrollable>
          <DashboardTitle
            title={dashboard.title}
            description={dashboard.description}
            tags={dashboard.tags}
          />
          <Tabs tabs={dashboard.tabs} />
          <GridLayout margin={32}>
            {data.map((metric) => (
              <div key={metric.key} data-grid={metric.dataGrid}>
                <Card
                  title={metric.title}
                  type={metric.type}
                  data={metric}
                  description={metric.description}
                  info={metric.info}
                />
              </div>
            ))}
          </GridLayout>
        </Column>
      </DashboardWrapper>
    </Wrapper>
  );
};

export default Dashboard;
