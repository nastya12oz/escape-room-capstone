export function getFormDateTime(data: string) {
  return {
    date: data.slice(0, -5),
    time: data.slice(-5),
  };
}

export function validatePassword(password: string) {
  if (!password || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    return 'Please provide your correct password with at least 1 letter and 1 number';
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

export function validatePhoneNumber(value: string) {
  if (
    !value ||
      !/[0-9]{10,}/.test(value) ||
      false
  ) {
    return 'Please provide your correct phone number';
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
