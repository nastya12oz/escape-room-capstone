import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppRoute, APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { saveToken, dropToken } from '../sevices/token';
import { redirectToRoute } from './action';
import { TAuthData, TUserData } from '../types/user';


export const checkAuthAction = createAsyncThunk<TUserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUserData>(APIRoute.Login);

    return data;
  },
);

export const loginAction = createAsyncThunk<TUserData, TAuthData, {
dispatch: AppDispatch;
state: State;
extra: AxiosInstance;
}>(
  'login',
  async (login, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, login);
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {
    extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
