import React from 'react';
import styled, { css } from 'styled-components';

type PropsType = {
  element?: any;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  width?: string;
  margin?: string;
  padding?: string;
  listStyle?: string;
  mediaQuery?: {
    breakpoint?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    flexWrap?: string;
    width?: string;
    margin?: string;
    padding?: string;
  }
}

const StyledFlex = styled.div<PropsType>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'no-wrap'};
  width: ${({ width }) => width || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};

  ${({ element }) => element === 'ul' && css<PropsType>`
    list-style: ${({ listStyle }) => listStyle || 'circle'};
  `}


  @media (max-width: ${({ mediaQuery }) => mediaQuery?.breakpoint || '650px'}) {
    flex-direction: ${({ mediaQuery, flexDirection }) => mediaQuery?.flexDirection || flexDirection || 'row'};
    justify-content: ${({ mediaQuery, justifyContent }) => mediaQuery?.justifyContent || justifyContent || 'stretch'};
    align-items: ${({ mediaQuery, alignItems }) => mediaQuery?.alignItems || alignItems || 'stretch'};
    flex-wrap: ${({ mediaQuery, flexWrap }) => mediaQuery?.flexWrap || flexWrap || 'no-wrap'};
    width: ${({ mediaQuery, width }) => mediaQuery?.width || width || 'auto'};
    margin: ${({ mediaQuery, margin }) => mediaQuery?.margin || margin || '0'};
    padding: ${({ mediaQuery, padding }) => mediaQuery?.padding || padding || '0'};
  }
`



const Flex: React.FC<PropsType> = (props) => {
  return (
    <StyledFlex as={props.element || 'div'}  {...props} />
  );
};

export default Flex;