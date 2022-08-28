import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${(props) => props.theme.color.tagBackgroundColor};
  display: flex;
  border-radius: 4px;
  width: fit-content;
  font-size: 0.75em;
  font-weight: 600;
  padding: 6px 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${(props) => props.theme.color.tagFontColor};
  cursor: pointer;
`;

const Tag = ({ title }: { title: string }) => <Wrapper>{title}</Wrapper>;

export default Tag;
