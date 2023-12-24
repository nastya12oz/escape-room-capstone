import { NameSpace } from '../../const';
import { TUserQuests } from '../../types/booking';
import { State } from '../../types/state';

export const getUserQuests = (state: Pick<State, NameSpace.MyQuests>): TUserQuests => state[NameSpace.MyQuests].userQuests;
export const getUserQuestsLoadingStatus = (state: Pick<State, NameSpace.MyQuests>): boolean => state[NameSpace.MyQuests].isUserQuestsQuestsLoading;
export const getUserQuestsErrorStatus = (state: Pick<State, NameSpace.MyQuests>): boolean => state[NameSpace.MyQuests].hasUserQuestsError;
export const getDeletingStatus = (state: Pick<State, NameSpace.MyQuests>): boolean => state[NameSpace.MyQuests].isDeleting;
export const getDeletingErrorStatus = (state: Pick<State, NameSpace.MyQuests>): boolean => state[NameSpace.MyQuests].hasDeleteUserQuestError;
