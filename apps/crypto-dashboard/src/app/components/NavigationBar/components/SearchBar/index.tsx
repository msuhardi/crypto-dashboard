import React from 'react';

import SearchIc from '@assets/icons/search';

import { Wrapper, IconWrapper, Input } from './styles';

const SearchBar = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <SearchIc height={16} />
      </IconWrapper>
      <Input placeholder="Search for a keyword" />
    </Wrapper>
  );
};

export default SearchBar;
