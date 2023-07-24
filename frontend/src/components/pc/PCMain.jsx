import React from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';
import { PCRouter } from './router/PCRouter';
import { MainContainer } from './styles/MainContainer';

const PCContainer = styled.div`
    width: 100%;
`;

const PCMain = () => {
    return (
        <PCContainer>
            <Header />
            <MainContainer>
                <PCRouter />
            </MainContainer>
            <Footer />
        </PCContainer>
    );
};
    
export default PCMain;