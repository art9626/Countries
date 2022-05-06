import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../UI/Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import Flex from '../UI/Flex';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getColorTheme } from '../redux/colorTheme/colorThemeSelectors';
import { colorThemeActions } from '../redux/colorTheme/colorThemeActions';


const HeaderEl = styled.header`
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
`

const Title = styled(Link)<{ to: string }>`
  font-size: 24px;
  font-weight: var(--fw-bold);
  color: var(--colors-text);
  text-decoration: none;
`

const ThemeSwitcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: var(--colors-ui-base);
  font-size: var(--fs-md);
  font-weight: var(--fw-rgular);
  color: var(--colors-text);
  cursor: pointer;
`

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const colorTheme = useSelector(getColorTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', colorTheme);
  }, [colorTheme]);

  const onToggleTheme = () => {
    dispatch(colorThemeActions.toggleTheme());
  };

  return (
    <HeaderEl>
      <Container maxWidth='1440px'>
        <Flex 
          justifyContent='space-between' 
          alignItems='center' 
          padding='20px 0'
        >
          <Title to='/'>
            Where in the world?
          </Title>
          <ThemeSwitcher onClick={onToggleTheme}>
            {colorTheme === 'light' ? <IoMoonOutline /> : <IoMoon />}
            <span style={{ marginLeft: '5px' }}>Dark mode</span>
          </ThemeSwitcher>
        </Flex>
      </Container>
    </HeaderEl>
  );
};

export default Header;