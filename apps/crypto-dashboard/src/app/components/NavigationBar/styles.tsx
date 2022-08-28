import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.mainColor};
  height: ${(props) => props.theme.navigationBar.height};
  min-height: ${(props) => props.theme.navigationBar.height};
  display: flex;
  align-items: center;
  padding: 0 28px;
`;

const Tools = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Logo = styled.div`
  height: ${(props) => props.theme.logo.height};
  width: ${(props) => props.theme.logo.height};
  background-image: url(${(props) => props.theme.logo.img});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: ${(props) => props.theme.icon.opacity};
`;

export { Wrapper, Tools, Logo };
