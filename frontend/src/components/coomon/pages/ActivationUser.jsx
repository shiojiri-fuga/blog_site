import React from 'react';
import { login } from '../../../API/authentication';
import { Container } from '../styles/style';


const ActivationUser = () => {

  // フォームの送信ハンドラ
  const handleClick = async () => {
    if (window.confirm('本当に実行しますか？')) {
        // OKボタンがクリックされたときに実行される処理
        const response = login(values.email, values.password);
      }
  };

  return (
    <Container>
        <p>アカウント登録用のメールを送信しました。</p>
        <p>メールが届かない時は下記ボタンを押してください。</p>
        <button onClick={handleClick}>メールを再送する</button>
    </Container>
  );
};


export default ActivationUser;
