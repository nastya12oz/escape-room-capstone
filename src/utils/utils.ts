export function isPasswordValid(password: string): boolean {
  return /[A-Za-z]/.test(password) && /\d/.test(password);
}

export function getFormDateTime(data: string) {
  return {
    date: data.slice(0, -5),
    time: data.slice(-5),
  };
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
