import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { validatePassword, validateEmail } from '../../utils/utils';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { TAuthData } from '../../types/user';
import { useEffect } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';


function LoginScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const { register, handleSubmit, formState: { errors } } = useForm<TAuthData>();

  const handleLoginSubmit: SubmitHandler<FieldValues> = (data) => {

    const {email, password} = data as TAuthData;
    dispatch(loginAction(
      {
        email: email,
        password: password,
      },
    ));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.MyQuests);
    }
  }, [authorizationStatus, navigate]);


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
            <form
              className="login-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
              onSubmit={(evt) => {
                handleSubmit(handleLoginSubmit)(evt);
              }}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Адрес электронной почты"
                      {...register('email',
                        { required: 'Обязательное поле',
                          validate: {
                            validateEmail
                          }
                        })}
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input
                      type="password"
                      id="password"

                      placeholder="Пароль"
                      {...register('password',
                        { required: 'Обязательное поле',
                          validate: {
                            validatePassword
                          }
                        })}
                    />
                  </div>
                </div>
                {errors.email && <p>{errors.email.message}</p>}
                {errors.password && <p>{errors.password.message}</p>}
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
