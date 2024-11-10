import UserList from '@/components/сomponent/user-list/user-list';
import styles from './chat-style.module.scss';
import DialogContainer from '@/components/сomponent/dialog-container/dialog-container';
import SendForm from '@/components/сomponent/send-form/send-form';
import DialogHeader from '@/components/сomponent/dialog-header/dialog-header';

export async function Chat() {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.usersSection}>
        <UserList />
      </div>
      <div className={styles.chatSection}>
        <DialogHeader />
        <DialogContainer />
        <SendForm />
      </div>
    </div>
  );
}

export default Chat;
