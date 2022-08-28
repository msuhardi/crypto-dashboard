import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100vh;
  background-color: ${(props) => props.theme.color.mainColor};
`;

const DashboardWrapper = styled.div`
  margin: 0 20px 20px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.secondaryColor};
  display: flex;
  position: relative;
  overflow: hidden;
`;

export { Wrapper, DashboardWrapper };
