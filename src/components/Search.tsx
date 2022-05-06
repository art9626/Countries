import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { filtersActions } from '../redux/filters/filtersActions';
import { getFilters } from '../redux/filters/filtersSelectors';
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
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);
  const [search, setSearch] = useState(filters.search);

  useEffect(() => {
    if (filters.search !== search) {
      setSearch(filters.search);
    }
  }, [filters.search]);


  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (search !== filters.search && search !== null) {
      if (search.length > 0) {
        timerId = setTimeout(() => {
          dispatch(filtersActions.setFilters({ ...filters, search }));
        }, 300)
      } else {
        dispatch(filtersActions.setFilters({ ...filters, search }));
      }
    }

    return () => {
      clearTimeout(timerId);
    }
  }, [search]);


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