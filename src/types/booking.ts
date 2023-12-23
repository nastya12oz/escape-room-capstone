import { TQuest } from './quest';

export type TimeAvailable = {
  time: string;
  isAvailable: boolean;
}

type Location = {
  address: string;
  coords: number[];
}

// enum TDay {
//   Today = 'today',
//   Tomorrow = 'tomorrow',
// }

export type TBookingQuest = {
  id: string;
  location: Location;
  slots: {
    today: TimeAvailable[];
     tomorrow: TimeAvailable[];
  };
};

export type TBookingQuests = TBookingQuest[];

export type TBookingData = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type TUserBookingData = {
  children: string;
  date: string;
  contactPerson: string;
  person: string;
  phone: string;
};

enum BookingDays {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export type TUserQuest = {

    date: BookingDays;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    id: string;
    location: Location;
    quest: TQuest;
}

export type TUserQuests = TUserQuest[];
