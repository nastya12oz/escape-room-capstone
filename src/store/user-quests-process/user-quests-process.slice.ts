import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { UserQuestsProcess } from '../../types/state';
import { fetchUserQuestsAction, fetchDeleteUserQuestAction } from '../api-actions';

const initialState: UserQuestsProcess = {
  userQuests: [],
  isUserQuestsQuestsLoading: false,
  hasUserQuestsError: false,
  hasDeleteUserQuestError: false,
  isDeleting: false,
};

export const userQuestsProcess = createSlice({
  name: NameSpace.MyQuests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserQuestsAction.pending, (state) => {
        state.isUserQuestsQuestsLoading = true;
        state.hasUserQuestsError = false;
      })
      .addCase(fetchUserQuestsAction.fulfilled, (state, action) => {
        state.userQuests = action.payload;
        state.isUserQuestsQuestsLoading = false;
        state.hasUserQuestsError = false;
      })
      .addCase(fetchUserQuestsAction.rejected, (state) => {
        state.isUserQuestsQuestsLoading = false;
        state.hasUserQuestsError = true;
      })
      .addCase(fetchDeleteUserQuestAction.pending, (state) => {
        state.hasDeleteUserQuestError = false;
        state.isDeleting = true;
      })
      .addCase(fetchDeleteUserQuestAction.fulfilled, (state) => {
        state.hasDeleteUserQuestError = false;
        state.isDeleting = false;
      })
      .addCase(fetchDeleteUserQuestAction.rejected, (state) => {
        state.hasDeleteUserQuestError = true;
        state.isDeleting = false;
      });
  }
});
