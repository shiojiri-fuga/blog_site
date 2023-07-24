import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
      <Slider {...settings}>
        <HeroContainer>
          <HeroImg src={'http://localhost:8000/images/hero1.jpg'} alt='img1' />
          <HeroContent>
            <HeroText>ようこそThe Game Frontiersへ<br/>ここでは様々なコンテンツが楽しめます。</HeroText>
          </HeroContent>
        </HeroContainer>
        <HeroContainer>
          <HeroImg src={'http://localhost:8000/images/hero1.jpg'} alt='img2' />
          <HeroContent>
            <HeroText>ボードゲームコンテンツでは<br/>あなたの探しているボードゲームが見つかる</HeroText>
          </HeroContent>
          <HeroButttonContent>
            <HeroButton as={Link} to="/">ボードゲーム一覧へ</HeroButton>
          </HeroButttonContent>
        </HeroContainer>
        <HeroContainer>
          <HeroImg src={'http://localhost:8000/images/hero1.jpg'} alt='img3' />
          <HeroContent></HeroContent>
        </HeroContainer>
      </Slider>
    );
}

export default Hero;

const HeroContainer = styled.div`
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
`;

const HeroImg = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`;

const HeroText = styled.p`
    color: #FFF;
    font-size: 40px;
`;
const HeroButttonContent = styled.div`
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`;

const HeroButton = styled.button`
    padding: 24px 80px 24px 80px;
    background: rgba(255, 255, 255, 0.50);
    color: #000;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;