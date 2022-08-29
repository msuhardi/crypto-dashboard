import React from 'react';

import { TabsWrapper, Tab } from './styles';

const Tabs = ({
  active = 0,
  tabs
}: {
  active?: number;
  tabs: { title: string; info?: string }[];
}) => {
  return (
    <TabsWrapper>
      {tabs.map(({ title, info }, i) => (
        <Tab title={title} active={i === active} info={info} key={`tab-${i}`} />
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
