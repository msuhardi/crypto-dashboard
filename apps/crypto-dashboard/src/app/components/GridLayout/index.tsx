import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Responsive, WidthProvider, Layouts } from 'react-grid-layout';

import ResizeIc from '@assets/icons/resize';

import './grid_layout.css';

const LAYOUT_KEY = 'layouts';

const COLS = { lg: 4, md: 3, sm: 2 };

const ResponsiveGridLayout = WidthProvider(Responsive);
const Wrapper = styled(ResponsiveGridLayout)<{ $margin?: number }>`
  margin: ${(props) => (props.$margin ? props.$margin : 0)}px;
  color: ${(props) => props.theme.color.fontColor};
`;

const ResizeHandle = styled.div`
  fill: ${(props) => props.theme.color.iconColor};
  margin-right: 5px;
  margin-bottom: 5px;
  opacity: 0.5;
`;

const saveToLS = (value: Layouts) => {
  if (localStorage) {
    localStorage.setItem(LAYOUT_KEY, JSON.stringify(value));
  }
};

const getFromLS = () => {
  let layout = {};
  if (localStorage) {
    try {
      layout = JSON.parse(localStorage.getItem(LAYOUT_KEY) || '') || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return layout;
};

const GridLayout = ({
  children,
  margin
}: {
  children: ReactElement[];
  margin?: number;
}) => {
  const [currentLayouts, setCurrentLayouts] = useState({});
  const [isLayoutFetched, setIsLayoutFetched] = useState(false);

  useEffect(() => {
    const layout = getFromLS();

    setCurrentLayouts(layout);
    setIsLayoutFetched(true);
  }, []);

  return (
    <Wrapper
      className="layout"
      cols={COLS}
      rowHeight={150}
      $margin={margin}
      layouts={currentLayouts}
      onLayoutChange={(layout, layouts) => {
        if (isLayoutFetched) {
          saveToLS(layouts);
          setCurrentLayouts(layouts);
        }
      }}
      resizeHandle={
        <ResizeHandle className="react-resizable-handle react-resizable-handle-se">
          <ResizeIc height={16} />
        </ResizeHandle>
      }
    >
      {children}
    </Wrapper>
  );
};

export default GridLayout;
