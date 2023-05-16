import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

const Login = lazy(() => import('./../views/pages/Login'));
const Home = lazy(() => import('./../views/pages/Home'));

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<></>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: (
      <Suspense fallback={<></>}>
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      </Suspense>
    ),
  },
]);
