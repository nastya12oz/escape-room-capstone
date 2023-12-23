export type TimeAvailable = {
  time: string;
  isAvailable: boolean;
}

type Location = {
  address: string;
  coords: number[];
}

export type BookingQuest = {
  id: string;
  location: Location;
  slots: {
    today: TimeAvailable[];
     tomorrow: TimeAvailable[];
  };
};
