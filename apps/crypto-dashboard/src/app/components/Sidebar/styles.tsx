import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60px;
  height: 100vh;
  background: ${(props) => props.theme.color.sidebarColor};
  border-right: 1px solid ${(props) => props.theme.color.borderColor};
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Tools = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  align-items: center;
  width: 100%;
`;

const Tool = styled.div<{ active?: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  fill: ${(props) =>
    props.active
      ? props.theme.color.activeIconColor
      : props.theme.color.sidebarIconColor};
  border-left: ${(props) =>
    props.active ? `6px solid ${props.theme.color.activeIconColor}` : 'none'};
  background-color: ${(props) =>
    props.active ? props.theme.color.activeIconBackgroundColor : 'none'};
  cursor: pointer;
  transition: fill 0.4s ease, background-color 0.4s ease;

  &:hover {
    fill: ${(props) => props.theme.color.activeIconColor};
    background-color: ${(props) => props.theme.color.activeIconBackgroundColor};
  }
`;

export { Wrapper, Tools, Tool };
