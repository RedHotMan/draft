/** @jsxImportSource @emotion/react */
import React from 'react';

import { RiSunLine, RiMoonFill, RiGithubFill } from "react-icons/ri";

import  { StyledNavbar } from './style';

interface props {
  currentTheme: string,
  toggleTheme: () => void,
}

const iconStyle = {
    width: '1.2rem',
    height: '1.2rem',
    cursor: 'pointer'
}

const Navbar: React.FC<props> = ({ currentTheme, toggleTheme }) => {
  const onGithubIconClick = () => {
    window.open("https://github.com/RedHotMan/draft");
  }

  return (
    <StyledNavbar>
      <h1 css={{ fontSize: '1rem' }}>Draft</h1>
      <div>
        {currentTheme === 'light' ? <RiSunLine css={iconStyle} onClick={() =>toggleTheme()} /> : <RiMoonFill css={iconStyle} onClick={() =>toggleTheme()} />}
        <RiGithubFill css={{...iconStyle, marginLeft: '1rem'}} onClick={onGithubIconClick} />
      </div>
    </StyledNavbar>
  )
}

export default Navbar;
