import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import { Placement } from 'tippy.js';

import 'tippy.js/animations/shift-away-subtle.css';
import './tooltip.css';

const TooltipContent = styled.div`
  font-family: 'Noto Sans', sans-serif;
`;

const Tooltip = ({
  children,
  placement,
  content,
  showOnCreate = false,
  permanent,
  theme
}: {
  children: ReactElement;
  placement?: Placement;
  content: string;
  showOnCreate?: boolean;
  permanent?: boolean;
  theme?: string;
}) => (
  <Tippy
    content={<TooltipContent>{content}</TooltipContent>}
    placement={placement ? placement : 'right'}
    theme={theme ? theme : 'allium'}
    showOnCreate={showOnCreate}
    trigger={permanent ? 'manual' : 'mouseenter focus'}
    hideOnClick={permanent ? false : true}
    popperOptions={{
      strategy: 'fixed'
    }}
    animation="shift-away-subtle"
  >
    {children}
  </Tippy>
);

export default Tooltip;
