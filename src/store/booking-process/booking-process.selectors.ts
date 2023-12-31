import { NameSpace } from '../../const';
import { TBookingPlaces, TBookingPlace } from '../../types/booking';
import { State } from '../../types/state';

export const getBookingPlaces = (state: Pick<State, NameSpace.Booking>): TBookingPlaces | null => state[NameSpace.Booking].bookingPlaces;
export const getPlacesLoadingStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].isPlacesLoading;
export const getPlacesErrorStatus = (state: Pick<State, NameSpace.Booking>): boolean => state[NameSpace.Booking].hasPlacesError;
export const getSelectedPlace = (state: Pick<State, NameSpace.Booking>): TBookingPlace | null => state[NameSpace.Booking].selectedPlace;
