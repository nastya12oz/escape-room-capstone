export const BACKEND_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room/';
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
