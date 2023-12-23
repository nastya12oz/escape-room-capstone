import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { BookingProcess } from '../../types/state';
import { fetchBookingPlaceAction } from '../api-actions';
import { BookingQuest } from '../../types/booking';

const initialState: BookingProcess = {
  bookingPlaces: [],
  isPlacesLoading: false,
  hasPlacesError: false,
  selectedPlace: null,
};

export const bookingProcess = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setSelectedPlace: (state, action: PayloadAction<BookingQuest>) => {
      state.selectedPlace = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookingPlaceAction.pending, (state) => {
        state.isPlacesLoading = true;
        state.hasPlacesError = false;
      })
      .addCase(fetchBookingPlaceAction.fulfilled, (state, action) => {
        state.bookingPlaces = action.payload;
        state.selectedPlace = action.payload[0];
        state.isPlacesLoading = false;
        state.hasPlacesError = false;
      })
      .addCase(fetchBookingPlaceAction.rejected, (state) => {
        state.hasPlacesError = true;
        state.isPlacesLoading = false;
      });
  }
});

export const { setSelectedPlace } = bookingProcess.actions;
