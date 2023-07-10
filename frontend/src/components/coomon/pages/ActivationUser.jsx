import React, {useState} from 'react';
import { resendActivation } from '../../../API/authentication';
import { Container } from '../styles/style';
import { postRequest } from '../../../API';
import { Link } from 'react-router-dom';


const ActivationUser = () => {

    const [email, setEmail] = useState('');
    
    const handleResendEmail = () => {
        const date = { 'email': email}
        const response = postRequest('/api/checkEmail/', date);
        if (window.confirm('本当にメールを再送信しますか？')) {
            // メール再送信の処理を実装する
            // API呼び出しや適切なロジックを追加してください
            console.log('メール再送信:', email);
        }
      // メール再送信の処理を実装する
      // API呼び出しや適切なロジックを追加してください
      console.log('メール再送信:', email);
    };
    
    const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    
    return (
      <Container>
        <h1>仮登録が完了しました</h1>
        <p>本登録を完了するために、メールをご確認ください。</p>
        <p>メールに記載されたリンクをクリックして本登録を行ってください。</p>
        <p>メール再送信用のメールアドレスを入力してください:</p>
        <input type="email" value={email} onChange={handleChangeEmail} />
        <button onClick={handleResendEmail}>メール再送信</button>
        <Link to="/login">ログインページへ</Link>
      </Container>
    );
};


export default ActivationUser;
