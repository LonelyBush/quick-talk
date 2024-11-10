import styles from './dialog-header-style.module.scss';

const mockUser = {
  uid: '123123123121234',
  nickname: 'Debra',
  email: 'debra@mail.com',
};

function DialogHeader() {
  return (
    <div className={styles.dialogHeaderSection}>
      <p>{mockUser.nickname}</p>
    </div>
  );
}

export default DialogHeader;
