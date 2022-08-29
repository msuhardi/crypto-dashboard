import React, { useState } from 'react';
import { onChangeThemeFn } from '@types';

import { DARK_THEME_KEY, LIGHT_THEME_KEY } from '@constants';

import Tool from '@components/Tool';

import SunIc from '@assets/icons/sun';
import BellIc from '@assets/icons/bell';
import AvatarIc from '@assets/avatar';
import MoonIc from '@assets/icons/moon';

import SearchBar from './components/SearchBar';
import { Wrapper, SearchWrapper, Tools, Logo } from './styles';

const NavigationBar = ({
  onChangeTheme,
  theme
}: {
  onChangeTheme: onChangeThemeFn;
  theme: string;
}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const otherTheme =
    currentTheme === DARK_THEME_KEY ? LIGHT_THEME_KEY : DARK_THEME_KEY;

  return (
    <Wrapper>
      <Logo />
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
      <Tools>
        <Tool
          tooltip={`Click here for ${otherTheme} mode`}
          tooltipProps={{
            showOnCreate: true,
            permanent: true,
            placement: 'left',
            theme: 'allium-animated'
          }}
          icon={currentTheme === DARK_THEME_KEY ? <SunIc /> : <MoonIc />}
          iconSize={currentTheme === DARK_THEME_KEY ? 20 : 18}
          toolStyles={{
            marginRight: '24px'
          }}
          onClick={() => {
            setCurrentTheme(otherTheme);
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
