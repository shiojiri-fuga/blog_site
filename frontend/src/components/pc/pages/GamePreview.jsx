import React from 'react';
import { Parallax } from 'react-parallax';
import { Content } from '../styles/CommonContainer';
import Hero from '../components/Hero';
import Grid from '@mui/material/Grid'
import { Text } from '../styles/CommonContainer';
import styled from 'styled-components';
import HomeSearchGame from '../components/HomeSearchGame';
import HomeNewGame from '../components/HomeNewGame';
import HomeNewBlog from '../components/HomeNewBlog';
import HomeNewEvent from '../components/HomeNewEvent';
import { TitleComponent, ParallaxTitleConmponent } from '../styles/title';

const GamePreview = () => {

  const images = [
    'http://localhost:8000/images/hero1.jpg',
    'http://localhost:8000/images/hero1.jpg',
    'http://localhost:8000/images/hero1.jpg',
    'http://localhost:8000/images/hero1.jpg',
  ];

  return (
    <Content>
      <Hero/>
      <Grid  container
        direction="row"
        justifyContent="center"
        alignItems="center"
        paddingTop="16px">
        <Grid item md={5}>  
        <TitleComponent text={'お知らせ'}/>
        </Grid>
        <Grid item md={8}>
          <Grid container
            direction="row"
            justifyContent="center"
            alignContent="center"
            paddingBottom="32px"
            >
            <Grid item md={2}><Text>2023/07/12</Text></Grid>
            <Grid item md={10}><Text>新しいイベントの告知があります</Text></Grid>
            <Grid item md={2}><Text>2023/07/12</Text></Grid>
            <Grid item md={10}><Text>新しいイベントの告知があります</Text></Grid>
            <Grid item md={2}><Text>2023/07/12</Text></Grid>
            <Grid item md={10}><Text>新しいイベントの告知があります</Text></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Parallax
          bgImage={images[0]}
          strength={500}
          style={{ height: '400px' }}
        >
        <ParallaxTitleConmponent text={'ボードゲームを探す'}/> 
      </Parallax>
      <HomeSearchGame/>
      <Parallax
          bgImage={images[0]}
          strength={500}
          style={{ height: '400px' }}
        >
        <ParallaxTitleConmponent text={'新着のボードゲーム'}/> 
      </Parallax>
      <HomeNewGame/>
      <Parallax
          bgImage={images[0]}
          strength={500}
          style={{ height: '400px' }}
        >
        <ParallaxTitleConmponent text={'イベント情報'}/> 
      </Parallax>
      <HomeNewEvent/>
      <Parallax
          bgImage={images[0]}
          strength={500}
          style={{ height: '400px' }}
        >
        <ParallaxTitleConmponent text={'新着のブログ'}/> 
      </Parallax>
      <HomeNewBlog />
      
      </Content>
  );
};

export default GamePreview;
