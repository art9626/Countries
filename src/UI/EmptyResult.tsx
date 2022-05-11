import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';


const StyleEmptyResult = styled(Flex)`
  height: 50px;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  border-radius: 5px;
  font-style: italic;
`

export const EmptyResult: React.FC = ({ children }) => {
  return (
    <StyleEmptyResult
      justifyContent='center'
      alignItems='center'
      width='100%'
    >
      Empty result
    </StyleEmptyResult>
  );
};