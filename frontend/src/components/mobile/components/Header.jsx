import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 16px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="site-title">
        <h1>The Game Frontiers</h1>
      </div>
      
      <HamburgerMenu />
    </HeaderContainer>
  );
};

export default Header;