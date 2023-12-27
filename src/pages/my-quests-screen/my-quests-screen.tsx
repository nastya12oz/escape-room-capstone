import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { fetchUserQuestsAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getUserQuests, getUserQuestsErrorStatus, getUserQuestsLoadingStatus } from '../../store/user-quests-process/user-quests-process.selector';
import BookedQuestCard from '../../components/booked-quest-card/booked-quest-card';
import CancelButton from '../../components/cancel-btn/cancel-btn';

function MyQuestsScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const userQuests = useAppSelector(getUserQuests);
  const hasError = useAppSelector(getUserQuestsErrorStatus);
  const isLoading = useAppSelector(getUserQuestsLoadingStatus);

  useEffect(() => {
    dispatch(fetchUserQuestsAction());
  }, [dispatch]);

  if(isLoading) {
    return <p>Loading...</p>;
  }

  if(hasError) {
    return <p>Error...</p>;
  }


  return(
    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room - Мои бронирования</title>
      </Helmet>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width={1366} height={1959} alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <div className="cards-grid">
            {userQuests.map((userQuest) =>
              (
                <BookedQuestCard
                  key={userQuest.id}
                  questCard={userQuest.quest}
                  address={userQuest.location.address}
                  date={userQuest.date}
                  time={userQuest.time}
                  peopleCount={userQuest.peopleCount}
                >
                  {<CancelButton id={userQuest.id} />}
                </BookedQuestCard>))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MyQuestsScreen;
