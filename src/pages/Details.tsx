import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { detailsActions, loadDetails } from '../redux/details/detailsActions';
import { getBordersData, getCountryData, getError, getIsLoading } from '../redux/details/detailsSelectors';
import Container from '../UI/Container';
import Info from '../components/Info';
import { Error } from '../UI/Error';


type SectionPropsType = {
  padding?: string;
}


const StyledSection = styled.section<SectionPropsType>`
  padding: ${({ padding }) => padding || '0'}
`



const Details: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const countryData = useSelector(getCountryData);
  const bordersData = useSelector(getBordersData);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const { name } = useParams();


  useEffect(() => {
    if (name) {
      dispatch(loadDetails(name));
    }
  }, [name])

  useEffect(() => {
    return () => {
      dispatch(detailsActions.clear());
    }
  }, [])

  return (
    <StyledSection
      padding='50px 0'
    >
      <Container maxWidth='1440px'>
        {
          error && <Error>{error}</Error>
        }
        {
          !countryData || isLoading
            ? <div>Loading...</div>
            : <Info countryData={countryData} bordersData={bordersData} />
        }
      </Container>
    </StyledSection>
  );
});



export default Details;