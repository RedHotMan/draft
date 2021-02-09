/** @jsxImportSource @emotion/react */
import React from 'react';

import { RiSunLine, RiMoonFill, RiGithubFill } from "react-icons/ri";

import  { StyledNavbar } from './style';

interface props {
  currentTheme: 'light' | 'dark',
  toggleTheme: () => void,
}

const Navbar: React.FC<props> = ({ currentTheme, toggleTheme }) => {
  const onGithubIconClick = () => {
    window.open("https://github.com/RedHotMan/draft");
  }

  return (
    <StyledNavbar>
      <h1 css={{ fontSize: '1rem' }}>Draft</h1>
      <div>
        {currentTheme === 'light' ? <RiSunLine css={{ width: '1.2rem', height: '1.2rem' }} onClick={() =>toggleTheme()} /> : <RiMoonFill css={{ width: '1.2rem', height: '1.2rem' }} onClick={() =>toggleTheme()} />}
        <RiGithubFill css={{ width: '1.2rem', height: '1.2rem' }} onClick={onGithubIconClick} />
      </div>
    </StyledNavbar>
  )
}

export default Navbar;
