import React, {useState} from 'react';
import { Container, BaseButton } from '../styles/style';
import { useNavigate, useParams } from 'react-router-dom';
import { userActivation } from '../../../API/authentication';


const RegistrationConfirmation = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate ();
  const params = useParams()

  const handleRegistrationComplete = async() => {
    setIsButtonDisabled(true)
    try {
      const values = {'uid': params.uid, 'token': params.token}
      await userActivation(values)
      navigate('/registration-completed');
      
    } catch {
      setErrorMessage('エラーが発生しました。')
    }
  };

  return (
    <Container>
      <h2>下記のボタンをクリックでアカウントの本登録が完了します。</h2>
      <BaseButton disabled={isButtonDisabled} onClick={handleRegistrationComplete}>本登録完了</BaseButton>
      {errorMessage && <p>{errorMessage}</p>}
    </Container>
  );
}

export default RegistrationConfirmation;