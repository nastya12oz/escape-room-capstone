enum Allowed {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

enum Type {
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
  level: Allowed;
  type: Type;
  peopleMinMax: [number, number];
}

export type TQuestsList = TQuest[];


export type TQuestFull = {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: Allowed;
    type: Type;
    peopleMinMax: [number];
    description: string;
    coverImg: string;
    coverImgWebp: string;
}
