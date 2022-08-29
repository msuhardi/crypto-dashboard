import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DARK_THEME_KEY, LIGHT_THEME_KEY } from '@constants';

import theme from './theme';

import Dashboard from './pages/Dashboard';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'tippy.js/dist/tippy.css';

const THEME_KEY = 'theme';
const DEFAULT_THEME = LIGHT_THEME_KEY;
const DARK_THEME_HOUR = 18;

const StyledApp = styled.div`
  max-width: 100vw;
  display: flex;
  font-weight: 300;
  font-size: 0.85em;
  letter-spacing: 0.5px;
  font-family: 'Noto Sans', sans-serif;
`;

const saveToLS = (value: string) => {
  if (localStorage) {
    localStorage.setItem(THEME_KEY, value);
  }
};

const getFromLS = () => {
  let theme;
  if (localStorage) {
    theme = localStorage.getItem(THEME_KEY);
  }

  return theme;
};

const DesktopApp = () => {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const themeFromLS = getFromLS();

    if (themeFromLS && theme[themeFromLS]) {
      setCurrentTheme(themeFromLS);
    } else {
      const currentHour = new Date().getHours();
      if (currentHour >= DARK_THEME_HOUR) {
        setCurrentTheme(DARK_THEME_KEY);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <StyledApp>
        <Dashboard
          onChangeTheme={() => {
            const changedTheme =
              currentTheme === DARK_THEME_KEY
                ? LIGHT_THEME_KEY
                : DARK_THEME_KEY;
            setCurrentTheme(changedTheme);
            saveToLS(changedTheme);
          }}
        />
      </StyledApp>
    </ThemeProvider>
  );
}

export default DesktopApp;
