import { Navigate, Outlet } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
}

const PrivateRoute = ({authorizationStatus}: PrivateRouteProps) => authorizationStatus === AuthorizationStatus.Auth ? <Outlet /> : <Navigate to={AppRoute.Login} />;

export default PrivateRoute;
