import { createSlice } from '@reduxjs/toolkit';
import { QuestsData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchQuestsListAction, fetchQuestByIdAction } from '../api-actions';

const initialState: QuestsData = {
  questsList: [],
  isQuestsDataLoading: false,
  hasQuestsError: false,
  quest: null,
  hasQuestError: false,
  isQuestDataLoading: false,
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsListAction.pending, (state) => {
        state.hasQuestsError = false;
        state.isQuestsDataLoading = true;
      })
      .addCase(fetchQuestsListAction.fulfilled, (state, action) => {
        state.questsList = action.payload;
        state.hasQuestsError = false;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchQuestsListAction.rejected, (state) => {
        state.questsList = [];
        state.hasQuestsError = true;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchQuestByIdAction.pending, (state) => {
        state.hasQuestError = false;
        state.isQuestDataLoading = true;
      })
      .addCase(fetchQuestByIdAction.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.hasQuestError = false;
        state.isQuestDataLoading = false;
      })
      .addCase(fetchQuestByIdAction.rejected, (state) => {
        state.hasQuestError = true;
        state.isQuestDataLoading = false;
      });
  }
});
