import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DARK_THEME_KEY, LIGHT_THEME_KEY } from '@constants';

import theme from './theme';

import Dashboard from './pages/Dashboard';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'tippy.js/dist/tippy.css';

const DEFAULT_THEME = DARK_THEME_KEY;

const StyledApp = styled.div`
  max-width: 100vw;
  display: flex;
  font-weight: 300;
  font-size: 0.85em;
  letter-spacing: 0.5px;
  font-family: 'Noto Sans', sans-serif;
`;

export function App() {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <StyledApp>
        <Dashboard
          onChangeTheme={() => {
            setCurrentTheme(
              currentTheme === DARK_THEME_KEY ? LIGHT_THEME_KEY : DARK_THEME_KEY
            );
          }}
        />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
