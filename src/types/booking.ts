import { TQuest } from './quest';

export type TimeAvailable = {
  time: string;
  isAvailable: boolean;
}

type TLocation = {
  address: string;
  coords: number[];
}

export enum TBookingDays {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export type TUserQuest = {

    date: TBookingDays;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    id: string;
    location: TLocation;
    quest: TQuest;
}

export type TUserQuests = TUserQuest[];

export type TSlot = {
  time: string;
  isAvailable: boolean;
}

export type TBookingPlace = {
  id: string;
  location: TLocation;
  slots: {
    today: TSlot[];
     tomorrow: TSlot[];
  };
}

export type TBookingPlaces = TBookingPlace[];

export type TBookingData = {
date: TBookingDays;
time: string;
contactPerson: string;
phone: string;
withChildren: boolean;
peopleCount: number;
placeId: string;
}

export type TCurrentFormData = {
  children: string;
  date: string;
  contactPerson: string;
  person: string;
  phone: string;
}
