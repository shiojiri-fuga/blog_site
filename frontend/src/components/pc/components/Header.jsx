import React,  { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';



const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user);
  const [cookies, removeCookie] = useCookies(['access_token']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedAccessToken = cookies.access_token;
    if (storedAccessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // クッキーからトークンを削除する
    removeCookie('access_token');
    removeCookie('refresh_token');

    // アクセストークンをstateから削除する
    // setAccessToken(null);
    dispatch({ type: "LOGOUT" })
  };

  return (
    <HeaderContainer>
      <div className="site-title">
        <h1>The Game Frontiers</h1>
      </div>
      <NavList>
        <NavItem>
          <NavLink as={Link} to="/">ボードゲーム</NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/blog">ブログ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/">お問い合わせ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/">ボードゲームイベント</NavLink>
        </NavItem>
      </NavList>
      {isLoggedIn ? (
        <UserInfo>
          <span>{user.name}</span>
          <Button onClick={handleLogout}>ログアウト</Button>
        </UserInfo>
      ) : (
        <div className="header-buttons">
          <Button as={Link} to="/signup">新規作成</Button>
          <Button as={Link} to="/login">ログイン</Button>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 16px;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px
`;
