import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Flex from '../UI/Flex';
import { BordersDataType, CountryDataType } from '../redux/details/detailsActions';
import { StyledImg } from './CountryItem';



const StyledButton = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  box-shadow: var(--shadow);
`

const ButtonBack = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  cursor: pointer;
`

const BorderCountryLink = styled(StyledButton)`
  display: inline-block;
  text-decoration: none;
`

const BorderCountryItem = styled.li`
  margin: 5px 10px 5px 0;
`

const CountryFlag = styled(StyledImg)`
  width: 500px;
  height: 300px;
  margin-right: 30px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 50px;
  }

  @media (max-width: 650px) {
    width: 350px;
    height: 200px;
  }
`

const CountryName = styled.h1`
  margin: 0;
  margin-bottom: 25px;
  color: var(--colors-text);
`

const CountryInfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`

const CountryInfoItem = styled.li`
  color: var(--colors-text);

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

const StyledSpan = styled.span`
  margin-right: 10px;
  color: var(--colors-text);
  font-weight: var(--fw-bold);

  @media (max-width: 1024px) {
    dispaly: inline-block;
    margin-bottom: 30px;
  }
`




type InfoPropsType = {
  countryData: CountryDataType;
  bordersData: BordersDataType | null;
}

const Info: React.FC<InfoPropsType> = React.memo(({
  countryData: {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    name,
    flags
  },
  bordersData
}) => {
  const navigate = useNavigate();

  const listOneData = {
    'Native Name': nativeName,
    'Population': population.toLocaleString(),
    'Region': region,
    'Sub Region': subregion,
    'Capital': capital,
  }
  type T1 = typeof listOneData;
  type K1 = keyof T1;

  const listTwoData = {
    'Top Level Domain': topLevelDomain.toString(),
    'Currencies': currencies.map((item) => item.name).toString(),
    'Languages': languages.map((item) => item.name).toString(),
  }
  type T2 = typeof listTwoData;
  type K2 = keyof T2;

  return (
    <>
      <ButtonBack
        onClick={() => navigate(-1)}
      >
        <IoArrowBack /> Back
      </ButtonBack>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        mediaQuery={{
          breakpoint: '1024px',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <CountryFlag
          width='500px'
          height='270px'
          src={flags.png}
          alt="Flag"
        />
        <Flex
          width='50%'
          flexDirection='column'
          mediaQuery={{
            breakpoint: '1024px',
            width: '100%',
          }}
        >
          <CountryName>
            {name}
          </CountryName>
          <Flex
            width='100%'
            justifyContent='space-between'
            margin='0 0 50px 0'
            mediaQuery={{
              breakpoint: '1024px',
              flexDirection: 'column',
            }}
          >
            <CountryInfoList>
              {Object.keys(listOneData).map((key) => {
                return (
                  <CountryInfoItem key={key}>
                    <b>{key}:</b> {listOneData[key as K1]}
                  </CountryInfoItem>
                );
              })}
            </CountryInfoList>
            <CountryInfoList>
              {Object.keys(listTwoData).map((key) => {
                return (
                  <CountryInfoItem key={key}>
                    <b>{key}:</b> {listTwoData[key as K2]}
                  </CountryInfoItem>
                );
              })}
            </CountryInfoList>
          </Flex>
          <Flex
            alignItems='center'
            mediaQuery={{
              breakpoint: '1024px',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <StyledSpan>
              Border Countries:
            </StyledSpan>
            <Flex
              element='ul'
              listStyle='none'
              flexWrap='wrap'
            >
              {
                borders?.map((item, index) => {
                  const countryName = bordersData?.filter((border) => border.alpha3Code === item)[0].name;
                  return (
                    <BorderCountryItem key={index}>
                      <BorderCountryLink
                        as={Link}
                        to={`/country/${countryName}`}
                      >
                        {countryName}
                      </BorderCountryLink>
                    </BorderCountryItem>
                  );
                })
              }
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
});

export default Info;