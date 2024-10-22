import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { user } = result;
        if (user) {
          resolve(user);
        } else {
          reject(new Error('Auth is failed'));
        }
      })
      .catch((error) => reject(error));
  });
};

const registerWithEmailAndPassword = async (
  nickname: string,
  email: string,
  password: string,
) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        const { user } = result;
        if (user && auth.currentUser) {
          await updateProfile(user, {
            displayName: nickname,
          });
          await user.reload();
          const updatedUser = auth.currentUser;
          resolve(updatedUser);
        }
      })
      .catch((error) => reject(error));
  });
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
