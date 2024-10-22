function authError(error: Error) {
  let errorStr;
  switch (error.message) {
    case 'Firebase: Error (auth/invalid-credential).':
      errorStr = 'wrongCredentials';
      break;
    case 'Firebase: Error (auth/email-already-in-use).':
      errorStr = 'emailAlreadyUse';
      break;
    case 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).':
      errorStr = 'temporaryBlock';
      break;
    default:
      errorStr = 'unexpectedError';
  }

  return errorStr;
}

export default authError;
