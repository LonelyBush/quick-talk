import UserList from '@/view/сomponents/chat/userList/userList';
import styles from './chat-style.module.scss';

async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.usersSection}>
        <UserList />
      </div>
      <div className={styles.chatSection}>{children}</div>
    </div>
  );
}

export default Layout;
