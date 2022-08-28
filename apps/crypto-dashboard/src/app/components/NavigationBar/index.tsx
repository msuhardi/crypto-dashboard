import React, { useState } from 'react';
import { onChangeThemeFn } from '@types';

import Tool from '@components/Tool';

import SunIc from '@assets/icons/sun';
import BellIc from '@assets/icons/bell';
import AvatarIc from '@assets/avatar';
import MoonIc from '@assets/icons/moon';

import { Wrapper, Tools, Logo } from './styles';

const NavigationBar = ({
  onChangeTheme
}: {
  onChangeTheme: onChangeThemeFn;
}) => {
  const [theme, setTheme] = useState('light');

  return (
    <Wrapper>
      <Logo />
      <Tools>
        <Tool
          tooltip={`Click here for ${theme} mode`}
          tooltipProps={{
            showOnCreate: true,
            permanent: true,
            placement: 'left',
            theme: 'allium-animated'
          }}
          icon={theme === 'dark' ? <MoonIc /> : <SunIc />}
          iconSize={theme === 'dark' ? 18 : 20}
          toolStyles={{
            marginRight: '24px'
          }}
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
            onChangeTheme();
          }}
        />

        <Tool
          tooltip="Notification"
          tooltipProps={{
            placement: 'bottom'
          }}
          icon={<BellIc />}
          iconSize={20}
          toolStyles={{
            marginRight: '24px'
          }}
          hasUpdates
        />
        <Tool iconSize={28} icon={<AvatarIc />} />
      </Tools>
    </Wrapper>
  );
};

export default NavigationBar;
