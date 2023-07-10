import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../action/authActions';
import { postRequest } from '../../../API';
import { login } from '../../../API/authentication';


const LoginForm = () => {

  const dispatch = useDispatch()
  const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token']);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // レンダリング時にアクセストークンを取得する
    const storedAccessToken = cookies.access_token;
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  // フォームの初期値
  const initialValues = {
    email: '',
    password: '',
  };

  // バリデーションスキーマの定義
  const validationSchema = Yup.object({
    email: Yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
    password: Yup.string().required('パスワードは必須です'),
  });

  // フォームの送信ハンドラ
  const HandleSubmit = async (values, { setSubmitting }) => {
    try {
      // バックエンドのAPIエンドポイントにログインリクエストを送信
      console.log(values.email);
      const response = login(values.email, values.password);
      // ログイン成功時の処理（認証トークンの保存など）
      // ログインAPIなどの非同期処理が成功した場合
      const { access_token, refresh_token } = response.data;
      setCookie('access_token', access_token, { path: '/' });
      setCookie('refresh_token', refresh_token, { path: '/' });

      // 取得したアクセストークンをstateに保存する
      setAccessToken(access_token);
      // dispatch(loginSuccess(user));
    } catch (error) {
      // ログイン失敗時の処理
      console.error('ログイン失敗:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={HandleSubmit}>
        <Form>
          <FormGroup>
            <label htmlFor="email">メールアドレス</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component={ErrorMessageContainer} />
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">パスワード</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component={ErrorMessageContainer} />
          </FormGroup>

          <SubmitButton type="submit">ログイン</SubmitButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ErrorMessageContainer = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #D54884;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default LoginForm;
