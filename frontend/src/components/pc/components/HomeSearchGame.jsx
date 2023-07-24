import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AgeSearchComponent from './AgeSearchComponent';
import styled from 'styled-components';
import { ImageButtonComponent } from '../styles/Button';

const HomeSearchGame = () => {
  const navigate = useNavigate ();
  const [searchType, setSearchType] = useState('home');

  // 対象年齢別を選択した場合の処理
  const handleAgeSearch = () => {
    setSearchType('age');
  };

  // プレイ人数別を選択した場合の処理
  const handlePlayersSearch = () => {
    setSearchType('players');
  };

  // プレイ時間別を選択した場合の処理
  const handlePlaytimeSearch = () => {
    setSearchType('playtime');
  };

  // ジャンルから探すを選択した場合の処理
  const handleGenreSearch = () => {
    setSearchType('genre');
  };

  // フリーワードを選択した場合の処理
  const handleKeywordSearch = () => {
    setSearchType('keyword');
  };

  // 一覧を選択した場合の処理
  const handleListSearch = () => {
    navigate('/list'); // 一覧画面に遷移
  };

  const handleBack = () => {
    setSearchType('home');
  };

  // 検索ボタンがクリックされた場合の処理
  const handleSearch = () => {
    // 検索結果を取得する処理
    // 例：API呼び出しやローカルデータのフィルタリングなど
    // 検索結果を保持する状態に更新する
    // setSearchResults(results);
  };

  return (
    <Container>
        <Grid container spacing={0} minHeight={680}>
            <Grid item md={2}></Grid>
            <Grid item md={8}>
                {searchType === 'home' &&
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ImageButtonComponent styleType="HomeSearch" onClick={handleAgeSearch} text={'対象年齢別'} image={'http://localhost:8000/images/hero1.jpg'}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ImageButtonComponent styleType="HomeSearch" onClick={handlePlayersSearch} text={'プレイ人数別'} image={'http://localhost:8000/images/hero1.jpg'}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ImageButtonComponent styleType="HomeSearch" onClick={handlePlaytimeSearch} text={'プレイ時間別'} image={'http://localhost:8000/images/hero1.jpg'}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ImageButtonComponent styleType="HomeSearch" onClick={handleGenreSearch} text={'ジャンルから探す'} image={'http://localhost:8000/images/hero1.jpg'}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ImageButtonComponent styleType="HomeSearch" onClick={handleKeywordSearch} text={'フリーワード'} image={'http://localhost:8000/images/hero1.jpg'}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ImageButtonComponent styleType="HomeSearch" onClick={handleListSearch} text={'一覧'} image={'http://localhost:8000/images/hero1.jpg'}/>
                    </Grid>
                </Grid>
                }

                {/* 検索項目に応じて表示を切り替えるコンポーネント */}
                {searchType === 'age' && <AgeSearchComponent onSearch={handleSearch} onBack={handleBack} />}
                {searchType === 'players' && <AgeSearchComponent onSearch={handleSearch} onBack={handleBack} />}
                {searchType === 'playtime' && <AgeSearchComponent onSearch={handleSearch} onBack={handleBack} />}
                {searchType === 'genre' && <AgeSearchComponent onSearch={handleSearch} onBack={handleBack} />}
                {searchType === 'keyword' && <AgeSearchComponent onSearch={handleSearch} onBack={handleBack} />}
            </Grid>
            <Grid item md={2}></Grid>
        </Grid>
      
    </Container>
  );
};

export default HomeSearchGame;

const Container = styled.div`
    width: 100%;
    padding: 32px 0px 0px 0px;
`