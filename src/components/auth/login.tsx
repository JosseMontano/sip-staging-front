import { Formik, Form, ErrorMessage, Field } from 'formik';
import useForm from '@/hooks/global/useForm';
import { getUser, login } from '@/services/auth/auth';
import { validationSchemaLogin } from '@/validations/auth';
import { LoginTs } from '@/interfaces/auth/login';
import { saveCookie } from '@/utils/cookie';
import { UseUser } from '@/store/user';
import { UserType } from '@/interfaces/global/user';
import { useRouter } from 'next/router';

const Login = () => {
  const { handleSend, handleShowBtn, handleShowMessage } = useForm<
    LoginTs,
    string
  >({
    services: login
  });

  const { loadUser } = UseUser();
  const router = useRouter();
  const handleClick = async (val: LoginTs) => {
    const { data } = await handleSend(val);
    if (data) {
      saveCookie('token', data);
      const { data: dataUser } = await getUser<UserType>();
      loadUser(dataUser);
      router.push("/company");
    }
  };

  return (
    <>
      <Formik
        validateOnChange={false}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchemaLogin}
        onSubmit={(val) => {
          handleClick(val);
        }}
      >
        <Form className={'form'}>
          <Field className="input" type="text" placeholder="Correo" name="email" />
          <ErrorMessage component="p" className="error" name="email" />
          <Field
            className="input"
            type="text"
            placeholder="Contraseña"
            name="password"
          />
          <ErrorMessage component="p" className="error" name="password" />
          {handleShowBtn('login')}
        </Form>
      </Formik>
      {handleShowMessage()}
    </>
  );
};

export default Login;
