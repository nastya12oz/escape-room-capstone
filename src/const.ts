import { TLevel, TQuestType } from './types/quest';
import { TBookingDays } from './types/booking';

export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room/';
export const REQUEST_TIMEOUT = 5000;


export enum AppRoute {
  Main = '/',
  Contacts = '/contacts',
  Booking = '/quest/:id/booking',
  MyQuests = '/my-quests',
  Quest = '/quest/:id',
  Login = '/login'
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  QuestsList ='/quest',
  Booking = '/quest/:id/booking',
  UserQuests = '/reservation'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum NameSpace {
  User = 'USER',
  MyQuests = 'MY_QUESTS',
  Quests = 'QUESTS',
  Booking = 'BOOKING'
}

export const Contacts = {
  CITY: 'Санкт-Петербург',
  ADDRESS: 'Набережная реки Карповка, д 5П',
  WORKING_START: '10:00',
  WORKING_END: '22:00',
  TELEPHONE: '8 (000) 111-11-11',
  EMAIL: 'info@escape-room.ru',
  LAT: 59.968142,
  LNG: 30.316425,
  ZOOM: 10,
};

export const displayedLevel = {
  [TLevel.All]: 'Любой',
  [TLevel.Easy]: 'Лёгкий',
  [TLevel.Medium]: 'Средний',
  [TLevel.Hard]: 'Сложный'
};

export const displayedQuestType = {
  [TQuestType.All]: 'Все квесты',
  [TQuestType.Adventures]: 'Приключения',
  [TQuestType.Horror]: 'Ужасы',
  [TQuestType.Mystic]: 'Мистика',
  [TQuestType.Detective]: 'Детектив',
  [TQuestType.SciFi]: 'Sci-fi',
};

export const displayedDay = {
  [TBookingDays.Today]: 'сегодня',
  [TBookingDays.Tomorrow]: 'завтра'
};

export const QuestDescriptionLength = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
};

export const PasswordLength = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 15,
};
