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
      <UserInfoContainer>
        <HeaderLine></HeaderLine>
        {isLoggedIn ? (
          <UserInfo>
            <span>{user.name}</span>
            <UserInfoButton onClick={handleLogout}>ログアウト</UserInfoButton>
          </UserInfo>
        ) : (
          <UserInfo>
            <UserInfoButton as={Link} to="/signup">新規作成</UserInfoButton>
            <UserInfoButton as={Link} to="/login">ログイン</UserInfoButton>
          </UserInfo>
        )}
      </UserInfoContainer>
      <MainContainer>
        <TitleContainer>
          <Title>The Game Frontiers</Title>
        </TitleContainer>
        <NavList>
        <NavItem>
            <NavLink as={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/">Board Game</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/">Event</NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/">Contact</NavLink>
          </NavItem>
        </NavList>
      </MainContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
`;

const UserInfoContainer = styled.div`
width: 100%;
height: auto;
flex-shrink: 0;
`;

const HeaderLine = styled.div`
  width: 100%;
  background-color: #443768;
  height: 24px;
`

const UserInfo = styled.div`
  display: flex;
  height: auto;
  padding: 0px 32px 0px 32px;
  justify-content: flex-end;
  align-items: flex-end;
`;

const UserInfoButton = styled.button`
  background-color: #fff;
  color: #22B465;
  font-size: 20px;
  padding: 8px 16px;
  margin: 10px;

  &:hover {
    color: #fff;
    background-color: #22B465;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 160px;
`;

const TitleContainer = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  color: #22B465;
  font-family: Comic Sans MS;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NavList = styled.div`
  display: flex;
  height: auto;
  padding: 0px 320px;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.span`
  color: #22B465;
  font-family: Segoe Print;
  font-size: 32px;
`;

const NavLink = styled.a`
  color: #22B465;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`;




