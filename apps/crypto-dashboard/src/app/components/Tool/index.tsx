import React, { ReactElement, useState } from 'react';

import Tooltip from '@components/Tooltip';

import { Wrapper, HoveredBg, Badge } from './styles';

const Tool = ({
  hasUpdates,
  active,
  icon,
  iconSize,
  toolStyles,
  tooltip,
  tooltipProps,
  onClick
}: {
  hasUpdates?: boolean;
  active?: boolean;
  iconSize?: number;
  icon: ReactElement;
  toolStyles?: object;
  tooltip?: string;
  tooltipProps?: object;
  permanentTooltip?: boolean;
  onClick?: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  const wrapper = (
    <Wrapper
      {...toolStyles}
      iconSize={iconSize}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {icon}
      {hasUpdates && <Badge />}
      <HoveredBg height={iconSize} hovered={hovered} />
    </Wrapper>
  );

  return tooltip ? (
    <Tooltip content={tooltip} {...tooltipProps}>
      {wrapper}
    </Tooltip>
  ) : (
    wrapper
  );
};

export default Tool;
