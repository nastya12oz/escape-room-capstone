import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute } from '../../consts';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import BookingScreen from '../../pages/booking-screen/booking-screen';
import ConactsScreen from '../../pages/contacts-screen/contacts-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyQuestsScreen from '../../pages/my-quests-screen/my-quests-screen';
import QuestScreen from '../../pages/quest-screen/quest-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';


function App(): JSX.Element {
  return(
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path={AppRoute.Main} element={<WelcomeScreen />} />
          <Route path={AppRoute.Booking} element={<BookingScreen />} />
          <Route path={AppRoute.Contacts} element={<ConactsScreen />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.MyQuests} element={<MyQuestsScreen />} />
          <Route path={AppRoute.Quest} element={<QuestScreen />} />
          <Route path='*'element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
