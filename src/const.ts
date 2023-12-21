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
  Logout = '/logout'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum NameSpace {
  User = 'USER',
  MyQuests = 'MY_QUESTS'
}
