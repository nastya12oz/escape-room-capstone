import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuestByIdAction } from '../../store/api-actions';
import { getQuestErrorStatus, getQuestLoadingStatus } from '../../store/quests-data/quests-data.selectors';
import { getQuest } from '../../store/quests-data/quests-data.selectors';
import { useEffect } from 'react';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


function QuestScreen(): JSX.Element {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isQuestLoading = useAppSelector(getQuestLoadingStatus);
  const quest = useAppSelector(getQuest);
  const hasQuestError = useAppSelector(getQuestErrorStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchQuestByIdAction(id));
    }
  }, [id, dispatch]);

  if(isQuestLoading) {
    return(
      <p> Loading...</p>
    );
  }

  if(hasQuestError || !quest) {
    return(<NotFoundScreen />);
  }

  return(
    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room - {quest.title}</title>
      </Helmet>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={quest.coverImgWebp} /><img src={quest.coverImg} width={1366} height={768} alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{quest.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{quest.type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>3&ndash;6&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>Средний
              </li>
            </ul>
            <p className="quest-page__description">{quest.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={AppRoute.Booking}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default QuestScreen;
