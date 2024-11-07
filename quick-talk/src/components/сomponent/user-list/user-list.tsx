import styles from './user-list-style.module.scss';
import { getUsers } from '@/firebase/db';
import { getAuthenticatedAppForUser } from '@/firebase/serverApp';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import User from '../user/user';

async function UserList() {
  const { firebaseServerApp } = await getAuthenticatedAppForUser();
  const users = (await getUsers(
    getFirestore(firebaseServerApp),
    getAuth(firebaseServerApp).currentUser,
  )) as { uid: string; nickname: string; email: string }[];
  return (
    <div className={styles.userListWrapper}>
      <input></input>
      {users.map((user) => {
        return (
          <User key={user.uid} uid={user.uid} name={user.nickname}>
            {user.nickname}
          </User>
        );
      })}
    </div>
  );
}

export default UserList;
