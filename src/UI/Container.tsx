import React from 'react';
import styled from 'styled-components';

type PropsType = {
  maxWidth: string;
}

const StyledContainer = styled.div<PropsType>`
  max-width: ${({maxWidth}) => maxWidth};
  margin: 0 auto;
  padding: 0 15px;
`

const Container: React.FC<PropsType> = (props) => {
  return (
    <StyledContainer {...props} />
  );
};

export default Container;