import { Formik, Form, ErrorMessage, Field } from 'formik';
import useForm from '@/hooks/useForm';
import { getUser, login } from '../services/auth';
import { validationSchemaLogin } from '../validations';
import { LoginTs } from '../interfaces/login';
import { saveCookie } from '@/utils/cookie';
import { route } from 'preact-router';
import { UserType } from '../interfaces/user';
import { useUser } from '@/store/user';

const Login = () => {
  const { handleSend, handleShowBtn, handleShowMessage } = useForm<
    LoginTs,
    string
  >({
    services: login
  });

  const { loadUser } = useUser();

  const handleClick = async (val: LoginTs) => {
    const { data } = await handleSend(val);
    if (data) {
      saveCookie('token', data);
      const { data: dataUser } = await getUser<UserType>();
      loadUser(dataUser);
      route('/company');
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
        <Form class={'form'}>
          <Field class="input" type="text" placeholder="Correo" name="email" />
          <ErrorMessage component="p" class="error" name="email" />
          <Field
            class="input"
            type="text"
            placeholder="Contraseña"
            name="password"
          />
          <ErrorMessage component="p" class="error" name="password" />
          {handleShowBtn('login')}
        </Form>
      </Formik>
      {handleShowMessage()}
    </>
  );
};

export default Login;
