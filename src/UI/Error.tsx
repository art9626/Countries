import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';


const StyledError = styled(Flex)`
  height: 50px;
  background-color: red;
  color: white;
  border-radius: 5px;
`

export const Error: React.FC = ({ children }) => {
  return (
    <StyledError
      justifyContent='center'
      alignItems='center'
      width='100%'
    >
      {children}
    </StyledError>
  );
};