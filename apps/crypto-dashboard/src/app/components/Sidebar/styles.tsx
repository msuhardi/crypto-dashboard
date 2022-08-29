import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${(props) => props.theme.sidebar.width};
  height: 100vh;
  background: ${(props) => props.theme.sidebar.backgroundColor};
  border-right: 1px solid ${(props) => props.theme.borderColor};
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.gutter.vertical * 5}px 0;
`;

const Tools = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.gutter.vertical * 15}px;
  align-items: center;
  width: 100%;
`;

const Tool = styled.div<{ active?: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.gutter.vertical * 2.5}px;
  fill: ${(props) =>
    props.active ? props.theme.icon.activeColor : props.theme.icon.color};
  border-left: ${(props) =>
    props.active ? `6px solid ${props.theme.icon.activeColor}` : 'none'};
  background-color: ${(props) =>
    props.active ? props.theme.icon.activeBackgroundColor : 'none'};
  cursor: pointer;
  transition: fill 0.4s ease, background-color 0.4s ease;

  &:hover {
    fill: ${(props) => props.theme.icon.activeColor};
    background-color: ${(props) => props.theme.icon.activeBackgroundColor};
  }
`;

export { Wrapper, Tools, Tool };
