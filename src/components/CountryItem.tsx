import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { CountryType } from "../redux/countries/countriesActions"


const StyledCountryItem = styled.li`
  position: relative;
  width: calc((100% / 4) - 3%);
  margin-bottom: 60px;
  padding-bottom: 40px;
  background-color: var(--colors-ui-base);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);

  &:not(:nth-child(4n)) {
    margin-right: 4%;
  }

  @media (max-width: 1024px) {
    width: calc((100% / 3) - 2%);

    &:not(:nth-child(4n)) {
      margin-right: 0;
    }

    &:not(:nth-child(3n)) {
      margin-right: 3%;
    }
  }

  @media (max-width: 768px) {
    width: calc((100% / 2) - 5%);

    &:not(:nth-child(4n)) {
      margin-right: 0;
    }

    &:not(:nth-child(3n)) {
      margin-right: 0;
    }

    &:not(:nth-child(2n)) {
      margin-right: 10%;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    max-width: 300px;

    &:not(:nth-child(4n)) {
      margin-right: 0;
    }

    &:not(:nth-child(3n)) {
      margin-right: 0;
    }

    &:not(:nth-child(2n)) {
      margin-right: 0;
    }
  }
`

const StyledLink = styled(Link) <{ to: string }>`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export const StyledImg = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const CountryFlag = styled(StyledImg)`
  margin-bottom: 15px;
  object-fit: cover;
  object-position: center;
`


const StyledTitle = styled.h3`
  max-width: 250px;
  margin: 0;
  margin-bottom: 15px;
  padding-left: 15px;
  color: var(--colors-text);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const StyledInfoList = styled.ul`
  padding-left: 15px;
  list-style: none;
`

const StyledInfoItem = styled.li`
  color: var(--colors-text);

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`

const CountryItem: React.FC<CountryType> = React.memo(({ name, population, region, capital, flags }) => {

  console.log('item');
  

  return (
    <StyledCountryItem key={name}>
      <CountryFlag width='100%' height='180px' src={flags.png} alt="Flag" />
      <StyledTitle>
        {name}
      </StyledTitle>
      <StyledInfoList>
        <StyledInfoItem>
          <b>Population:</b> {population.toLocaleString()}
        </StyledInfoItem>
        <StyledInfoItem>
          <b>Region:</b> {region}
        </StyledInfoItem>
        <StyledInfoItem>
          <b>Capital:</b> {capital}
        </StyledInfoItem>
      </StyledInfoList>
      <StyledLink to={`/country/${name}`} />
    </StyledCountryItem>
  );
});

export default CountryItem;

