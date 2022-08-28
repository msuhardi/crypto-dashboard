import React from 'react';

import { Wrapper, Tools, Tool } from './styles';

import Tooltip from '@components/Tooltip';

import DashboardIc from '@assets/icons/dashboard';
import ExploreIc from '@assets/icons/explore';
import AlertIc from '@assets/icons/alert';

const Sidebar = () => (
  <Wrapper>
    <Tools>
      <Tooltip content="Explore" placement="right">
        <Tool>
          <ExploreIc height={20} />
        </Tool>
      </Tooltip>
      <Tooltip content="Dashboard" placement="right">
        <Tool active>
          <DashboardIc height={18} />
        </Tool>
      </Tooltip>
      <Tooltip content="Monitoring" placement="right">
        <Tool>
          <AlertIc height={20} />
        </Tool>
      </Tooltip>
    </Tools>
  </Wrapper>
);

export default Sidebar;
