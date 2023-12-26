import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { AppRoute, APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { saveToken, dropToken } from '../sevices/token';
import { TAuthData, TUserData } from '../types/user';
import { TQuestsList, TQuestFull } from '../types/quest';
import { TBookingPlaces, TBookingData, TUserQuests } from '../types/booking';


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
  async ({email, password}, { extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
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

export const fetchQuestsListAction = createAsyncThunk<TQuestsList, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchProductsList',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<TQuestsList>(APIRoute.QuestsList);
    return data;
  },
);

export const fetchQuestByIdAction = createAsyncThunk<TQuestFull, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchQuestByIdAction',
  async (id, { extra: api }) => {
    const { data } = await api.get<TQuestFull>(`${APIRoute.QuestsList}/${id}`);
    return data;
  },
);

export const fetchBookingPlaceAction = createAsyncThunk<TBookingPlaces, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchBookingPlaceAction',
  async(id, {extra: api}) => {
    const {data} = await api.get<TBookingPlaces>(APIRoute.Booking.replace(':id', id));
    return data;
  }
);

export const fetchSendBookingAction = createAsyncThunk<void, {currentData: TBookingData; id:string; navigate: NavigateFunction}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSendBooking',
  async({currentData, id, navigate}, {extra: api}) => {
    await api.post<void>(APIRoute.Booking.replace(':id', id), currentData);
    navigate(AppRoute.MyQuests);
  }
);

export const fetchUserQuestsAction = createAsyncThunk<TUserQuests, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchUserQuests',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<TUserQuests>(APIRoute.UserQuests);
    return data;
  }
);

export const fetchDeleteUserQuestAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchDeleteUserQuest',
  async(id, {dispatch, extra: api}) => {
    await api.delete<void>(`${APIRoute.UserQuests}/${id}`);
    dispatch(fetchUserQuestsAction());
  }
);
