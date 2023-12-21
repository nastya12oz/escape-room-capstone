import { NameSpace, AuthorizationStatus } from '../../const.js';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUserErrorStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].hasError;
export const getUserDataLoadingStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isLoading;
