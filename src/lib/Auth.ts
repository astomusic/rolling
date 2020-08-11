export enum AuthState {
  FAIL = 'fail',
  SUCCESS = 'success',
  UNVERIFIED = 'unverified',
}

export const setAuth = (isEmailVerified: boolean) => {
  const key = isEmailVerified ? 'T' : 'F';
  const token = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);
  localStorage.setItem('token', token + key);
};

export const isAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return AuthState.FAIL;
  }
  if (token.includes('F')) {
    return AuthState.UNVERIFIED;
  } else {
    return AuthState.SUCCESS;
  }
};

export const removeAuth = () => {
  localStorage.removeItem('token');
};
