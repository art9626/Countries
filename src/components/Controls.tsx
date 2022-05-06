import React from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import Flex from '../UI/Flex';
import Search from './Search';


const ControlsStyled = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`

const Controls: React.FC = React.memo(() => {
  return (
    <ControlsStyled>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        mediaQuery={{
          flexDirection: 'column',
          justifyContent: 'stretch',
          alignItems: 'stretch'
        }}
      >
        <Search />
        <CustomSelect />
      </Flex>
    </ControlsStyled>
  );
});

export default Controls;