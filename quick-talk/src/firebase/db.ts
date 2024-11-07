import {
  collection,
  Firestore,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { User } from 'firebase/auth';

const getUsers = async (db: Firestore, currentUser: User | null) => {
  return new Promise(async (resolve, reject) => {
    try {
      const usersQuery = query(
        collection(db, 'users'),
        where('uid', '!=', currentUser ? currentUser.uid : ''),
      );
      const users = await getDocs(usersQuery);
      resolve(users.docs.map((elem) => elem.data()));
    } catch (error) {
      reject(error);
    }
  });
};

export { getUsers };
