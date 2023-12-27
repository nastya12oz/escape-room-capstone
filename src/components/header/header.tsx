import HeaderAuth from './header-auth';
import HeaderNoAuth from './header-no-auth';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { useAppSelector } from '../../hooks';
import { memo } from 'react';

function HeaderRaw(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return(
    isAuthorized ? <HeaderAuth /> : <HeaderNoAuth />
  );
}

const Header = memo(HeaderRaw);

export default Header;
