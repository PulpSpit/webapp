import {
  BrowserRouter as Router,
  RouteProps,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import Loader from 'containers/Loader';
import { Suspense } from 'react';
import { PUBLIC_ROUTES } from './routes';

interface RouteType extends RouteProps {
  component: any;
}

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

const RoutesContainer = withRouter(() => (
  <Switch>
    {PUBLIC_ROUTES.map((route) => (
      <PublicRoute key={route.path} {...route} />
    ))}
  </Switch>
));

const Navigation = (): JSX.Element => (
  <Router>
    <RoutesContainer />
  </Router>
);

export default Navigation;
