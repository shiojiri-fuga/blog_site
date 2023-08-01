import React from "react";
import styled from "styled-components";

const TitleComponent = ({ text }) => {
    // Component変数に格納したコンポーネントでReact要素を作成
    return <Title>{text}</Title>;
  };



const ParallaxTitleConmponent = ({ text }) => {
    // Component変数に格納したコンポーネントでReact要素を作成
    return ( 
        <TitleContainer>
            <ContentTitle><Title>{text}</Title></ContentTitle>
        </TitleContainer>
    );
  };

const BlogTitleComponent = ({ text }) => {
  return ( 
    <BlogTitle>{text}</BlogTitle>
  );
};

const Title = styled.div`
  margin: 24px;
  color: #22B465;
  font-size: 56px;
  text-align: center;
`;

const BlogTitle = styled.div`
  padding: 0.4em 0.5em;
  color: #494949;
  background: #fff;
  border-left: solid 5px #22B465;
  border-bottom: solid 3px #494949;
  min-height: 30px;
  font-size: 28px
`;

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


export { TitleComponent, ParallaxTitleConmponent, BlogTitleComponent };