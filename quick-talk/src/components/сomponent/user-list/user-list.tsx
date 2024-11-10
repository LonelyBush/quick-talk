import styles from './user-list-style.module.scss';
import { getUsers } from '@/firebase/db';
import { getAuthenticatedAppForUser } from '@/firebase/serverApp';
import { getFirestore } from 'firebase/firestore';
import User from '../user/user';
import Input from '@/components/ui/input/input';

async function UserList() {
  const { firebaseServerApp, currentUser } = await getAuthenticatedAppForUser();
  const users = (await getUsers(
    getFirestore(firebaseServerApp),
    currentUser,
  )) as { uid: string; nickname: string; email: string }[];
  return (
    <div className={styles.userListWrapper}>
      <Input type="text" placeholder="Search..." name="user-search" />
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
