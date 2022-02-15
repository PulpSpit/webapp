import {
  BrowserRouter as Router,
  RouteProps,
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import Loader from 'containers/Loader';
import { Suspense } from 'react';
import { PRIVATE_ROUTES, PUBLIC_ROUTES, AUTH_ROUTES } from './routes';
import { useAuthContext } from '../context/AuthProvider';

interface RouteType extends RouteProps {
  component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: RouteType) => {
  const { user, userSignedOut } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Suspense fallback={<Loader color="black" />}>
            <Component {...rest} />
          </Suspense>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              search: userSignedOut
                ? ''
                : `?redirectTo=${props.location.pathname}`,
              state: { from: userSignedOut ? undefined : props.location },
            }}
          />
        );
      }}
    />
  );
};

const PublicRoute = ({
  component: Component,
  ...rest
}: RouteType): JSX.Element => (
  <Route
    {...rest}
    render={() => (
      <Suspense fallback={<Loader color="black" />}>
        <Component />
      </Suspense>
    )}
  />
);

const AuthRoute = ({
  component: Component,
  ...rest
}: RouteType): JSX.Element => {
  const { user } = useAuthContext();
  return (
    <Route
      {...rest}
      render={() => {
        return user ? (
          <Redirect to={{ pathname: '/home' }} />
        ) : (
          <Suspense fallback={<Loader color="black" />}>
            <Component />
          </Suspense>
        );
      }}
    />
  );
};
const RoutesContainer = withRouter(() => (
  <Switch>
    {PUBLIC_ROUTES.map((route) => (
      <PublicRoute key={route.path} {...route} />
    ))}
    {AUTH_ROUTES.map((route) => {
      return <AuthRoute key={route.path} {...route} />;
    })}
    {PRIVATE_ROUTES.map((route) => {
      return <PrivateRoute key={route.path} {...route} />;
    })}
  </Switch>
));

const Navigation = (): JSX.Element => (
  <Router>
    <RoutesContainer />
  </Router>
);

export default Navigation;
