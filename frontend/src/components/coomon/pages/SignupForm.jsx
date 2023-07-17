import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useNavigate  } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { createUser } from '../../../API/authentication';

const SignupForm = () => {
  const navigate = useNavigate ();

  // フォームの初期値
  const initialValues = {
    name: '',
    email: '',
    password: '',
    re_password: '',
  };

  // バリデーションスキーマの定義
  const validationSchema = Yup.object({
    name: Yup.string().max(20, '名前は20文字以内で入力してください').required('名前は必須です'),
    email: Yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスは必須です'),
    password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'パスワードは英数字大文字小文字を含む8文字以上で入力してください'
    )
    .required('パスワードは必須です'),
    re_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'パスワードが一致しません')
      .required('確認用パスワードは必須です'),
  });

  // フォームの送信ハンドラ
  const HandleSubmit = async (values, { setSubmitting }) => {
    try {
      await createUser(values);
      navigate('/activation-user');
    } catch (error) {
      // ログイン失敗時の処理
      console.error('登録失敗:', error);
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
            <Field type="re_password" id="re_password" name="re_password" />
            <ErrorMessage name="re_password" component={ErrorMessageContainer} />
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
