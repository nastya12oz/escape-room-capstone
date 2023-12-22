export function isPasswordValid(password: string): boolean {
  return /[A-Za-z]/.test(password) && /\d/.test(password);
}
