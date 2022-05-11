import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { SearchParamsType } from '../pages/MainPage';
import Flex from '../UI/Flex';

const InputContainer = styled.div`
  width: 300px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: 40px;
  }
  
  &:focus-within {
   outline: 1px solid blue;
  }
`

const StyledInput = styled.input`
  width: 100%;
  padding-left: 20px;
  background-color: var(--colors-ui-base);
  border: none;
  font-size: var(--fs-md);
  color: var(--colors-text);

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--colors-text);
    opacity: 0.5;
  }
`



const Search: React.FC = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterSearch = searchParams.get('search');
  const currentFilterRegion = searchParams.get('region');
  const [search, setSearch] = useState(currentFilterSearch || '');


  useEffect(() => {
    if (currentFilterSearch === search) return;

    let timerId: NodeJS.Timeout;
    if (search.length > 0) {
      timerId = setTimeout(() => {
        let newSearchParams: SearchParamsType = {};
        if (currentFilterRegion) {
          newSearchParams.region = currentFilterRegion;
        }
        newSearchParams.search = search;

        setSearchParams(newSearchParams);
      }, 300)
    } else {
      
      let newSearchParams: SearchParamsType = {};
      if (currentFilterRegion) {
        newSearchParams.region = currentFilterRegion;
      }

      setSearchParams(newSearchParams);
    }

    return () => {
      clearTimeout(timerId);
    }
  }, [search, setSearchParams]);

  useEffect(() => {
    if (!currentFilterSearch && search !== '') setSearch('');
  }, [currentFilterSearch])
  


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }


  return (
    <InputContainer>
      <Flex >
        <IoSearch />
        <StyledInput
          value={search || ''}
          onChange={onChange}
          type='search'
          placeholder='Search for a country...'
        />
      </Flex>
    </InputContainer>
  );
});

export default Search;