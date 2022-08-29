import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgb(235, 240, 245);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Noto Sans', sans-serif;
  fill: rgb(63,121,246);
  color: rgb(63,121,246);
  padding: 20px 32px;
  box-sizing: border-box;
  position: relative;
`;

const Image = styled.img`
  height: 250px;
  position: absolute;
  bottom: 0;
`;

const Header = styled.div`
  font-size: 5em;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
  text-align: center;
  line-height: 1.5;
`;

const Text = styled.div`
`;

const DeviceErrorPage = () => (
  <Wrapper>
    <Header>Oops</Header>
    <Text>Sorry, please open this website on <b>desktop / laptop</b>.</Text>
    <Image src={require('assets/img/error.png')} />
  </Wrapper>
);

export default DeviceErrorPage;
