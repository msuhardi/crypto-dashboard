import React from 'react';
import { useMediaQuery } from 'react-responsive';

import DesktopApp from './desktopApp';
import DeviceErrorPage from './pages/DeviceErrorPage';

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  if (!isDesktopOrLaptop) {
    return <DeviceErrorPage />;
  }

  return <DesktopApp />;
}

export default App;
