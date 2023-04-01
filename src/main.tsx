import { render } from 'preact';
import { Route, Router } from 'preact-router';
import Home from './public/home';
import Company from './public/company';
import Profile from './public/profile';
import Product from './public/product';
import './global/styles/form.css';
import Auth from './public/auth';
import ChangePass from './public/changePass';
import '@/styles/app.css';
import '@/styles/noFound.css';
import Navbar from '@/components/navbar';
import { ProtectedRoute } from '@/components/protectedRoute';
import { useUser } from '@/store/user';

const Main = () => {
  const { user } = useUser();
  const auth = user.id == 0 ? Auth : Product;
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/change-password/:email/:code" component={ChangePass} />

        <ProtectedRoute path="/company" component={Company} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/product/:idCompany" component={auth} />
      </Router>
    </>
  );
};

render(<Main />, document.getElementById('app') as HTMLElement);
