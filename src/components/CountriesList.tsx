import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountries } from '../redux/countries/countriesActions';
import { getCountries, getError, getFiltredCountries, getIsLoading } from '../redux/countries/countriesSelectors';
import { getFilters } from '../redux/filters/filtersSelectors';
import { Error } from '../UI/Error';
import Flex from '../UI/Flex';
import CountryItem from './CountryItem';



export const CountriesList: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const filters = useSelector(getFilters);
  // const countries = useSelector(getCountries);
  const countries = useSelector(getFiltredCountries);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(loadCountries());
  // }, [filters])

  useEffect(() => {
    dispatch(loadCountries());
  }, [])

  console.log('list');
  console.log(countries);
  

  return (
    <>
      {
        error && <Error>{error}</Error>
      }
      {
        isLoading
          ? <div style={{ color: 'var(--colors-text)' }}>Loading...</div>
          : <Flex
            element='ul'
            flexWrap='wrap'
            padding='0'
            listStyle='none'
            mediaQuery={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {
              countries.map((item) => {
                return (
                  <CountryItem key={item.name} {...item} />
                );
              })
            }
          </Flex >
      }
    </>
  );
});