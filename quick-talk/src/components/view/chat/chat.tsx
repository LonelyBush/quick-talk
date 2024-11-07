import Logout from '@/components/сomponent/logout/logout';
import UserList from '@/components/сomponent/user-list/user-list';
import styles from './chat-style.module.scss';

function Chat() {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.usersSection}>
        <Logout />
        <UserList />
      </div>
      <div className={styles.chatSection}>
        
      </div>
    </div>
  );
}

export default Chat;
