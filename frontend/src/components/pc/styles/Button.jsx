import React from "react";
import styled from "styled-components";

// propsのstyleTypeでボタンのスタイルを分岐
const ButtonComponent = ({ styleType, onClick, child }) => {
    const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
    // Component変数に格納したコンポーネントでReact要素を作成
    return <Component onClick={onClick}>{child}</Component>;
  };

const Button = styled.button`
    text-align: center;
    width: 100%;
`;

const BaseButton = styled(Button)`
     color: brack;
     background: white;
`;

// 緑色のボタン(BaseButtonを基に拡張)
const ButtonPrimary = styled(Button)`
     background: green;
`;

// 赤色のボタン(Buttonを基に拡張)
const ButtonDanger = styled(Button)`
     background: red;
`;

// 全ボタンコンポーネント
const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  danger: ButtonDanger,
};

const ImageButtonComponent = ({ styleType, onClick, text, image}) => {
    const Component = imageButtonStyleLists[styleType] || buttonStyleLists.default;
    return ( 
        <div style={{ 
            backgroundImage: `url(${image})`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
            border: '1px solid black',
          }}>
            <Component onClick={onClick}>{text}</Component>
        </div>
     );
}

const HomeSearchButton = styled(Button)`
    background: white;
    padding: 15px;
    font-size: 32px;
    cursor: pointer
`;

const imageButtonStyleLists = {
    HomeSearch: HomeSearchButton,
};

export { ButtonComponent, ImageButtonComponent };