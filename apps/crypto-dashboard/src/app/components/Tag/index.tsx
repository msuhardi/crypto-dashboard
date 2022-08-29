import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${(props) => props.theme.tag.backgroundColor};
  display: flex;
  border-radius: 4px;
  width: fit-content;
  font-size: 0.75em;
  font-weight: 600;
  padding: ${(props) =>
    `${props.theme.gutter.vertical * 1.5}px ${
      props.theme.gutter.horizontal * 3
    }px`};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${(props) => props.theme.tag.color};
  cursor: pointer;
`;

const Tag = ({ title }: { title: string }) => <Wrapper>{title}</Wrapper>;

export default Tag;
