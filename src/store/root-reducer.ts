import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process.slice';
import { questsData } from './quests-data/quests-data.slice';
import { bookingProcess } from './booking-process/booking-process.slice';
import { userQuestsProcess } from './user-quests-process/user-quests-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Quests]: questsData.reducer,
  [NameSpace.Booking]: bookingProcess.reducer,
  [NameSpace.MyQuests]: userQuestsProcess.reducer
});
