import React from 'react';
import styled from 'styled-components';

import Tooltip from '@components/Tooltip';

import InfoIc from '@assets/icons/info';

const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.color.tertiaryColor};
  border-top: 1px solid ${(props) => props.theme.color.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.color.borderColor};
  color: ${(props) => props.theme.color.fontColor};
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 24px;
`;

const TabWrapper = styled.div<{ active?: boolean }>`
  padding: 12px;
  min-width: 140px;
  border-bottom: ${(props) =>
    props.active ? `3px solid ${props.theme.color.blue}` : 'none'};
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 600 : 300)};
  display: flex;
  align-items: center;

  &:hover {
    font-weight: 600;
  }
`;

const InfoIcWrapper = styled.div`
  fill: ${(props) => props.theme.color.iconColor};
  margin-left: 8px;
  cursor: pointer;
`;

const Tab = ({
  active,
  title,
  info
}: {
  active?: boolean;
  title: string;
  info?: string;
}) => (
  <TabWrapper active={active}>
    {title}
    {info && (
      <Tooltip content={info} theme="allium-info">
        <InfoIcWrapper>
          <InfoIc height={12} />
        </InfoIcWrapper>
      </Tooltip>
    )}
  </TabWrapper>
);

export { TabsWrapper, Tab };
