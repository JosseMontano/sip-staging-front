import { useUser } from '@/store/user';
import { saveCookie } from '@/utils/cookie';
import { route } from 'preact-router';
import { useState } from 'preact/hooks';
import Login from './components/login';
import Recover from './components/recover';
import Register from './components/register';
import Template from './components/template';
import { Page } from './interfaces/Page';
import { UserType } from './interfaces/user';
import { getUser, signInAsGuest } from './services/auth';

const Auth = () => {
  const [page, setPage] = useState<Page>('login');
  const { loadUser } = useUser();

  const handleClick = async () => {
    if (page != 'register') {
      const { data } = await signInAsGuest<UserType, string>();
      if (data) {
        saveCookie('token', data);
        const { data: dataUser } = await getUser<UserType>();
        loadUser(dataUser);
        route('/company');
      }
      return;
    }
    setPage('login');
  };

  return (
    <Template
      setPage={setPage}
      title={
        page === 'register'
          ? 'Crea una cuenta'
          : page === 'login'
          ? 'Inicia sesión'
          : page === 'recover'
          ? 'Recupera tu cuenta'
          : ''
      }
      description={
        page === 'register'
          ? 'Regístrate y únete a SIVI'
          : page === 'login'
          ? 'Disfruta las funcionalidades'
          : page === 'recover'
          ? 'Te enviaremos un correo electrónico'
          : ''
      }
      bottomText={
        page === 'register'
          ? '¿Ya tienes una cuenta?'
          : page === 'login'
          ? 'Ingresa como invitado'
          : page === 'recover'
          ? 'Ingresa como invitado'
          : ''
      }
      handleClick={handleClick}
      toLogin={page === 'register' || page === 'recover'}
      toRegister={page === 'login' || page === 'recover'}
      toRecover={page === 'login'}
    >
      {page === 'login' && <Login />}
      {page === 'register' && <Register />}
      {page === 'recover' && <Recover />}
    </Template>
  );
};

export default Auth;
