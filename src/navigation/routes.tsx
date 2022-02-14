import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

export interface RouteObject extends RouteProps {
  exact: boolean;
  path: string;
  component: any;
}

const Home = lazy(() => import('containers/Home'));
const Landing = lazy(() => import('containers/LandingPage'));
const Dashboard = lazy(() => import('containers/Dashboard'));

const PUBLIC_ROUTES: RouteObject[] = [
  {
    exact: true,
    path: '/dashboard',
    component: Dashboard,
  },
];

const AUTH_ROUTES: RouteObject[] = [
  {
    exact: true,
    path: '/',
    component: Landing,
  },
];

const PRIVATE_ROUTES: RouteObject[] = [
  {
    exact: true,
    path: '/home',
    component: Home,
  },
];

export { PRIVATE_ROUTES, PUBLIC_ROUTES, AUTH_ROUTES };
