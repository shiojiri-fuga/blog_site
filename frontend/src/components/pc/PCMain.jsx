import React from 'react';
import styled from 'styled-components';
import { MainContainer, Content } from './styles/MainContainer';
import Header from "./components/Header";
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';
import { PCRouter } from './router/PCRouter';

const PCContainer = styled.div`
    width: 100%;
`;

const PCMain = () => {
    return (
        <PCContainer>
            <Header />
            <MainContainer>
                <Content>
                   <PCRouter />
                </Content>
                <SideMenu />
            </MainContainer>
            <Footer />
        </PCContainer>
    );
};
    
export default PCMain;