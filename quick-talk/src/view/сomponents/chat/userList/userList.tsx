import styles from './userList.module.scss';
import btnStyles from '../../../ui/button/button-styles.module.scss';
import Link from 'next/link';
import Search from '@/view/ui/search/search';
import Contacts from '../contacts/contacts';

async function UserList() {
  return (
    <div className={styles.userListWrapper}>
      <div className={styles.searchAddContainer}>
        <Search placeholder="Search contacts..." />
        <Link href="/chat/add" className={btnStyles.btn}>
          Add
        </Link>
      </div>
      <Contacts />
    </div>
  );
}

export default UserList;
