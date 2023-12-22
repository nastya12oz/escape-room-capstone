import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { TQuestsList, TQuestFull } from '../../types/quest';

export const getQuestsList = (state: Pick<State, NameSpace.Quests>): TQuestsList => state[NameSpace.Quests].questsList;
export const getQuestsListErrorStatus = (state: Pick<State, NameSpace.Quests>): boolean => state[NameSpace.Quests].hasQuestsError;
export const getQuestsListLoadingStatus = (state: Pick<State, NameSpace.Quests>): boolean => state[NameSpace.Quests].isQuestsDataLoading;
export const getQuest = (state: State): TQuestFull | null => state[NameSpace.Quests].quest;
export const getQuestErrorStatus = (state: Pick<State, NameSpace.Quests>): boolean => state[NameSpace.Quests].hasQuestError;
export const getQuestLoadingStatus = (state: Pick<State, NameSpace.Quests>): boolean => state[NameSpace.Quests].isQuestDataLoading;
