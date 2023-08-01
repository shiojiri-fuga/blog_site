import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HamburgerIcon = styled.div`
position: relative;
background: #d54884;
cursor: pointer;
width: 50px;
height: 50px;
border-radius: 5px;
 
&.active {
  z-index: 10000;
}

span {
  display: inline-block;
  transition: all 0.4s;
  position: absolute;
  left: 14px;
  height: 2px;
  border-radius: 5px;
  background: #fff;
  width: 45%;

  &:nth-of-type(1) {
    top: 13px;
  }

  &:nth-of-type(2) {
    top: 19px;
  }

  &:nth-of-type(3) {
    top: 25px;
  }

  &:nth-of-type(3)::after {
    content: 'Menu';
    position: absolute;
    top: 5px;
    left: -2px;
    color: #fff;
    font-size: 0.6rem;
    text-transform: uppercase;
  }
}

&.active span:nth-of-type(1) {
  top: 14px;
  left: 18px;
  transform: translateY(6px) rotate(-45deg);
  width: 30%;
}

&.active span:nth-of-type(2) {
  opacity: 0;
}

&.active span:nth-of-type(3) {
  top: 26px;
  left: 18px;
  transform: translateY(-6px) rotate(45deg);
  width: 30%;
}

&.active span:nth-of-type(3)::after {
  content: 'Close';
  transform: translateY(0) rotate(-45deg);
  top: 5px;
  left: 4px;
}
`;

const MenuGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80vw;
  height: 100vh;
  background: #fff;
  padding: 32px 12px;

  > * + * {
    border-top: solid 1px #bbb;
  }
`;

const MenuGroupItem = styled.div`
  width: 100%;
  flex: auto;
  padding: 4px;
`;

const MenuGroupItemLink = styled.a`
  padding: 1em 0.5em;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.02em;

  &::after {
    content: "";
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJoLTYgdy02IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiPiA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik05IDVsNyA3LTcgNyIiIC8+PC9zdmc+");
    width: 20px;
    display: block;
    margin-left: auto;
  }
`;


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerIcon className={isOpen ? 'active' : ''} onClick={handleToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>

      {isOpen && (
        // メニューコンポーネントの表示
        <MenuGroup>
          {/* メニュー項目 */}
          <MenuGroupItem>
           <MenuGroupItemLink as={Link} to="/signin">サインイン</MenuGroupItemLink>
          </MenuGroupItem>
          <MenuGroupItem>
          <MenuGroupItemLink as={Link} to="/login">ログイン</MenuGroupItemLink>
          </MenuGroupItem>
          <MenuGroupItem>
          <MenuGroupItemLink as={Link} to="/">ボードゲーム</MenuGroupItemLink>
          </MenuGroupItem>
          <MenuGroupItem>
          <MenuGroupItemLink as={Link} to="/blog">ブログ</MenuGroupItemLink>
          </MenuGroupItem>
          <MenuGroupItem>
          <MenuGroupItemLink as={Link} to="/">ボードゲームイベント</MenuGroupItemLink>
          </MenuGroupItem>
          <MenuGroupItem>
          <MenuGroupItemLink as={Link} to="/">お問い合わせ</MenuGroupItemLink>
          </MenuGroupItem>
        </MenuGroup>
      )}
    </>
  );
};

export default HamburgerMenu;