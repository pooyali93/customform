export const validateRequired = (value, errorMessage) => {
  if (!value) {
    return errorMessage;
  }
  return '';
};

export const validateEmail = (value) => {
  if (!value) {
    return 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Invalid email format';
  }
  return '';
};

export const validatePassword = (value) => {
  if (!value) {
    return 'Password is required';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(value)) {
    return 'Password must be 6 to 12 characters, containing letters and numbers';
  }
  return 'Password requirements met';
};

export const validateConfirmPassword = (value, password) => {
  if (!value) {
    return 'Please confirm your password';
  } else if (value !== password) {
    return 'Passwords do not match';
  }
  return '';
};
