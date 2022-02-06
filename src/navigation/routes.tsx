import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

export interface RouteObject extends RouteProps {
  exact: boolean;
  path: string;
  component: any;
}

const Home = lazy(() => import('containers/Home'));
const Landing = lazy(() => import('containers/LandingPage'));

const PUBLIC_ROUTES: RouteObject[] = [
  {
    exact: true,
    path: '/home',
    component: Home,
  },
  {
    exact: true,
    path: '/',
    component: Landing,
  },
];

export { PUBLIC_ROUTES };
