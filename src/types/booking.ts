import { TQuest } from './quest';

export type TimeAvailable = {
  time: string;
  isAvailable: boolean;
}

type TLocation = {
  address: string;
  coords: number[];
}

enum TBookingDays {
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

export enum TBookingDay {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

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
date: TBookingDay;
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
