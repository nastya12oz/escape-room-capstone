import { TQuest } from './quest';

export type TimeAvailable = {
  time: string;
  isAvailable: boolean;
}

type Location = {
  address: string;
  coords: number[];
}

export type TBookingQuest = {
  id: string;
  location: Location;
  slots: {
    today: TimeAvailable[];
     tomorrow: TimeAvailable[];
  };
};

export type TBookingData = {
  date: TBookingQuest;
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

export type TMyQuest = {

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

export type TMyQuests = TMyQuest[];
