import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { TQuestsList, TQuestFull } from './quest';
import { TBookingPlace, TBookingPlaces, TUserQuests } from './booking';


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  isLoading: boolean;
  hasError: boolean;
};

export type QuestsData = {
  questsList: TQuestsList;
  hasQuestsError: boolean;
  isQuestsDataLoading: boolean;
  quest: TQuestFull | null;
  hasQuestError: boolean;
  isQuestDataLoading: boolean;
}

export type BookingProcess = {
  bookingPlaces: TBookingPlaces;
  isPlacesLoading: boolean;
  hasPlacesError: boolean;
  selectedPlace: TBookingPlace | null;
}

export type UserQuestsProcess = {
  userQuests: TUserQuests;
  isUserQuestsQuestsLoading: boolean;
  hasUserQuestsError: boolean;
  hasDeleteUserQuestError: boolean;
  isDeleting: boolean;
}
