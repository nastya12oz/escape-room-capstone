export function isPasswordValid(password: string): boolean {
  return /[A-Za-z]/.test(password) && /\d/.test(password);
}

export function getBookingDateTime(data: string) {
  return {
    date: data.slice(0, -5),
    time: data.slice(-5),
  };
}
