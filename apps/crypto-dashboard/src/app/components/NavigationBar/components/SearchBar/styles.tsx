import styled from 'styled-components';

const Wrapper = styled.div`
  fill: ${(props) => props.theme.icon.color};
  height: ${(props) => props.theme.input.height};
  background-color: ${(props) => props.theme.color.tertiaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 500px;
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.gutter.horizontal * 4}px;
`;

const IconWrapper = styled.div`
  margin-right: ${(props) => props.theme.gutter.horizontal * 2.5}px;
`;

const Input = styled.input`
  color: ${(props) => props.theme.font.color};
  background-color: transparent;
  border: none;
  font-family: ${(props) => props.theme.font.family};
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.input.placeholderColor};
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

export { Wrapper, IconWrapper, Input };
