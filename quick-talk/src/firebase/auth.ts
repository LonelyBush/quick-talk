import { auth, db } from './firebase-config/client-app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

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
          await setDoc(doc(db, 'users', auth.currentUser.uid), {
            nickname: nickname,
            email: email,
            uid: auth.currentUser.uid,
          });
          await setDoc(doc(db, 'usersContacts', auth.currentUser.uid), {
            contacts: [],
          });
          resolve(updatedUser);
        }
      })
      .catch((error) => reject(error));
  });
};

const logout = () => {
  signOut(auth);
};

export { logInWithEmailAndPassword, registerWithEmailAndPassword, logout };
