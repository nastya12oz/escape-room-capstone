import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useState, useRef, FormEvent } from 'react';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { isPasswordValid } from '../../utils/utils';
import { AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';

function LoginScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(emailRef.current !== null && passwordRef.current !== null) {
      const password = passwordRef.current.value;

      if (!isPasswordValid(password)) {
        setErrorMessage('Invalid password! Ensure it contains at least one letter and one number.');
        return;
      }

      dispatch(loginAction(
        {
          email: emailRef.current.value,
          password: passwordRef.current.value
        }
      ));
      navigate(AppRoute.MyQuests);
    }
  };

  return(
    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room - Вход</title>
      </Helmet>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width={1366} height={768} alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            {errorMessage && (
              <div>
                <p>{errorMessage}</p>
              </div>
            )}
            <form className="login-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleSubmit}>
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                    <input type="email" id="email" name="email" placeholder="Адрес электронной почты" ref={emailRef} required />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input type="password" id="password" name="password" placeholder="Пароль" ref={passwordRef} required />
                  </div>
                </div>
                <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginScreen;
