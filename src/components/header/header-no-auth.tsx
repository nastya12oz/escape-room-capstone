import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

function HeaderNoAuth(): JSX.Element {
  const {pathname} = useLocation();
  const isIndexPage = pathname === AppRoute.Main;
  const isLoginPage = pathname === AppRoute.Login;

  return(
    <header className="header">
      <div className="container container--size-l">
        {isIndexPage ? (
          <a className="logo header__logo" aria-label="Перейти на Главную">
            <svg width={134} height={52} aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </a>) :
          (
            <Link className="logo header__logo" to={AppRoute.Main} aria-label="Перейти на Главную">
              <svg width={134} height={52} aria-hidden="true">
                <use xlinkHref="#logo"></use>
              </svg>
            </Link>
          ) }
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={classNames('link', { active: pathname === AppRoute.Main })}
                to={AppRoute.Main}
              >Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={classNames('link', { active: pathname === AppRoute.Contacts })}
                to={AppRoute.Contacts}
              >Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          {
            !isLoginPage && <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
          }
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default HeaderNoAuth;
