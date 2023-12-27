import { QuestDescriptionLength, PasswordLength } from '../const';

export function getFormDateTime(data: string) {
  return {
    date: data.slice(0, -5),
    time: data.slice(-5),
  };
}

export function validatePassword(password: string) {
  if (
    !password ||
      password.length < PasswordLength.MIN_LENGTH || password.length > PasswordLength.MAX_LENGTH ||
      !/\d/.test(password) ||
      !/\D/i.test(password) ||
      false
  ) {
    return 'Please ensure your password has at least 1 digit and 1 character, no less then 3 and no more then 15 symbols';
  }

  return true;
}

export function validateEmail(email: string) {
  if (
    !email ||
      !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email) ||
      false
  ) {
    return 'Email is not correct';
  }

  return true;
}

export function validateName(value: string) {
  if (
    !value ||
      !/[А-Яа-яЁёA-Za-z]{1,}/.test(value) ||
      false
  ) {
    return 'Please provide your correct name';
  }

  return true;
}

export function validatePhoneNumber(value: string): string | boolean {
  if (
    !value ||
      !/^((\+7))(\(\d{3}\))(\d{3}-)(\d{2}-)(\d{2})$/.test(value) ||
      false
  ) {
    return 'your number must be format +7(000)000-00-00';
  }

  return true;
}


export const getIconName = (type: string) => {
  if (type === 'adventures') {
    return 'adventure';
  }
  return type;
};

export const getMiddleLevel = (level: string) => {
  if(level === 'medium') {
    return 'middle';
  }
  return level;
};

export const truncateQuestDescription = (description: string) =>
  description.length > QuestDescriptionLength.MAX_LENGTH ?
    `${description.substring(0, QuestDescriptionLength.MAX_LENGTH) }...`
    : description;
