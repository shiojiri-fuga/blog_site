import React from 'react';
import styled from 'styled-components';
import { MainContainer, Content } from './styles/MainContainer';
import { MobileRouter } from './router/MobileRouter';
import Header from "./components/Header";
import Footer from './components/Footer';

const PCContainer = styled.div`
    width: 100%;
`;

const MobileMain = () => {
    return (
        <PCContainer>
            <Header />
            <MainContainer>
                <Content>
                    <MobileRouter />
                </Content>
            </MainContainer>
            <Footer />
        </PCContainer>
    );
};
    
export default MobileMain;