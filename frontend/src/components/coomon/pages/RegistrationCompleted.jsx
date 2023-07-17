import React from 'react';
import { Container, BaseLink } from '../styles/style';

const RegistrationCompleted = () => {

  return (
    <Container>
      <h2>本登録が完了しました。</h2>
      <p>ご登録ありがとうございます。</p>
      <BaseLink to="/login">ログイン画面へ</BaseLink>
      <BaseLink to="/">ホーム画面へ</BaseLink>
    </Container>
  );
}

export default RegistrationCompleted;