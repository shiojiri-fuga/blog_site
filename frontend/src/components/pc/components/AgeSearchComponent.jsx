import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';

const AgeSearchSchema = Yup.object().shape({
  minAge: Yup.number().integer().min(0, '最小年齢は0歳以上である必要があります。').required('最小年齢を入力してください'),
  maxAge: Yup.number()
    .integer()
    .min(Yup.ref('minAge'), '最大年齢は最小年齢以上である必要があります')
    .required('最大年齢を入力してください'),
});

const AgeSearchComponent = ({ onSearch, onBack }) => {
  const handleSearch = (values) => {
    // 検索結果を渡して親コンポーネントで表示する
    onSearch(values);
  };

  return (
    <Formik
      initialValues={{ minAge: '', maxAge: '' }}
      validationSchema={AgeSearchSchema}
      onSubmit={handleSearch}
    >
      <Form>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={12}>
            <h2>対象年齢別</h2>
          </Grid>
          <Grid item md={6}>
            <Field
              name="minAge"
              type="number"
              label="最小年齢"
              as={TextField}
              fullWidth
            />
            <ErrorMessage name="minAge" component="div" />
          </Grid>
          <Grid item md={6}>
            <Field
              name="maxAge"
              type="number"
              label="最大年齢"
              as={TextField}
              fullWidth
            />
            <ErrorMessage name="maxAge" component="div" />
          </Grid>
          <Grid item md={1}>
            <Button onClick={onBack} variant="contained" color="secondary" fullWidth>
              戻る
            </Button>
          </Grid>
          <Grid item md={10}></Grid>
          <Grid item md={1}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              検索
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default AgeSearchComponent;