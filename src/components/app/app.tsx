import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import BookingScreen from '../../pages/booking-screen/booking-screen';
import ConactsScreen from '../../pages/contacts-screen/contacts-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyQuestsScreen from '../../pages/my-quests-screen/my-quests-screen';
import QuestScreen from '../../pages/quest-screen/quest-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { checkAuthAction, fetchQuestsListAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuestsListErrorStatus, getQuestsListLoadingStatus } from '../../store/quests-data/quests-data.selectors';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { useEffect } from 'react';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isQuestsLoading = useAppSelector(getQuestsListLoadingStatus);
  const hasError = useAppSelector(getQuestsListErrorStatus);

  useEffect(() => {
    dispatch(fetchQuestsListAction());
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (!isAuthChecked || isQuestsLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error...</p>;
  }


  return(
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path={AppRoute.Main} element={<WelcomeScreen />} />
          <Route path={AppRoute.Contacts} element={<ConactsScreen />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Quest} element={<QuestScreen />} />
          <Route element={<PrivateRoute authorizationStatus={authorizationStatus} />}>
            <Route path={AppRoute.Booking} element={<BookingScreen />} />
            <Route path={AppRoute.MyQuests} element={<MyQuestsScreen />} />
          </Route>
          <Route path='*'element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
