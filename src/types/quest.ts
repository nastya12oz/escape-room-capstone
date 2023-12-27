export enum TLevel {
  All = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum TQuestType {
  All = 'all-quests',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: TLevel;
  type: TQuestType;
  peopleMinMax: [number, number];
}

export type TQuestsList = TQuest[];


export type TQuestFull = {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: TLevel;
    type: TQuestType;
    peopleMinMax: [number, number];
    description: string;
    coverImg: string;
    coverImgWebp: string;
}
