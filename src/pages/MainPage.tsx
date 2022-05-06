import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { filtersActions } from '../redux/filters/filtersActions';
import { getFilters } from '../redux/filters/filtersSelectors';
import Container from '../UI/Container';
import Controls from '../components/Controls';
import { CountriesList } from '../components/CountriesList';
import { countriesActions } from '../redux/countries/countriesActions';



type SearchParamsType = {
  region?: string;
  search?: string;
}

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('search') || '';
  const regionParam = searchParams.get('region') || '';


  useEffect(() => {
    return () => {
      dispatch(filtersActions.clear());
      dispatch(countriesActions.clear());
    };
  }, []);


  useEffect(() => {
    if (filters.search !== searchParam || filters.region !== regionParam) {
      dispatch(filtersActions.setFilters({ search: searchParam, region: regionParam }));
    }
  }, [searchParam, regionParam]);


  useEffect(() => {
    if (filters.search !== null || filters.region !== null) {
      if (filters.search !== searchParam || filters.region !== regionParam) {
        const actualSearchParams: SearchParamsType = {};
        if (filters.search) actualSearchParams.search = filters.search;
        if (filters.region) actualSearchParams.region = filters.region;
        setSearchParams(actualSearchParams);
      }
    }
  }, [filters]);


  
  return (
    <section>
      <Container maxWidth='1440px'>
        {
          filters.search === null || filters.region === null
            ? null
            : <>
                <Controls />
                <CountriesList />
              </>
        }
            </Container>
    </section>
  );
};

export default MainPage;