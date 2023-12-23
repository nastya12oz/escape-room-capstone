import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { getBookingPlaces } from '../../store/booking-process/booking-process.selectors';
import { getQuest, getQuestErrorStatus, getQuestLoadingStatus } from '../../store/quests-data/quests-data.selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchBookingPlaceAction } from '../../store/api-actions';
import BookingMap from '../../components/map/map-booking';
import BookingFrom from '../../components/booking-form/booking-form';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function BookingScreen(): JSX.Element {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isQuestLoading = useAppSelector(getQuestLoadingStatus);
  const quest = useAppSelector(getQuest);
  const hasQuestError = useAppSelector(getQuestErrorStatus);
  const bookingPlaces = useAppSelector(getBookingPlaces);

  console.log('bookingPlaces', bookingPlaces);
  console.log('quest', quest);


  useEffect(() => {
    if (id) {
      dispatch(fetchBookingPlaceAction(id));
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
        <title>Escape Room - Бронирование места </title>
      </Helmet>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{quest.title}</p>
          </div>
          <div className="page-content__item">
            <BookingMap places={bookingPlaces} />
            <BookingFrom placeId={quest.id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BookingScreen;
