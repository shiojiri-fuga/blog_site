import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AgeSearchComponent = ({ onSearch }) => {
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');

  const handleMinAgeChange = (event) => {
    setMinAge(event.target.value);
  };

  const handleMaxAgeChange = (event) => {
    setMaxAge(event.target.value);
  };

  const handleSearch = () => {
    // 最小年齢と最大年齢を使って検索を実行する処理
    // 例：API呼び出しやローカルデータのフィルタリングなど
    // 検索結果を渡して親コンポーネントで表示する
    onSearch({ minAge, maxAge });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>対象年齢別</h2>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="最小年齢"
          value={minAge}
          onChange={handleMinAgeChange}
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="最大年齢"
          value={maxAge}
          onChange={handleMaxAgeChange}
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleSearch} variant="contained" color="primary">
          検索
        </Button>
      </Grid>
    </Grid>
  );
};

export default AgeSearchComponent;
