import React, {useState} from 'react';
import { resendActivation } from '../../../API/authentication';
import { Container, BaseButton } from '../styles/style';
import { postRequest } from '../../../API';


const ActivationUser = () => {

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    
    const handleResendEmail = async () => {
      if (window.confirm('本当にメールを再送信しますか？')) {
        const data = {'email': email}
        try {
          const response = await postRequest('/api/checkEmail/', data);
          if (response.data.status === 'ok') {
            resendActivation(data)
            setIsButtonDisabled(true); // ボタン無効化
            setTimeout(() => setIsButtonDisabled(false), 300000); // 5分後にボタンを有効化
            setErrorMessage('メール再送信後は5分間に再送信はできません')
          } else {
            setErrorMessage('メールアドレスをご確認ください');
          }
        } catch (error) {
          setErrorMessage('エラーが発生しました');
        }
      }
    };
    
    const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    
    return (
      <Container>
        <h1>仮登録が完了しました</h1>
        <p>本登録を完了するために、メールをご確認ください。</p>
        <p>メールに記載されたリンクをクリックして本登録を行ってください。</p>
        <p>メールが届かない方は下記に再度メールアドレスを入力して<br/>
          メール再送信用ボタンからメールの再送信を入力してください。</p>
        <input type="email" placeholder='メールアドレス' value={email} onChange={handleChangeEmail} />
        {errorMessage && <p>{errorMessage}</p>}
        <BaseButton disabled={isButtonDisabled} onClick={handleResendEmail}>メール再送信</BaseButton>
      </Container>
    );
};


export default ActivationUser;
