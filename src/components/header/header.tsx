import HeaderAuth from './header-auth';
import HeaderNoAuth from './header-no-auth';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { useAppSelector } from '../../hooks';

function Header(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return(
    isAuthorized ? <HeaderAuth /> : <HeaderNoAuth />
  );
}

export default Header;
