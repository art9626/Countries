import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filtersActions } from '../redux/filters/filtersActions';
import Container from '../UI/Container';
import Controls from '../components/Controls';
import { CountriesList } from '../components/CountriesList';
import { countriesActions } from '../redux/countries/countriesActions';
import { useSearchParams } from 'react-router-dom';



export type SearchParamsType = {
  region?: string;
  search?: string;
}

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  

  useEffect(() => {
    return () => {
      dispatch(filtersActions.clear());
      dispatch(countriesActions.clear());
    };
  }, [dispatch]);

  useEffect(() => {
    const currentFilterSearch = searchParams.get('search');
    const currentFilterRegion = searchParams.get('region');

    if (currentFilterSearch) {
      dispatch(filtersActions.setSearchFilter(currentFilterSearch));
    } else {
      dispatch(filtersActions.setSearchFilter(''));
    }

    if (currentFilterRegion) {
      dispatch(filtersActions.setRegionFilter(currentFilterRegion));
    } else {
      dispatch(filtersActions.setRegionFilter(''));
    }
  }, [searchParams, setSearchParams, dispatch]);


  return (
    <section>
      <Container maxWidth='1440px'>
        <Controls />
        <CountriesList />
      </Container>
    </section>
  );
};

export default MainPage;