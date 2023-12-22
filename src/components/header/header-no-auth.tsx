import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

function HeaderNoAuth(): JSX.Element {
  const location = useLocation();

  return(
    <header className="header">
      <div className="container container--size-l">
        <a className="logo header__logo" href="index.html" aria-label="Перейти на Главную">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </a>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={classNames('link', { active: location.pathname === AppRoute.Main })}
                to={AppRoute.Main}
              >Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={classNames('link', { active: location.pathname === AppRoute.Contacts })}
                to={AppRoute.Contacts}
              >Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default HeaderNoAuth;
