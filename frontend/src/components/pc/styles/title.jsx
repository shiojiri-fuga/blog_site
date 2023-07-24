import React from "react";
import styled from "styled-components";

const TitleComponent = ({ text }) => {
    // Component変数に格納したコンポーネントでReact要素を作成
    return <Title>{text}</Title>;
  };

const Title = styled.div`
  margin: 24px;
  color: #22B465;
  font-size: 56px;
  text-align: center;
`;

const ParallaxTitleConmponent = ({ text }) => {
    // Component変数に格納したコンポーネントでReact要素を作成
    return ( 
        <TitleContainer>
            <ContentTitle><Title>{text}</Title></ContentTitle>
        </TitleContainer>
    );
  };

const ContentTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width:100%;
  background: rgba(255, 255, 255, 0.75);
`;

const TitleContainer = styled.div`
position: relative;
width: 100%;
height: 400px;
`;


export { TitleComponent, ParallaxTitleConmponent };