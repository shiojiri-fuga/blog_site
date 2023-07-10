import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../action/authActions';
import { fetchDate, createDate, editDate, deleteDate } from '../../../API';

const SignupForm = () => {

  const dispatch = useDispatch()

  // フォームの初期値
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // バリデーションスキーマの定義
  const validationSchema = Yup.object({
    name: Yup.string().max(20, '名前は20文字以内で入力してください').required('名前は必須です'),
    email: Yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
    password: Yup.string().required('パスワードは必須です'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'パスワードが一致しません')
      .required('確認用パスワードは必須です'),
  });

  // フォームの送信ハンドラ
  const HandleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = createDate('/api/user', values);
      console.log(response);
      console.log('response');
      // 新規作成成功時の処理（ユーザー情報の保存など）
      const user = response.data;
      // ログイン成功時の処理（認証トークンの保存など）
      // ログインAPIなどの非同期処理が成功した場合
      console.log(user);
      dispatch(loginSuccess(user));
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
            <label htmlFor="name">お名前</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={ErrorMessageContainer} />
          </FormGroup>

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

          <FormGroup>
            <label htmlFor="password">確認用パスワード</label>
            <Field type="confirmPassword" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component={ErrorMessageContainer} />
          </FormGroup>

          <SubmitButton type="submit">新規作成</SubmitButton>
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

export default SignupForm;