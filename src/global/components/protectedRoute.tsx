import { useUser } from '@/store/user';
import { Route } from 'preact-router';
import Auth from '../../public/auth';
import Company from '../../public/company';

interface Params {
  path: string;
  component: any;
}

export const ProtectedRoute = ({ path, component }: Params) => {
  const { user } = useUser();
  const auth = user.id == 0 ? Auth : component;
  const pathAuth = user.id == 0 ? '/auth' : path;
  return <Route path={pathAuth} component={auth} />;
};

