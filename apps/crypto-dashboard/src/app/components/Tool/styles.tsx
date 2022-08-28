import styled from 'styled-components';

const ICON_PADDING = 20;

const Wrapper = styled.div<{
  iconColor?: string;
  marginRight?: number;
  iconSize?: number;
}>`
  position: relative;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 3px;

  &:last-child {
    margin-right: 0;
  }

  &:hover > svg {
    fill: ${(props) => props.theme.color.blue};
  }

  & > svg {
    transition: fill 0.4s ease;
    fill: ${(props) =>
      props.iconColor ? props.iconColor : props.theme.color.iconColor};
    height: ${(props) => (props.iconSize ? `${props.iconSize}px` : 'inherit')};
  }
`;

const HoveredBg = styled.div<{ height?: number; hovered?: boolean }>`
  transition: background-color 0.4s ease;
  background-color: ${(props) =>
    props.hovered ? 'rgba(63, 121, 246, .3)' : 'none'};
  width: ${(props) => (props.height ? props.height + ICON_PADDING : 0)}px;
  height: ${(props) => (props.height ? props.height + ICON_PADDING : 0)}px;
  border-radius: ${(props) =>
    props.height ? (props.height + ICON_PADDING) / 2 : 0}px;
  position: absolute;
`;

const Badge = styled.div`
  height: 8px;
  width: 8px;
  background: #c23a3a;
  border-radius: ${(props) => props.theme.borderRadius};
  position: absolute;
  top: -2px;
  right: -4px;
  z-index: 1;
`;

export { Wrapper, HoveredBg, Badge };
